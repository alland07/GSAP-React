import {useEffect, useRef} from "react";
import {gsap} from 'gsap';

const Content = () => {
  
  const titleRef = useRef();
  const spans = gsap.utils.selector(titleRef);
  
  const form1Ref = useRef();
  const form2ref = useRef();
  
  useEffect(() => {
    // Movement of left rect
    gsap.to('.form1', {
      rotate: 15,
      repeat: -1,
      duration: 2.5,
      yoyo: true
    });
    // Movement of right rect
    gsap.to('.form2', {
      y: -100,
      yoyo: true,
      repeat: -1,
      duration: 2.5,
      repeatRefresh: 1
    });
    // Titles
    gsap.to(spans(".title"), {
      opacity: 1,
      stagger: 1,
      duration: 1,
    });
  }, []);
  
  return (
    <section className='headerContent' >
      {/*Form1*/}
      <div className='form1' ref={form1Ref}></div>
      {/*Text*/}
      <div className='titlePos' ref={titleRef}>
        <span className='title'>Front-End</span><br/>
        <span className='title'>Web</span><br/>
        <span className='title'>Developer</span><br/>
      </div>
      {/*Form2*/}
      <div className='form2' ref={form2ref}></div>
    </section>
  );
};

export default Content;
