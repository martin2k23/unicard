import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import ScrollTextAnimation from './ScrollText';

function App() {
  const [params,setParams] = useState({checkbox:false,input:null})
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <LandingPage setParams={setParams} params={params} />
      <ScrollTextAnimation setIsVisible={setIsVisible} isVisible={isVisible}/>
      <Footer setParams={setParams} params={params} setIsVisible={setIsVisible} isVisible={isVisible}/>
    </div>
  );
}

export default App;
