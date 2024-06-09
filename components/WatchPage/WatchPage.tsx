"use client";
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import VideoPlayer from './PlayerVid';
import styles from '../Layout/Component.module.css';
import WatchHeader from '../Layout/WatchHeader';
import MatchInfo from '../Layout/MatchInfo';
import SocialShare from '../Layout/SocialShare';
import { addListener, launch } from 'devtools-detector';

interface SoccerSchedule {
  id: string;
  home_team_logo_url: string;
  home_team_name: string;
  away_team_logo_url: string;
  away_team_name: string;
  API_id: string;
}

const WatchsPage: NextPage = () => {
  const { id } = useParams();
  const [schedule, setSchedule] = useState<SoccerSchedule | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const playerUrl = process.env.NEXT_PUBLIC_PLAYER_URL;
  const apiURL = process.env.NEXT_PUBLIC_API_MATCH;
  const apiWURL = process.env.NEXT_PUBLIC_API_WATCH;

  useEffect(() => {
    const view = document.createElement('div');
    document.body.appendChild(view);
    addListener((isOpen) => {
      view.innerText = isOpen? 'Devtools is open' : 'Devtools is closed';
      if (isOpen) {
        window.history.replaceState({}, '', '/');
        window.location.href = 'https://fzbola22.online/';
      }
    });
    launch();
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(`${apiWURL}${id}`); // use apiWURL instead of process.env.NEXT_PUBLIC_API_WATCH
        const data = await response.json();
        setSchedule(data[0]); // assuming the API returns an array with a single object
        const startTime = new Date(data[0].start_time).getTime();
        const currentTime = new Date().getTime();
        if (currentTime < startTime) {
          const countdownTime = startTime - currentTime;
          setCountdown(countdownTime);
        } else {
          setCountdown(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSchedule();
  }, [id, apiWURL]); // include apiWURL in the dependency array

  useEffect(() => {
    if (countdown !== null) {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 1000);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countdown, apiWURL]); // include apiWURL in the dependency array

  if (!schedule) {
    return (
      <div className={styles.match} id={styles["lmatch"]}>
        <center>
          <video width={116} height={30} autoPlay loop muted playsInline>
            <source src="/assets/img/loads.webm" type="video/webm" />
         </video>
        </center>
        <h2 style={{ textAlign: 'center' }}>LOADING PLAYER....</h2>
      </div>
    );
  }

  if (countdown !== null) {
    const hours = Math.floor(countdown / 3600000);
    const minutes = Math.floor((countdown % 3600000) / 60000);
    const seconds = Math.floor((countdown % 60000) / 1000);
    return (
      <div className={styles.match} id={styles["lmatch"]}>
        <center>
          <pre>
          <h2 style={{ textAlign: 'center' }}>
          MATCH STARTS IN<br/>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </h2>
          </pre>
        </center>
      </div>
    );
  }


  return (
    <div>
      {schedule && (
        <div>
          <div className={styles.watchhead} style={{textTransform:'uppercase'}}>
            <div>
                  <WatchHeader
                    home_team_logo_url={schedule.home_team_logo_url}
                    away_team_logo_url={schedule.away_team_logo_url}
                    home_team_name={schedule.home_team_name}
                    away_team_name={schedule.away_team_name}
                    API_id={schedule.API_id}
                    API_Url={`${apiURL}`}
                  />
            </div>
          </div>
          <div className={styles.player}>
            <VideoPlayer embedUrl={`${playerUrl}${schedule.id}`} />
          </div>
          <div className={styles.matchinfo}>
            <MatchInfo
              home_team_name={schedule.home_team_name}
              away_team_name={schedule.away_team_name}
              API_id={schedule.API_id}
              API_Url={`${apiURL}`}
            />
            <SocialShare />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchsPage;