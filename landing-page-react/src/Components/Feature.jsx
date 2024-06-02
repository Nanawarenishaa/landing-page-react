
import { features } from "../data"
const Feature = () => {
  return (
    <div className="w-[90%] mx-auto pt-16 border-b border-neutral-700">
    <h2 className=" text-center font-medium bg-neutral-900 text-orange-500 mx-auto rounded-full w-fit  py-1 px-2 ">FEATURE</h2>
    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-center">Easily build <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">your code</span>
        </h2>
    <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2 gap-2 mt-10 lg:mt-20  w-full sm:w-[90%] md:w-[80%] sm:[95%] mx-auto">
    {features.map((feature, index) => (
       <div key={index}>
      <div className="flex">
       <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">{feature.icon}</div>
        <div>
        <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
        <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
        </div>
        </div>
      </div>
       ))}
    </div>
    </div>
  )
}

export default Feature
