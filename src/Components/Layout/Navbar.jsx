import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/utils.module.css"

const Navbar = () => {
  return (
    <div className="nav-ctn">

      <div className="nav-box">
        <div className="nav-logo">
          <Link href='#' className="logo-ctn">
            <span>{'<'} </span>
              nathanreis
            <span> {'/>'}</span>
          </Link>
        </div>

        <div className="menu-ctn">
          <Link href='#'>Home</Link>
          <Link href='#about'>Sobre</Link>
          <Link href='#skills'>Skills</Link>
          <Link href='#projects'>Projetos</Link>
          <Link href='#contact'>Contato</Link>
          
          <i className={`fa-solid fa-bars ${styles.dnone}`}></i>
        </div>
      </div>

    </div>
  )
}

export default Navbar