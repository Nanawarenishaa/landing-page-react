import {pricingOptions} from "../data"
import { CiCircleCheck } from "react-icons/ci";
const Pricing = () => {
  return (
    <div className="mt-20 w-full mb-10 ">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 ">
        Pricing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] mx-auto">
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 ">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                <li key={index} className="mt-8 flex items-center">
                  <CiCircleCheck className="text-2xl font-semibold" />
                    <span className="ml-2">{feature}</span>
                </li>
                ))}
              </ul>
              <a href="#" className="flex items-center justify-center text-center  w-full h-12 p-5 mt-20 text-xl hover:bg-orange-800 border border-orange-800 rounded-lg transition duration-200">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  


export default Pricing 
