import React, { useEffect, useState } from 'react';
import './styles.css';
import PhoneNumberInput from '../PhoneNumberInput';

const Footer = ({ setParams=()=>{}, params , isVisible,setIsVisible=()=>{} }) => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 200; 
      setIsVisible(scrollPosition > triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsVisible]);
  return (
   <footer className={`fixed-footer ${isVisible ? 'visible' : ''}`}>
        <div className='footer_show'>
            <PhoneNumberInput setParams={setParams} params={params} flex ={true}/>
        </div>
    </footer> 
  );
};

export default Footer;
