import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
            <img src={HeaderImage} alt="header Portait"/>
        </div>
        <h3 data-aos="fade-up">Diego Soares</h3>
        <p>
          You are a click away from builsing your dream project structure. Sende me details of your project like Db Schema, the primary idea, diagrams or other thing like that :D
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's talk</a>
          <a href="#portfolio" className='btn light'>My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(m => <a key={m.id} href={m.link} target='_blank' rel='noopener noreferrer'>{m.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header