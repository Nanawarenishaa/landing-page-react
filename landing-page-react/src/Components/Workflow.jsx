import { checklistItems } from "../data"
import { FaRegCircleCheck } from "react-icons/fa6";
import codeImg from "/code.jpg"
const Workflow = () => {
  return (
    <div className="mt-20 ">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide ">
      Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        coding workflow.
      </span>
    </h2>
    <div className="grid grid-cols-1 w-[90%] mx-auto md:grid-cols-2  justify-center">
      <div className="py-2 ">
        <img src={codeImg} alt=""  className="w-[90%] ml-4" />
      </div>
      <div className="pt-12 ">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex mb-12 ">
            <div className="text-green-400 text-2xl mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
            <FaRegCircleCheck />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  )
}

export default Workflow
