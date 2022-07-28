import asta from '../../assets/asta.jpg';
import {gsap} from "gsap";
import {useEffect, useRef} from "react";

const Card = () => {
  
  const cardRef = useRef();
  
  useEffect(()=>{
    gsap.fromTo(cardRef.current, {
      y: 500,
      opacity: 0,
    },{
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: '#projectSection',
        start: `top center`,
        end: `+=100`,
        scrub: true,
      },
    })
  });
  
  return(
    <div className='card' ref={cardRef}>
      <img className='bg' src={asta} alt='card background'/>
    </div>
  );
}

export default Card;
