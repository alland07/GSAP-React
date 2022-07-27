import {useRef} from "react";
import {gsap} from 'gsap';

const SectionTitle =
  ({
    message
   }) => {
  const titleRef = useRef();
  
  const hoverTitle = () => {
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
  };
  return(
    <>
      <h2
        className='sectionTitle'
        ref={titleRef}
        onMouseEnter={hoverTitle}
        onMouseLeave={onLeaveTitle}
      >
        {message}
      </h2>
      <span className='underlineTitle' ref={titleRef} />
    </>
  )
};

export default SectionTitle;
