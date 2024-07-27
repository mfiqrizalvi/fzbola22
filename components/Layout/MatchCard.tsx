'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import styles from './Component.module.css';
import moment from 'moment-timezone';
import { useState, useEffect } from 'react';

interface MatchCardProps {
    schedule: {
      id: number;
      start_time: string;
      home_team_logo_url: string;
      away_team_logo_url: string;
      home_team_name: string;
      away_team_name: string;
      API_id: string;
    }
    router: ReturnType<typeof useRouter>;
  }
  
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const MatchCard = ({ schedule }: MatchCardProps) => {
    const [startTime] = useState(moment(schedule.start_time));
    const [currentTime, setCurrentTime] = useState(moment());
    const [isLive, setIsLive] = useState(false);
    const [showLeagueLogo, setShowLeagueLogo] = useState(false);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(moment());
        if (currentTime.isAfter(startTime)) {
          setIsLive(true);
        }
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [startTime, currentTime]);
  
    const countdown = () => {
      const diff = startTime.diff(currentTime);
      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
  
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const apiURL = process.env.NEXT_PUBLIC_API_MATCH;
    const API_id = schedule.API_id;
    const { data, error} = useSWR(
        `${apiURL}${API_id}`,
        fetcher
    );

    if (!data) {
        return (
            <div
              className={styles.onmatch}
              style={{padding:'1em'}}
            >
              <center>
              <video width={20} height={20} autoPlay loop muted playsInline>
                  <source src="/assets/img/loading.webm" type="video/webm" />
               </video>
              </center>
            </div>
          );
    }

    if (error) {
        return <span style={{textAlign:'center'}}>Error: {error.message}</span>;
    }
    
    return (
      <div
        key={schedule.id}
        className={`${styles.onmatch} ${isLive? styles.live : ''}`}
        style={{
          cursor: isLive ? 'pointer' : 'default',
          backgroundColor: isLive ? '#1e1e1e' : '#343434',
          boxShadow: isLive? 'none' : 'inset 0 0 2px #000000'
        }}
        onMouseOver={() => setShowLeagueLogo(true)}
        onMouseOut={() => setShowLeagueLogo(false)}
        onClick={(event) => {
          if (isLive) {
            event.preventDefault();
            window.open(`./watch/${schedule.id}`, '_blank');
            window.location.href = 'https://thefacux.com/4/7766686';
          }
        }}
      >
        <div className={styles.boxdat}>
        <span style={{ textTransform: 'uppercase', fontWeight: 'bold',fontSize:'9px', color:'#FDD029' }}>
          &nbsp;{data.competition_name} {data.area_name ? `( ${data.area_name} )` : ''}
        </span>
          {isLive ? (
            <span className={`${styles.blinksoft} ${styles.livetxt}`}>&emsp;LIVE&emsp;</span>
          ) : (
            <code className={styles.countdown}>&emsp;{countdown()}&emsp;</code>
          )}
        </div>
        <div>
        <table style={{ tableLayout: 'fixed', width: '100%', textTransform: 'uppercase', textAlign: 'center', verticalAlign: 'middle' }}>
  <tr>
    <td style={{ width: '40%', textAlign: 'center', fontSize: '9px' }}>
      <span>{data.home_name}</span>
    </td>
    <td style={{ width: '10%', textAlign: 'right' }}>
      <img
        src={schedule.home_team_logo_url}
        height={28}
        width='auto'
        alt={data.home_name}
        loading="lazy"
      />
    </td>
    {isLive ? (
      <td style={{ width: '20%', textAlign: 'center' }}>
        {showLeagueLogo ? (
          <img
            src="/assets/img/play.png"
            height={26}
            width='auto'
            alt="League Logo"
            loading="lazy"
          />
        ) : (
          <span>VS</span>
        )}
      </td>
    ) : (
      <td style={{ width: '20%', textAlign: 'center' }}>
        <span>VS</span>
      </td>
    )}
    <td style={{ width: '10%', textAlign: 'left' }}>
      <img
        src={schedule.away_team_logo_url}
        height={28}
        width='auto'
        alt={data.away_name}
        loading="lazy"
      />
    </td>
    <td style={{ width: '40%', textAlign: 'center', fontSize: '9px' }}>
      <span>{data.away_name}</span>
    </td>
  </tr>
</table>
        </div>
      </div>
    );
  };

  export default MatchCard