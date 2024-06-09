import useSWR from 'swr';
import Image from 'next/image';
import styles from './Component.module.css';
import BottomBannerAds from './BottomBannerAds';

interface MatchData {
  match_id: string;
  date: string;
  time: string;
  home_id: string;
  home_name: string;
  home_country: string;
  away_id: string;
  away_name: string;
  away_country: string;
  ended: boolean;
  penalty_shootout: null | string;
  goals: Goal[];
  ft: number[];
  ht: number[];
  venue: Venue;
  home_coach: Coach;
  away_coach: Coach;
  home_players: Player[];
  away_players: Player[];
  cards: Card[];
  competition_id: string;
  competition_name: string;
  area_name: string;
  round_name: string;
  teamtype: null | string;
}

interface Goal {
  person_id: string;
  name: string;
  code: string;
  score: number[];
  min: string;
}

interface Venue {
  venue_id: string;
  name: string;
  city: string;
}

interface Coach {
  person_id: string;
  name: string;
}

interface Player {
  person_id: string;
  name: string;
  in?: string;
  out?: string;
}

interface Card {
  person_id: string;
  name: string;
  code: string;
  min: string;
}

interface MatchDataProps {
  home_team_name: string;
  away_team_name: string;
  API_id: string;
  API_Url: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());


const MatchInfo: React.FC<MatchDataProps> = ({ home_team_name, away_team_name, API_id, API_Url }) => {
  const { data, error, mutate } = useSWR(
    `${API_Url}${API_id}`,
    fetcher,
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 5000,
    }
  );

  if (!data) {
    return <div style={{textAlign:'center',fontSize:'10px',fontWeight:'bold'}}>LOADING...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const matchData = data as MatchData;

  return (
    <div style={{textTransform:'uppercase'}}>
      {matchData.venue && (
        <div className={styles.infobox} style={{ textAlign: 'center', fontSize:'10px' }}>
          <span style={{ fontWeight: 'bold' }}>
            {matchData.venue.name} - {matchData.venue.city}
          </span>
        </div>
      )}
      {matchData.goals && matchData.goals.length > 0 && (
        <div className={styles.infobox}>
          <span style={{ fontWeight: 'bold' }}>Goals :</span>
          {matchData.goals.map((goal, index) => (
            <pre key={index}>
              <b>
                {goal.score[0]} - {goal.score[1]}
              </b>{' '} 
              {goal.name} {goal.min}&apos; {goal.code === 'G'? '' : `(${goal.code})`}
            </pre>
          ))}
        </div>
      )}
      <div className={styles.iklan3}>
        <BottomBannerAds />
      </div>
      {matchData.home_players && matchData.away_players && matchData.home_players.length > 0 && matchData.away_players.length > 0 && (
        <>
        <div style={{padding:'2px'}}>
          <table>
            <tbody>
              <tr>
                <td
                  className={styles.col5}
                  style={{ border: '1px solid #3D3D3D', textAlign: 'center' }}
                >
                  <span style={{ fontWeight: 'bold' }}>{home_team_name} :</span>
                </td>
                <td
                  className={styles.col5}
                  style={{ border: '1px solid #3D3D3D', textAlign: 'center' }}
                >
                  <span style={{ fontWeight: 'bold' }}>{away_team_name} :</span>
                </td>
              </tr>
              <tr>
                <td
                  className={styles.col5}
                  style={{ border: '1px solid #3D3D3D', textAlign: 'center', verticalAlign: 'top' }}
                >
                  <div style={{ display: 'inline-block', textAlign: 'left' }}>
                    {matchData.home_players.map((player, index) => (
                      <pre key={index}>
                        {player.in ? ` > ${player.in}' ` : ''}
                        {player.name}&emsp;
                        {matchData.cards?.filter((card) => card.person_id === player.person_id)
                        .map((card, index) => (
                            <span key={index}>
                            {card.code === 'Y2C' && (
                                <>
                                <Image
                                className={`${styles.iconimg}`}
                                src="/assets/img/2yellow.png" 
                                alt="Yellow Card"
                                width={26}
                                height={14}
                                priority
                                />
                                </>
                            )}
                            {card.code === 'YC' &&
                                !matchData.cards?.find((c) => c.person_id === player.person_id && c.code === 'Y2C') && (
                                    <Image
                                    className={`${styles.iconimg}`}
                                    src="/assets/img/yellow.png" 
                                    alt="Yellow Card"
                                    width={11}
                                    height={14}
                                    priority
                                    />
                                )}
                            {card.code === 'RC' && (
                                <Image
                                className={`${styles.iconimg}`}
                                src="/assets/img/red.png" 
                                alt="Red Card"
                                width={11}
                                height={14}
                                priority
                                />
                            )}
                            </span>
                        ))}
                      </pre>
                    ))}
                  </div>
                </td>
                <td
                  className={styles.col5}
                  style={{ border: '1px solid #3D3D3D', textAlign: 'center', verticalAlign: 'top' }}
                >
                  <div style={{ display: 'inline-block', textAlign: 'left' }}>
                    {matchData.away_players.map((player, index) => (
                      <pre key={index}>
                        {player.in ? ` > ${player.in}' ` : ''}
                        {player.name}&emsp;
                        {matchData.cards?.filter((card) => card.person_id === player.person_id)
                        .map((card, index) => (
                            <span key={index}>
                            {card.code === 'Y2C' && (
                                <>
                                <Image
                                className={`${styles.iconimg}`}
                                src="/assets/img/2yellow.png" 
                                alt="Yellow Card"
                                width={26}
                                height={14}
                                priority
                                />
                                </>
                            )}
                            {card.code === 'YC' &&
                                !matchData.cards?.find((c) => c.person_id === player.person_id && c.code === 'Y2C') && (
                                    <Image
                                    className={`${styles.iconimg}`}
                                    src="/assets/img/yellow.png" 
                                    alt="Yellow Card"
                                    width={11}
                                    height={14}
                                    priority
                                    />
                                )}
                            {card.code === 'RC' && (
                                <Image
                                className={`${styles.iconimg}`}
                                src="/assets/img/red.png" 
                                alt="Red Card"
                                width={11}
                                height={14}
                                priority
                                />
                            )}
                            </span>
                        ))}
                      </pre>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MatchInfo;