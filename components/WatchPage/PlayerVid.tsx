import { useEffect } from 'react';

interface VideoPlayerProps {
  embedUrl?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ embedUrl }) => {
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        (screen.orientation as any).lock('landscape').catch((error: any) => {
          console.error('Failed to lock screen orientation:', error);
        });
      } else {
        (screen.orientation as any).unlock();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div
  style={{
    position: "relative",
    paddingTop: "56.25%",
    width: "100%",
    height: "auto"
  }}
>
  <iframe
    src={embedUrl}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      border: "none"
    }}
    allow="encrypted-media *; autoplay"
    height="100%"
    width="100%"
    allowFullScreen={true}
  />
</div>
  );
};

export default VideoPlayer;