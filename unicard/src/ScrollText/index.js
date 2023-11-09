import React, { useEffect } from 'react';
import './styles.css';

const ScrollTextAnimation = ({ isVisible, setIsVisible=()=>{} }) => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 2;
      if (scrollPosition > triggerPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsVisible]);

  return (
    <div className="container">
      <div className={`animated-text ${isVisible ? 'visible' : ''}`}>
        <div className="text_style">
          <p  style={{ opacity: 1, transform: "none" ,margin:0}}>
            Earn 1% assured cashback
            <span className='span_value'> on your spends. Get</span> 5X
          </p>

          <p style={{ opacity: 1, transform: "none",margin:0 }}>
            more value than cashback
            <span className='span_value'> at the Uni Store. Enjoy</span>
          </p>

          <p style={{ opacity: 1, transform: "none",margin:0 }}>
            <span className='span_value'>round the clock </span>Whatsapp support. <span className='span_value'>And it's</span>
          </p>

          <p style={{ opacity: 1, transform: "none" ,margin:0}}>
            lifetime free <span className='span_value'>; no joining fee, no annual charges.</span>
          </p>
        </div>
      </div>
    </div>

  );
};

export default ScrollTextAnimation;
