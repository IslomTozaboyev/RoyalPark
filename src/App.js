import './App.css';

import Header from './components/header';
import Info from './components/Info';
import About from './components/About';
import Choose from './components/Choose';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Email from './components/Email';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <>
      <Header />
      <Info />
      <About />
      <Choose />
      <Gallery />
      <Contact />
      <Email />
      <Footer/>
        
      </>
}

export default App;
