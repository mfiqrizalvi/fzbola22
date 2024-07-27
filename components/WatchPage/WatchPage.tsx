"use client";
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import VideoPlayer from './PlayerVid';
import styles from '../Layout/Component.module.css';
import WatchHeader from '../Layout/WatchHeader';
import MatchInfo from '../Layout/MatchInfo';
import ChatRoom from '../Layout/ChatRoom';
import { supabase } from '@/utils/supabase/client';
import { addListener, launch } from 'devtools-detector';
import Image from 'next/image';
import Link from 'next/link';

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
        const { data } = await supabase
         .from('match_data')
         .select('id, home_team_logo_url, away_team_logo_url, home_team_name, away_team_name, API_id, start_time')
         .eq('id', id);
        
        if (data && data.length > 0) {
          setSchedule(data[0]); 
          const startTime = new Date(data[0].start_time).getTime();
          const currentTime = new Date().getTime();
          if (currentTime < startTime) {
            const countdownTime = startTime - currentTime;
            setCountdown(countdownTime);
          } else {
            setCountdown(null);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchSchedule();
  }, [id]); 

  useEffect(() => {
    if (countdown !== null) {
      const intervalId = setInterval(() => {
        setCountdown(countdown - 1000);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [countdown]); 

  if (!schedule) {
    return (
      <div
        className={styles.loadbox}
        style={{padding:'3em'}}
      >
        <center>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/a/ad/YouTube_loading_symbol_3_%28transparent%29.gif'
          height={20}
          width={20}
          alt='Loading'
          loading="lazy"
        />
        <br/>
        <span>Loading Player....</span>
        </center>
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
              <WatchHeader
                home_team_logo_url={schedule.home_team_logo_url}
                away_team_logo_url={schedule.away_team_logo_url}
                home_team_name={schedule.home_team_name}
                away_team_name={schedule.away_team_name}
                API_id={schedule.API_id}
                API_Url={`${apiURL}`}
              />
          <div className={styles.player}>
            <VideoPlayer embedUrl={`${playerUrl}${schedule.id}`} />
            <div className={styles.donate} data-nosnippet>
          <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
            <tr>
              <td>
                <Link href="https://bit.ly/3xd9pNY" rel="noopener noreferrer" target="_blank" className={styles.link}>
                DONATE - SAWERIA
                </Link>
              </td>
              <td>
                <Link href="https://bit.ly/4cnOck8" rel="noopener noreferrer" target="_blank" className={styles.link}>
                DONATE - KO-FI
                </Link>
              </td>
            </tr>
          </table>
        </div>
          </div>
            <ChatRoom/>
          <div className={styles.matchinfo}>
            <MatchInfo
              home_team_name={schedule.home_team_name}
              away_team_name={schedule.away_team_name}
              API_id={schedule.API_id}
              API_Url={`${apiURL}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchsPage;