import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isOpen , setIsOpen] = useState (false);
  const toggleNavBar = () => {
    setIsOpen (!isOpen)
  }
  return (
    <div className="w-full flex items-center justify-around backdrop-blur-lg fixed py-2 border-b border-neutral-700">
        <div className="flex gap-2 items-center  ">
        <img src="logo.png" alt="" className="w-12 " />
        <span className="text-xl">VirtualR</span>
        </div>
       <nav className="hidden md:flex gap-12 text-sm">
        <a href="/" className="">Features </a>
        <a href="/" >Workflow </a>
        <a href="/" >Pricing </a>
        <a href="/" >Testimonial</a>
       </nav>
       {isOpen && (
       <nav className="md:hidden flex flex-col gap-6 pt-8 text-center  bg-neutral-900 w-full absolute top-16 h-80">
        <a href="/" >Features </a>
        <a href="/" >Workflow </a>
        <a href="/" >Pricing </a>
        <a href="/" >testimonial</a>
        <div className="flex gap-8 mx-auto">
        <button className="border border-white rounded py-2 px-4">Sign In </button>
        <button className="rounded py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800">Create an Account </button>
       </div>
       </nav>

       )}

       <div className="hidden md:flex gap-12 text-sm">
        <button className="border border-white rounded py-1 px-4">Sign In </button>
        <button className="rounded py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800">Create an Account </button>
       </div>
       <div className="block md:hidden " onClick={toggleNavBar}>
        {isOpen ? <IoCloseSharp className="text-3xl" /> : <IoMenu className="text-3xl" />}
      </div>
    </div>
  )
}

export default Header
