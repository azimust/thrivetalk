import AboutUs from './components/About/AboutUs/AboutUs';
import WhyTrive from './components/About/WhyTrive/WhyTrive';
import Contact from './components/Blog/Contact/Contact';
import Fact from './components/Blog/Fact/Fact';
import Footer from './components/Footer/Footer';
import Info from './components/Footer/Info/Info';
import Home from './components/Header/Home/Home';
import Navbar from './components/Header/Navbar/Navbar';
import HelpCards from './components/Services/HelpCards/HelpCards';
import HelpCards2 from './components/Services/HelpCards/HelpCards2';
import HelpCards3 from './components/Services/HelpCards/HelpCards3';
import './styles/App.css';

function App() {
  return (
    <>
      <div className='header'>
        <Navbar />
        <Home />
      </div>
      <div className='about'>
        <WhyTrive />
        <AboutUs />
      </div>
      <div className='services'>
        <HelpCards />
        <HelpCards2 />
        <HelpCards3 />
      </div>
      <div className='blog'>
        <Fact />
        <Contact />
        <Info />
      </div>
      <Footer />
    </>
  )
}

export default App;
