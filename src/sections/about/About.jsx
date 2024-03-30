import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import {Card} from '../../components/Card.jsx'
import data from './data.js'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt='About Img'/> 
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
              {
                data.map(item => (
                  <Card key={item.id} className="about__card">
                      <span className='about__card-icon'>
                        {item.icon}
                      </span>
                      <h5>{item.title}</h5>
                      <small>{item.desc}</small>
                  </Card>
                ))
              }
          </div>
          <p>
            Building projects my clients love have always been my passion.
            Being in the web development industry for over 2 years and serving 
            more than 70 happy clients worldwide, I'm always motivated to do 
            more!
          </p>
          <p>
            Hi, my name is.... from .... I'm a full stack... studied/studing ADS... lets started!
          </p>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>

      </div>
    </section>
  )
}

export default About