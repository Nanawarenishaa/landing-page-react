import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import logo  from "/logo.png"
import { navItems } from "../data";
const Header = () => {
  const [isOpen , setIsOpen] = useState (false);
  const toggleNavBar = () => {
    setIsOpen (!isOpen)
  }
  return (
    <header className="w-full flex items-center justify-around backdrop-blur-lg fixed py-2 border-b border-neutral-700">
        <div className="flex gap-2 items-center  ">
        <img src={logo} alt="" className="w-12 " />
        <span className="text-xl">VirtualR</span>
        </div>
       <ul className="hidden md:flex gap-12 text-sm">
       {navItems.map((items, index ) => (
       <li key={index}>
          <a href={items.href}>{items.label}</a>
       </li>
       ))}
       </ul>
       {isOpen && (
       <ul className="md:hidden flex flex-col gap-6 pt-8 text-center  bg-neutral-900 w-full absolute top-16 h-80">
       {navItems.map((items, index ) => (
       <li key={index}>
          <a href={items.href}>{items.label}</a>
       </li>
       ))}
        <div className="flex gap-8 mx-auto">
        <button className="border border-white rounded py-2 px-4">Sign In </button>
        <button className="rounded py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800">Create an Account </button>
       </div>
     
       </ul>

       )}

       <div className="hidden md:flex gap-12 text-sm">
        <button className="border border-white rounded py-1 px-4">Sign In </button>
        <button className="rounded py-2 px-4 bg-gradient-to-r from-orange-500 to-orange-800">Create an Account </button>
       </div>
       <div className="block md:hidden " onClick={toggleNavBar}>
        {isOpen ? <IoCloseSharp className="text-3xl" /> : <IoMenu className="text-3xl" />}
      </div>
    </header>
  )
}

export default Header
