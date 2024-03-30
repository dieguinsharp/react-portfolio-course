import './portfolio.css'
import data from './data.js'
import ProjectsCategories from './ProjectsCategories.jsx'
import Projects from './Projects.jsx'
import { useState } from 'react'

const Portfolio = () => {

  const [projects, setProjects] = useState(data)
  const categories = data.map(item => item.category);
  const uniqueCategories = ["All", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category === "All"){
      setProjects(data);
      return;
    }
    const filteredProjects = data.filter(project => project.category === category);
    setProjects(filteredProjects);
  }

  return (
    <section id="portfolio">
      <h2>Recent projects</h2>
      <p>Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.</p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio