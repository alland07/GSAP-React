import SectionTitle from "../Commons/SectionTitle";
import Card from "./Card";
import CardHover from "./CardHover";
import {useRef, useState} from "react";
import {gsap, Power2} from 'gsap';

const ProjectContainer = () => {
  
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef();
  const tl = gsap.timeline({});
  
  const hoverCard = () => {
    tl.to(cardRef.current, {
      width: '20vw',
      height: '80%',
      ease: Power2.easeInOut,
      duration: 0.5,
      rotateY: -360,
      onComplete: () => {
        setHovered(true);
      }
    });
  }
  
  const leaveCard = () => {
    if(hovered) {
      setHovered(false);
      tl.to(cardRef.current, {
        width: '10%',
        height: '70%',
        ease: Power2.easeInOut,
        duration: 0.5,
        rotateY: 360
      });
    }
  }
  
  return(
    <section className='container projectSection'>
      <SectionTitle message={'Mes projets'}/>
      <div className='projectsCardContainer'>
        <div
          className='borderCard'
          onMouseEnter={hoverCard}
          onMouseLeave={leaveCard}
          ref={cardRef}
        >
          {
            hovered
              ? <CardHover />
              : <Card />
          }
        </div>
        <div className='liste'></div>
      </div>
    </section>
  );
}

export default ProjectContainer;
