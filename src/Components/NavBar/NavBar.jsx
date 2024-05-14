import { Link, NavLink } from "react-router-dom"
import styles from './NavBar.module.css'
import { useState } from "react"
 const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <>
    <div className="bg-slate-700 fixed left-0 right-0">
    <div className={`container  py-8 text-white font-bold `}>
      <div className={`flex  justify-between ${isClicked ? '' : 'items-center'} flex-col sm:flex-col md:flex-row lg:flex-row  `}>
      <div className="relative self-start">
          <h2 className="text-3xl"><Link to={'/'}>START FRAMEWORK</Link></h2>
          <button className="text-2xl cursor-pointer border  border-black px-2 py-3  -right-40 bottom-1/2 translate-y-1/2 rounded  md:hidden absolute sm:absolute sm:-right-full " onClick={() => setIsClicked(!isClicked)}><i className="fa-solid fa-bars text-black "></i></button>
        </div>
       {/* large menu */}
        <div>
          <ul className={`${styles.container}  gap-4 text-lg xl:flex lg:flex md:flex hidden sm:hidden `}>
              <li><NavLink to={'About'}>ABOUT</NavLink></li>
              <li><NavLink to={'Portfolio'}>PORTFOLIO</NavLink></li>
              <li><NavLink to={'Contact'}>CONTACT</NavLink></li>
          </ul>
          {/* Mobile menu */}
         <div className="">
          <ul className={` mt-5  w-fit  ${isClicked ? 'flex' : 'hidden'} ${styles.container} items-center   gap-4 text-lg xl:hidden lg:hidden md:hidden flex-col sm:flex-col`}>
              <li><NavLink to={'About'}>ABOUT</NavLink></li>
              <li><NavLink to={'Portfolio'}>PORTFOLIO</NavLink></li>
              <li><NavLink to={'Contact'}>CONTACT</NavLink></li>
          </ul>
         </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default NavBar;