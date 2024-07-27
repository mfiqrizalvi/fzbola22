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
    return (
      <div
        className={styles.watchhead}
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
    return <div style={{textAlign:'center'}}>Error: {error.message}</div>;
  }

  return (
    <div style={{ textTransform: 'uppercase' }}>
    <div className={styles.date} style={{textAlign:'center'}}>
    <span style={{ fontWeight: 'bold',fontSize:'9px' }}>
      {data.competition_name} {data.area_name ? `- ${data.area_name}` : ''} &#10088; {data.round_name} &#10089;
    </span>
  </div>
    <div className={styles.watchhead}
      style={{fontSize:'15px'}}
    >
    <table style={{ width: '100%', tableLayout: 'fixed' }}>
      <tbody>
      <tr style={{ border: '1px solid #3D3D3D' }}>
        <td className={styles.col5} style={{ textAlign: 'right', width: '30%' }}>
            <Image
              src={home_team_logo_url}
              alt={data.home_name}
              width={64}
              height={0}
              style={{
                width: 'auto',
                height: '30px',
              }}
              priority
            />
        </td>
        <td style={{ width: '15%', textAlign: 'center' }}>
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
                    ET.&nbsp;{data.et[0]}&nbsp;-&nbsp;{data.et[1]}
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
                    ET.&nbsp;{data.et[0]}&nbsp;-&nbsp;{data.et[1]}
                  </span>
                )}
                {data.ps && (
                  <span>
                    {" "}
                    P.&nbsp;{data.ps[0]}-{data.ps[1]}
                  </span>
                )}
              </span>
            ) : (
              <span className={styles.watchscore}>•••</span>
            )}
          </span>
        </td>
        <td className={styles.col5} style={{ textAlign: 'left', width: '30%' }}>
            <Image
              src={away_team_logo_url}
              alt={data.away_name}
              width={64}
              height={0}
              style={{
                width: 'auto',
                height: '30px',
              }}
              priority
            />
        </td>
      </tr>
    </tbody>
  </table>  
  </div>
  </div>
  ); 
};

export default WatchHeader;