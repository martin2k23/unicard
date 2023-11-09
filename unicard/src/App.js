import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import ScrollTextAnimation from './ScrollText';
import Parts from './Parts';

function App() {
  const [params,setParams] = useState({checkbox:false,input:null})
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <LandingPage setParams={setParams} params={params} />
      <ScrollTextAnimation setIsVisible={setIsVisible} isVisible={isVisible}/>
      <div className='body_container'>
        <div className='contain'>
          <Parts 
            img ="https://www.uni.cards/images/one_percent_cashback.png"
            description_color="1% assured cashback on your spends."
            description_grey="The more you spend, the more you earn."
          /> 

          <Parts 
            flex={true} 
            footer={true} 
            description_color="5x more value than your cashback,"
            description_grey="only at the Uni Store."
            img ="https://www.uni.cards/images/five_x_rewards.png"
          />

          <Parts 
            img ="https://www.uni.cards/images/forex_globe.png"
            footer={true} 
            description_color="Zero Forex Markup."
            description_grey=" Go international, without any fees."
          />
        </div>
      </div>
      
      <Footer setParams={setParams} params={params} setIsVisible={setIsVisible} isVisible={isVisible}/>
    </div>
  );
}

export default App;
