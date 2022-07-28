import SectionTitle from "../Commons/SectionTitle";
import {gsap} from 'gsap';
import {useEffect, useRef} from "react";

const Contact = () => {
  
  const moveFormRef = useRef();
  
  useEffect(()=>{
    gsap.to(moveFormRef.current,{
      rotate: -360,
      repeat: -1,
      duration: 4,
      ease: 'none',
    });
  });
  return(
    <section className='container contactSection' id='contactSection'>
      <SectionTitle message={'Me Contacter'} height={500} containerId={'#contactSection'} />
      <div className='moving' ref={moveFormRef}></div>
    </section>
  )
}

export default Contact;