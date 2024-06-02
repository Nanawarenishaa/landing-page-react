import { testimonials  } from "../data"

const Testimonial = () => {
  return (
    <div className="w-full mt-20 mb-10">
      <h2 className="text-3xl md:text-6xl text-center ">What People are saying</h2>
      <div className=" w-[95%] md:w-[90%]  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-6 p-8 font-thin ">
       {testimonials.map((testimonial , index ) => (
        <div className=" border border-neutral-700 py-4 bg-neutral-900 px-4 flex flex-col gap-4 rounded-md " key={index} >
          <p className="text-neutral-300">{testimonial.text}</p>
          <div className="flex items-center gap-4">
            <img src={testimonial.image} alt="" className="w-[15%] rounded-full border" />
            <div className="flex flex-col gap-2 ">
                <span className="text-neutral-300">{testimonial.user}</span>
                <p className="text-neutral-400">{testimonial.company}</p>
            </div>
          </div>
        </div>
       ))}

      </div>
    </div>
  )
}

export default Testimonial
