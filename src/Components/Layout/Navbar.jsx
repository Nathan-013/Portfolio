// import Image from "next/image"
import Link from "next/link"
// import styles from "@/styles/utils.module.css"
import { Link as ScrollLink, animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
  return (
    <header className="nav-ctn">

      <div className="nav-box">
        <div className="nav-logo">
          <Link href='' className="logo-ctn" onClick={() => scroll.scrollToTop()}>
            <span>{'<'} </span>
              nathanreis
            <span> {'/>'}</span>
          </Link>
        </div>

        <div className="menu-ctn">
          <ScrollLink onClick={() => scroll.scrollToTop()} to='' smooth={true} duration={500}>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>Sobre</ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>Projetos</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink>
          
          {/* <i className={`fa-solid fa-bars ${styles}`}></i> */}
        </div>
      </div>

    </header>
  )
}

export default Navbar