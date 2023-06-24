// import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/utils.module.css"
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menuContent
  const menu = (
  <>
    <ScrollLink onClick={() => scroll.scrollToTop()} to='' smooth={true} duration={500}>Home</ScrollLink>
    <ScrollLink to="about" smooth={true} duration={500}>Sobre</ScrollLink>
    <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
    <ScrollLink to="projects" smooth={true} duration={500}>Projetos</ScrollLink>
    <ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink>
  </>)


  function handleClick() {
    setShowMenu(!showMenu)
    console.log(showMenu)
  }

  if (showMenu) {
    menuContent = (
      <div className="sidebar">
        <div className="close-sidebar">
          <i className={'fa-solid fa-x fa-xl'} onClick={handleClick}></i>
        </div>

        <div className="sidebar-menu">
          { menu }
        </div>
      </div>)
  } else {
    menuContent = (
      <div className="menu-ctn">
        { menu }

        <i className={`fa-solid fa-bars ${styles.dnone}`} onClick={handleClick}></i> 
      </div>)
  }

  return (
    <header className="nav-ctn">

      <nav className="nav-box">
        <div className="nav-logo">
          <Link href='' className="logo-ctn" onClick={() => scroll.scrollToTop()}>
            <span>{'<'} </span>
            nathanreis
            <span> {'/>'}</span>
          </Link>
        </div>

        { menuContent }
        
      </nav>

    </header>
  )
}

export default Navbar