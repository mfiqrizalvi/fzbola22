'use client';
import useSWR from 'swr';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Component.module.css';
import UpcomingMatch from './UpcomingMatch';
import moment from 'moment-timezone';
import { useState, useEffect } from 'react';

interface MatchSchedule {
  id: number;
  start_time: string;
  league_logo_url: string;
  home_team_logo_url: string;
  away_team_logo_url: string;
  home_team_name: string;
  away_team_name: string;
}

const apiURL = process.env.NEXT_PUBLIC_API_LIVE;
const fetcher = async () => {
  const response = await axios.get(`${apiURL}`);
  return response.data;
};

export default function MatchSchedules() {
  const { data, error } = useSWR('/match-schedules', fetcher);
  const router = useRouter();
  const [activeMatches, setActiveMatches] = useState<MatchSchedule[]>([]);
  const [visitorTimeZone, setVisitorTimeZone] = useState('');

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setVisitorTimeZone(timeZone);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data) {
        const activeMatches = data.filter((schedule: MatchSchedule) => {
          const startTime = moment.utc(schedule.start_time).tz(visitorTimeZone);
          const currentTime = moment.tz(visitorTimeZone);
        
          return currentTime.isSameOrAfter(startTime);
        });

        setActiveMatches(activeMatches);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [data, visitorTimeZone]);

  if (error) {
    return <div><center>Error: {error.message}</center></div>;
  }

  if (!data) {
    return (
      <div
        className={styles.match}
        id={styles["lmatch"]}
      >
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
          src="/assets/img/match.webp"
          alt="Live Match"
          width={14}
          height={14}
          priority
        />
        {' '}
        <span>LIVE MATCH</span>
      </div>
      <div className={styles.onmatchbox}>
        {activeMatches.length === 0 ? (
          <div className={styles.loadbox}>
            <center>
              <video width={116} height={30} autoPlay loop muted playsInline>
                <source src="/assets/img/loads.webm" type="video/webm" />
              </video>
            <h2>No match has started yet!</h2>
            </center>
          </div>
        ) : (
          activeMatches.map((schedule) => (
            <MatchCard key={schedule.id} schedule={schedule} router={router} />
          ))
        )}
      </div>
      <UpcomingMatch />
    </>
  );
}

interface MatchCardProps {
  schedule: {
    id: number;
    start_time: string;
    league_logo_url: string;
    home_team_logo_url: string;
    away_team_logo_url: string;
    home_team_name: string;
    away_team_name: string;
  }
  router: ReturnType<typeof useRouter>;
}

const MatchCard = ({ schedule, router }: MatchCardProps) => {
  return (
    <div
      className={styles.onmatch}
      id={styles["lmatch"]}
      onClick={() => router.push(`./watch/${schedule.id}`)}
    >
      <div className={styles.status}>
        <button className={styles.statusfloatright1}>
          <Image
            className={styles.imglk}
            src={schedule.league_logo_url}
            width={28}
            height={28}
            alt="Competition"
            loading="lazy"
          />
          <br/>
          <span className={`${styles.blinksoft} ${styles.livetxt}`}>
            LIVE
          </span>
        </button>
      </div>
      <div>
        <Image
          className={`${styles.iconimg} ${styles.sdwteam}`}
          src={schedule.home_team_logo_url}
          width={20}
          height={20}
          alt={schedule.home_team_name}
          loading="lazy"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span id={styles["onmatchtxt"]}>{schedule.home_team_name}</span>
        <br />
        <Image
          className={`${styles.iconimg} ${styles.sdwteam}`}
          src={schedule.away_team_logo_url}
          width={20}
          height={20}
          alt={schedule.away_team_name}
          loading="lazy"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span id={styles["onmatchtxt"]}>{schedule.away_team_name}</span>
      </div>
    </div>
  );
};