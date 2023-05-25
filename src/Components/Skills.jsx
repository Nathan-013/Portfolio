const skills = [
  {
    icon: 'fa-brands fa-html5 html-icon',
    title: 'HTML',
    style: 'html',
    id: 'html5'
  },
  {
    icon: 'fa-brands fa-css3-alt css-icon',
    title: 'CSS',
    style: 'css',
    id: 'css3'
  },
  {
    icon: 'fa-brands fa-js-square js-icon',
    title: 'JavaScript',
    style: 'js',
    id: 'js'
  },
  {
    icon: 'fa-brands fa-react react-icon',
    title: 'React',
    style: 'react',
    id: 'reactjs'
  },
  {
    icon: 'fa-brands fa-bootstrap',
    title: 'Bootstrap',
    style: 'bootstrap',
    id: 'btsp'
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Next.js',
    style: 'nextjs',
    id: 'nextjs'
  }
]

const generateCards = skill => {
  return (
    <div className={`skill-card ${skill.style}`} key={skill.id}>
      <i className={skill.icon}></i>
      <p>{skill.title}</p>
    </div>
  )}

const Skills = () => {
  return (
    <div id="skills" className="skills-ctn dn">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map(generateCards)}    
      </div>

    </div>
  )
}

export default Skills