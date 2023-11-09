import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';
import ScrollTextAnimation from './ScrollText';
import Parts from './Parts';
import DataValidation from './DataValidation';

function App() {
  const [params,setParams] = useState({checkbox:false,input:null})
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <LandingPage setParams={setParams} params={params} />
      <div className='container'>
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

        <div className="lifetime_text">
          <p>Lifetime <span className='green'>free. </span>
            <span className='fee_text'>No joining fee.</span>
            <span className='text_last'> No annual charges. </span>
          </p>
        </div>
      </div>

      <section className="section_main">
        <img src="https://www.uni.cards/images/circles.png" alt="circles" class="img_circle"/>
        
        <div className="main_div">
          <div className="main_text_div">
            <p className="p_tag_div">We’ve all heard of instant groceries, now say hello to <span className="color_show">
                <br/> instant credit. </span>
            </p>
            <p className="per_value">0% hassle, 100% paperless. Get your <br/> Uni Card instantly. </p>
          </div>
          <div className="imag_lazy">
            <img src="	https://www.uni.cards/images/nx-wave/app_screen_1.webp" alt="" loading="lazy" className="img_show"/>
          </div>
        </div>

        <div className="main_div">
          <div className="main_text_div">
            <p className="p_tag_div">With Uni, <span className="color_show">
                <br/>you’re always in control. </span>
            </p>
            <p className="per_value">Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app. </p>
          </div>
          <div className="imag_lazy">
            <img src="https://www.uni.cards/images/nx-wave/app_screen_2.webp" alt="" loading="lazy" className="img_show"/>
          </div>
        </div>
      </section>

      <DataValidation/>
   
      <Footer setParams={setParams} params={params} setIsVisible={setIsVisible} isVisible={isVisible}/>
    </div>
  );
}

export default App;
