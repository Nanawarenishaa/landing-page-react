import video1 from "/video1.mp4";
import video2 from "/video2.mp4";
const Herosection = () => {
  return (
    <div className="w-full pt-56">
      <div className="md:w-[80%] sm:w-[90%] w-[95%]  m-auto text-center flex flex-col gap-4  ">
     <h2 className="text-5xl md:text-7xl ">VirtualR build tools <span className="bg-gradient-to-r from-orange-400 to-red-800 text-transparent bg-clip-text">for developers</span></h2>
     <p className="mt-2 text-neutral-500 text-xl">Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
     <div className="flex gap-8 mt-8 mx-auto w-fit">
      <button className="rounded py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800"> Start for free</button>
      <button className="border border-white rounded py-2 px-4"> Documentation</button>
      
     </div>

      </div>
      <div className="grid grid-cols-2 gap-4 items-center justify-center w-full lg:px-16 md:px-14 sm:px-10 px-8 py-6 mt-16  mx-auto">
            <video className="border border-orange-500 rounded-md shadow-sm shadow-orange-600 " src={video1} autoPlay loop muted></video>
            <video className="border border-orange-500  rounded-md shadow-sm shadow-orange-600 " src={video2} autoPlay loop muted ></video>
      </div>
    </div>
  )
}

export default Herosection
