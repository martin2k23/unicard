import React, { useEffect } from 'react';
import './styles.css';

const ScrollTextAnimation = ({ isVisible, setIsVisible }) => {
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

const commonStyle = {
  opacity: isVisible ? 1 : 0,
  transform: isVisible
    ? 'translateY(0)'
    : 'translateY(100px)',
  margin: 0,
  transition: 'opacity 0.5s ease',
};

  return (
    <div className="container">
      <div className={`animated-text ${isVisible ? 'visible' : ''}`}>
        <div className="text_style">
          <p style={commonStyle} className='animate_p'>
            Earn 1% assured cashback
            <span className="span_value"> on your spends. Get</span> 5X
          </p>

          <p style={commonStyle} className='animate_p1'>
            more value than cashback
            <span className="span_value"> at the Uni Store. Enjoy</span>
          </p>

          <p style={commonStyle} className='animate_p2'>
            <span className="span_value">round the clock </span>Whatsapp support.{' '}
            <span className="span_value">And it's</span>
          </p>

          <p style={commonStyle} className='animate_p3'>
            lifetime free <span className="span_value">; no joining fee, no annual charges.</span>
          </p>
        </div>
      </div>

      <div className='arrow'>
        <div className='circle'>
          <img alt="down_arrow" src="https://www.uni.cards/images/down_arrow.svg" loading="lazy" className='image_data'/>
        </div>
      </div>
    </div>
  );
};

export default ScrollTextAnimation;
