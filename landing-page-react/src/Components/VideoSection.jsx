import video1 from "/video1.mp4";
import video2 from "/video2.mp4";

const VideoSection = () => {
  return (
<div className="video__section">
        <video autoPlay controls loop muted src={video1}></video>
        <video autoPlay controls loop muted src={video2}></video>
      </div>
  )
}

export default VideoSection
