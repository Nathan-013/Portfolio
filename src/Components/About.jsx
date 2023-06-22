import Image from "next/image"
import perfil from '../../public/images/contato-pf.jpeg'

const About = () => {
  return (
    <div id='about' className="about-ctn">
      <div className='social-ctn'>
        <Image 
          src={perfil} 
          alt='foto de perfil' 
          width={360} 
          height={360}
          placeholder="blur"
        />

        <div className='social-icons'>
          <a className="linkedin" href='https://www.linkedin.com/in/nathan-moreira-44a5a71b4/' target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="github" href='https://github.com/Nathan-013' target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="twitter" href='https://www.twitter.com/NathanM013' target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="about-text">
        <h2>Sobre</h2>
        <span>Uma breve descrição de quem sou eu:</span>
        
        <p>
          Olá! tenho 22 anos e sou um estudante de Ciência da Computação, atualmente no 6º perído,
          e apaixonado por programação, tecnologia e computação. Desde novo, buscava
          entender como as máquinas funcionavam e quais eram suas peças e o que elas
          faziam. Em 2019 tive meu primeiro contato com programação e a partir dai
          segui estudando para saber mais sobre esse mundo.
        </p>
        <p>
          De lá pra cá, estudei e conheci diversas linguagens, frameworks e 
          bibliotecas(seja pela faculdade ou por cursos na internet). Dentre todas
          as áreas, a que mais me identifiquei foi a de Front-End e sigo estudando
          para me tornar um desenvolvedor web.
        </p>
      </div>
    </div>
  )
}

export default About