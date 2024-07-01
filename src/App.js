import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Language from './components/Languages-Content/Language';
import Learning from './components/Learning-Experience/Learning';
import Testimonials from './components/Testimonials/Testimonials';
import SocialMedia from './components/Social-media/SocialMedia';
import Course from './components/Course-options/Course';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
     <NavBar/>
     <Hero/>
     <Language/>
     <Learning/>
     <Testimonials/>
     <SocialMedia/>
     <Course/>
     <Footer/>
    </>
  );
}

export default App;
