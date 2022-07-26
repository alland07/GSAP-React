import arrow from '../../assets/arrow.svg';
import {gsap, Power0} from 'gsap';
import {useEffect, useRef} from "react";

const GoBottom = () => {
  const circleRef = useRef();
  const arrowRef = useRef();
  
  useEffect(()=>{
    gsap.to(arrowRef.current, {
      y: 10,
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
    gsap.to(circleRef.current, {
      rotate: -360,
      repeatDelay: 0,
      duration: 10,
      repeat: -1,
      ease: Power0.easeNone,
    });
  });
  return(
    <div className='arrowContainer'>
      <div className='circle' ref={circleRef}>
      </div>
      <img
        className='arrowLogo'
        src={arrow}
        alt='arrow go down'
        ref={arrowRef}
      />
    </div>
  );
};

export default GoBottom;
