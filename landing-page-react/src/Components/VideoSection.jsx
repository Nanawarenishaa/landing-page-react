import video1 from "../assets/profile-pictures/video1.mp4";
import video2 from "../assets/profile-pictures/video2.mp4";

const VideoSection = () => {
  return (
<div className="w-full h-96 flex gap-6 items-center justify-center mt-10 md:mt-20">
        <video autoPlay controls loop muted src={video1} className="w-[40%] rounded-md shadow-sm shadow-orange-400 border  border-orange-600"></video>
        <video autoPlay controls loop muted src={video2} className="w-[40%] rounded-md shadow-sm shadow-orange-400 border  border-orange-600"></video>
      </div>
      
  )
}

export default VideoSection
