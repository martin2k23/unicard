import React from "react"
import './style.css';
import PhoneNumberInput from "../PhoneNumberInput";

const LandingPage = ({ params, setParams=()=>{} }) => {
    return( 
        <div className="background-video">
            <div className="header">
                <svg class="Logo" viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z" fill="black"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z" fill="black"></path>
                </svg>

                <a href="https://paychek.uni.club/" class="apply-btn">
                    Uni Paychek
                </a>
            </div>

            <div className="body">
                <div className="content">
                    <img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" alt="img" className="image"/>
                    <div>
                        <h1 className="heading">
                            <span>
                                <strong style={{fontWeight:'bold'}}>NX Wave.</strong>
                                The next-gen credit card for those who love rewards.
                            </span>
                        </h1>

                        <div>
                            <p className="offers">1% Cashback 
                                <svg  width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg_data">
                                    <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000"></path>
                                    </svg>5x Rewards <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg_data">
                                    <path d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z" fill="#000"></path>
                                </svg>Zero Forex Markup 
                            </p>
                        </div>
                        <PhoneNumberInput setParams={setParams} params={params}/>
                    </div>
           
                   
                </div>
            </div>

            <video autoPlay loop muted>
                <source src="https://www.uni.cards/videos/nxt_wave_bg.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default LandingPage