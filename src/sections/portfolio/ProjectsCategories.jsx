import React, { useState } from 'react'
import CategoryButton from './CategoryButton'

const ProjectsCategories = ({categories, onFilterProjects}) => {
    const [activeCat, setActiveCat] = useState('All');

    const changeCategoryHandler = (activeCat) => {
        setActiveCat(activeCat);
        onFilterProjects(activeCat);
    }

  return (
    <div className="portfolio__categories">
        {
            categories.map(category => (
                <CategoryButton className={`btn cat__btn ${activeCat === category ? 'primary' : 'white'}`} key={category} category={category} onChangeCategory={() => changeCategoryHandler(category)}/>
            ))
        }
    </div>
  )
}

export default ProjectsCategories