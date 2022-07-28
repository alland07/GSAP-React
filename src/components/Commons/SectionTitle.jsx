import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle =
  ({
    message,
    containerId,
    height = 0
   }) => {
  const titleContainerRef = useRef();
  
  useEffect(()=>{
    let start = 'center'
    if (height > 0) {
     start = `+=${height}`
    }
    gsap.fromTo(titleContainerRef.current, {
      x: -200,
      opacity: 0,
    },{
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: containerId,
        start: `top ${start}`,
        end: `+=200`,
        scrub: true,
      },
    });
  });
  
  /**const hoverTitle = () => {
    gsap.fromTo(titleRef.current, {
      width: "0%",
      left: "0%",
    }, {
      width: "100%",
      duration: 2,
    });
  };
  const onLeaveTitle = () => {
    gsap.fromTo(titleRef.current, {
      width: "100%",
      left: "0%",
    }, {
      width: "0%",
      duration: 0.5,
    });
  };**/
  
  return(
    <div ref={titleContainerRef} className='sectionTitleContainer'>
      <h2
        className='sectionTitle'
      >
        {message}
      </h2>
    </div>
  )
};

export default SectionTitle;
