import './App.css';
import FAQ from './components/FAQ';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Infosection from './components/Infosection';
import LatestNews from './components/LatestNews';

function App() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <Infosection/>
      <Feature/>
      <FAQ/>
      <LatestNews/>
      <Footer/>
    </div>
  );
}

export default App;
