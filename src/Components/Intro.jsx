import Image from "next/image"
import Animation from "./Animation"

const Intro = () => {
  return (
    <div className='intro-ctn dn'>
      <p className='sm-text'>Olá meu nome é Nathan Moreira</p> 
      <h1>
        futuro desenvolvedor <span>Front-end.</span>
      </h1>

      <div className="desc-ctn">
        <p className='desc'>
          Fiz esse projeto de portfolio utilizando <span>React</span> e
          <span> NextJS</span> para organizar e apresentar meus projetos anteriores
          (e futuros), e também como forma de consolidar meus estudos sobre essas
          tecnologias. 
        </p>

        <Animation/>
        {/* <Image src='/images/zoro.jpg' alt="foto de perfil" width={300} height={250} /> */}
      </div>

    </div>
  )
}

export default Intro