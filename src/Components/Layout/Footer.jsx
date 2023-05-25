import utilStyles from '@/styles/utils.module.css'

const Wave = ({ children }) => {
  return (
    <footer className="wave-ctn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#66ff00af" fillOpacity="0.8" d="M0,96L48,112C96,128,192,160,288,149.3C384,139,480,85,576,64C672,43,768,53,864,69.3C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>

      <div className="footer-ctn">
        {children}
      </div>

    </footer>
  )
}


const Footer = () => {
  return (
    <>
      <Wave>
        <hr/>
        <div className='footer-inform'>
          <span className={utilStyles.smtext}>
            © 2023 Nathan Moreira | Todos os direitos reservados.
          </span>

          <span className={`${utilStyles.smtext}`}>
            Desenvolvido por Nathan Moreira.
          </span>    
        </div>
      </Wave>
    </>
  )
}

export default Footer