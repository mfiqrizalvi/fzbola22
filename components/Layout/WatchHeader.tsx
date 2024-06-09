import useSWR from 'swr';
import Image from 'next/image';
import styles from './Component.module.css'

interface MatchDataProps {
  home_team_logo_url: string;
  away_team_logo_url: string;
  home_team_name: string;
  away_team_name: string;
  API_id: string;
  API_Url: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const WatchHeader: React.FC<MatchDataProps> = ({
  home_team_logo_url,
  away_team_logo_url,
  home_team_name,
  away_team_name,
  API_id,
  API_Url,
}) => {
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
    return <div style={{textAlign:'center'}}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
      <tr style={{ border: '1px solid #3D3D3D' }}>
        <td className={styles.col5} style={{ textAlign: 'left' }}>
            <Image
              className={`${styles.iconimg} ${styles.sdwteam}`}
              src={home_team_logo_url}
              alt={home_team_name}
              width={14}
              height={14}
              priority
            />
           <span id={styles.upsmatchtxt}>
            &nbsp;&nbsp;&nbsp;{home_team_name}
          </span>
        </td>
        <td className={styles.col2} style={{ textAlign: 'center' }}>
          <span>
            {data.live ? (
              <span className={styles.watchscore}>
                {data.ft && !data.et && (
                  <span>
                    {data.ft[0]}&nbsp;-&nbsp;{data.ft[1]}
                  </span>
                )}
                {data.et && !data.ps && (
                  <span>
                    {data.et[0]}&nbsp;-&nbsp;{data.et[1]} aet
                  </span>
                )}
                {data.ps && (
                  <span>
                    {" "}
                    p.{data.ps[0]}-{data.ps[1]}
                  </span>
                )}
              </span>
            ) : data.ended ? (
              <span>
                {data.ft && !data.et && (
                  <span>
                    {data.ft[0]}&nbsp;-&nbsp;{data.ft[1]}
                  </span>
                )}
                {data.et && !data.ps && (
                  <span>
                    {data.et[0]}&nbsp;-&nbsp;{data.et[1]} aet
                  </span>
                )}
                {data.ps && (
                  <span>
                    {" "}
                    p.{data.ps[0]}-{data.ps[1]}
                  </span>
                )}
              </span>
            ) : (
              <span className={styles.watchscore}>•••</span>
            )}
          </span>
        </td>
        <td className={styles.col5} style={{ textAlign: 'right' }}>
          <span id={styles.upsmatchtxt}>
            {away_team_name}&nbsp;&nbsp;&nbsp;
          </span>
            <Image
              className={`${styles.iconimg} ${styles.sdwteam}`}
              src={away_team_logo_url}
              alt={away_team_name}
              width={14}
              height={14}
              priority
            />
        </td>
      </tr>
    </tbody>
  </table>  
  );
};

export default WatchHeader;