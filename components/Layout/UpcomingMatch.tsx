'use client';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import styles from './Component.module.css'
import moment from 'moment-timezone';
import SocialShare from './SocialShare';

interface MatchData {
  id: number;
  start_time: string;
  home_team_logo_url: string;
  home_team_name: string;
  away_team_logo_url: string;
  away_team_name: string;
  league_logo_url: string;
}

const apiURL = process.env.NEXT_PUBLIC_API_UPS;
const fetcher = async () => {
  const response = await axios.get(`${apiURL}`);
  return response.data;
};

export default function UpcomingMatch() {
  const { data, error } = useSWR('/upcoming-match', fetcher);
  const [showMore, setShowMore] = useState(false);
  const [visitorTimeZone, setVisitorTimeZone] = useState('');
  const [countdowns, setCountdowns] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setVisitorTimeZone(timeZone);
  }, []);

  useEffect(() => {
    if (data && visitorTimeZone) {
      const newCountdowns: { [key: number]: number } = {};
      data.forEach((match: MatchData) => {
        if (match.start_time) {
          const startTime = moment.utc(match.start_time).tz(visitorTimeZone);
          const currentTime = moment.tz(visitorTimeZone);
          if (startTime && currentTime) {
            const diff = startTime.diff(currentTime);
            newCountdowns[match.id] = diff;
          } else {
            console.error('startTime or currentTime is undefined');
          }
        } else {
          console.error('match.start_time is undefined');
        }
      });
      setCountdowns(newCountdowns);
    }
  }, [data, visitorTimeZone]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (data && visitorTimeZone) {
        const newCountdowns: { [key: number]: number } = {};
        data.forEach((match: MatchData) => {
          if (match.start_time) {
            const startTime = moment.utc(match.start_time).tz(visitorTimeZone);
            const currentTime = moment.tz(visitorTimeZone);
            if (startTime && currentTime) {
              const diff = startTime.diff(currentTime);
              newCountdowns[match.id] = diff;
            } else {
              console.error('startTime or currentTime is undefined');
            }
          } else {
            console.error('match.start_time is undefined');
          }
        });
        setCountdowns(newCountdowns);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [data, visitorTimeZone]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return (
      <div className={styles.match} id={styles["lmatch"]}>
        <center>
          <video width={116} height={30} autoPlay loop muted playsInline>
            <source src="/assets/img/loads.webm" type="video/webm" />
          </video>
        <h2>Loading....</h2>
        </center>
      </div>
    );
  }

  return (
    <>
      <div className={styles.menuh}>
        <Image
          className={styles.iconh}
          src="/assets/img/update.webp"
          alt="Upcoming Match"
          width={14}
          height={14}
          priority
        />
        {" "}
        <span>UPCOMING MATCH</span>
      </div>
      <div className={styles.eventliga}>
        {data.length === 0 || data.every((nmatches: MatchData) => moment.utc(nmatches.start_time).tz(visitorTimeZone) <= moment.tz(visitorTimeZone)) ? (
          <div className={styles.loadbox}>
            <center>
              <video width={116} height={30} autoPlay loop muted playsInline>
                <source src="/assets/img/loads.webm" type="video/webm" />
              </video>
            <h2>There are no matches coming up yet!</h2>
            </center>
          </div>
        ) : (
          data.filter((nmatches: MatchData) => {
            if (nmatches.start_time) {
              const startTime = moment.utc(nmatches.start_time).tz(visitorTimeZone);
              const currentTime = moment.tz(visitorTimeZone);
              if (startTime && currentTime) {
                return currentTime < startTime;
              } else {
                console.error('startTime or currentTime is undefined');
                return false;
              }
            } else {
              console.error('nmatches.start_time is undefined');
              return false;
            }
          }).slice(0, showMore? data.length : 5).map((nmatches: MatchData) => {
            if (countdowns[nmatches.id]) {
              const countdown = countdowns[nmatches.id];
              const hours = Math.floor(countdown / 3600000);
              const minutes = Math.floor((countdown % 3600000) / 60000);
              const seconds = Math.floor((countdown % 60000) / 1000);
              return (
                <div key={nmatches.id}>
                  <div className={styles.upsmatch}>
                    <table>
                      <tbody>
                        <tr>
                          <td className={styles.col5}>
                              <Image
                                className={`${styles.iconimg} ${styles.sdwteam}`}
                                src={nmatches.home_team_logo_url}
                                alt={nmatches.home_team_name}
                                width={13}
                                height={13}
                                priority
                              />
                              <span id={styles["upsmatchtxt"]}>
                                &nbsp;&nbsp;&nbsp;{nmatches.home_team_name}
                              </span>
                          </td>
                          <td className={`${styles.col1} ${styles.comp}`}>
                            <center>
                            <Image
                              className={`${styles.iconimg} ${styles.imglk}`}
                              src={nmatches.league_logo_url}
                              alt="competition"
                              width={20}
                              height={20}
                              priority
                            />
                            <code id={styles["countdowntxt"]}>
                              {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                            </code>
                            </center>
                          </td>
                          <td className={`${styles.col5} ${styles.righttxt}`}>
                          <span id={styles["upsmatchtxt"]}>{nmatches.away_team_name}&nbsp;&nbsp;&nbsp;</span>
                              <Image
                                className={`${styles.iconimg} ${styles.sdwteam}`}
                                src={nmatches.away_team_logo_url}
                                alt={nmatches.away_team_name}
                                width={13}
                                height={13}
                                priority
                              />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            } else {
              console.error(`countdowns[${nmatches.id}] is undefined`);
              return null;
            }
          })
        )}
        {data.filter((nmatches: MatchData) => {
          if (nmatches.start_time) {
            const startTime = moment.utc(nmatches.start_time).tz(visitorTimeZone);
            const currentTime = moment.tz(visitorTimeZone);
            if (startTime && currentTime) {
              return currentTime < startTime;
            } else {
              console.error('startTime or currentTime is undefined');
              return false;
            }
          } else {
            console.error('nmatches.start_time is undefined');
            return false;
          }
        }).length > 5 && (
          <center>
            <button className={styles.button} onClick={() => setShowMore(!showMore)}>
              {showMore? 'Show Less' : 'Show More'}
            </button>
          </center>
        )}
        <div style={{border:'1px solid #323232', margin: '0 1px'}}>
        <SocialShare/>
        </div>
      </div>
    </>
  );
}