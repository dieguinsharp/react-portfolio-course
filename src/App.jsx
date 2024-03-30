import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useRef, useState, useEffect, useCallback } from 'react';

const App = () => {
  const mainRef = useRef();
  const {themeState} = useThemeContext();

  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  const floatingNavToggleHandler = () => {
    if(siteYPosition < (mainRef.current?.getBoundingClientRect().y - 20) || siteYPosition > (mainRef.current?.getBoundingClientRect().y + 20)){
      console.log(mainRef.current?.getBoundingClientRect().y);
      console.log("Current " + siteYPosition)
      showFloatingNavHandler();
    }else{
      hideFloatingNavHandler()
    }

    setSiteYPosition(mainRef.current?.getBoundingClientRect().y);
  }

  useEffect(() => {
    const checkYPosition = setInterval(() => {
      floatingNavToggleHandler();
    }, 2000)

    return () => clearInterval(checkYPosition);
  })

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <FAQs/>
        <Contact/>
        <Footer/>
        <Theme />
        {
          showFloatingNav && <FloatingNav/>
        }
    </main>
  )
}

export default App