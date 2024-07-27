'use client';
import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './Component.module.css';
import Link from 'next/link';
import MatchCard from './MatchCard';
import { supabase } from '@/utils/supabase/client';
import { useState} from 'react';

const fetcher = async () => {
  const { data } = await supabase
    .from('match_data')
    .select('*')
    .limit(50)
    .order('start_time', { ascending: true })

  return data;
};

export default function MatchSchedules() {
  const { data, error } = useSWR('/match-schedules', fetcher);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (error) {
    return <div><center>Error: {error.message}</center></div>;
  }

  if (!data) {
    return (
      <div
        className={styles.loadbox}
      >
        <center>
        <video width={20} height={20} autoPlay loop muted playsInline>
            <source src="/assets/img/loading.webm" type="video/webm" />
         </video>
        <br/>
        <span>Loading Data....</span>
        </center>
      </div>
    );
  }

  const filteredData = data.filter((schedule) => {
    const homeTeamName = schedule.home_team_name.toLowerCase();
    const awayTeamName = schedule.away_team_name.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();

    return (
      homeTeamName.includes(searchQueryLower) ||
      awayTeamName.includes(searchQueryLower)
    );
  });

  return (
    <>
      <div className={styles.menuh1}>
        <span>
          <Image
            className={styles.iconh}
            src="/assets/img/match.webp"
            alt="Live Match"
            width={14}
            height={14}
            priority
          />
          {' '}
          LIVE MATCHES TODAY
        </span>
      </div>
      <div className={styles.onmatchbox}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        {data && data.length > 0 && (
          <>
          <div id="search" style={{ padding: '1em' }}>
            <input
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search team name"
            />
          </div>
          <Link href="https://www.addtoany.com/share#url=https%3A%2F%2Ffzbola22.online" rel="noopener noreferrer" target="_blank" className={styles.button}>
          <div style={{padding:'3px'}}>
          <Image
            className={styles.iconimg}
            src="/assets/img/share.png"
            width={19}
            height={19}
            alt="Share FZBOLA22"
            loading="lazy"
          />
          </div>
        </Link>
        </>
        )}
        </div>
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
              {/* <td>
                <Link href="#" rel="noopener noreferrer" target="_blank" className={styles.link}>
                TUTORIAL
                </Link>
              </td> */}
            </tr>
          </table>
        </div>
        {filteredData.length === 0 ? (
          <div
          style={{padding:'1em'}}
        >
          <center>
          <video width={20} height={20} autoPlay loop muted playsInline>
            <source src="/assets/img/loading.webm" type="video/webm" />
         </video>
          <br/>
          <span>No match found!</span>
          </center>
        </div>
        ) : (
          filteredData.map((schedule) => (
            <MatchCard key={schedule.id} schedule={schedule} router={router} />
          ))
        )}
      </div>
    </>
  );
}