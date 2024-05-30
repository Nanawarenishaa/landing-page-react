import { Link } from "lucide-react"


const Header = () => {
  return (
    <div className="section__header">
        <div className="logo">
        <img src="logo.png" alt="" />
        <span>VirtualR</span>
        </div>
       <nav>
        <a href="/" >Features </a>
        <a href="/" >Workflow </a>
        <a href="/" >Pricing </a>
        <a href="/" >testimonial</a>
       </nav>
       <div className="btns">
        <button className="Btn1">Sign In </button>
        <button className="Btn2">Create an Account </button>
       </div>
    </div>
  )
}

export default Header
