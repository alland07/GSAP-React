import SectionTitle from "../Commons/SectionTitle";
import Card from "./Card";
import CardHover from "./CardHover";
import {useRef, useState} from "react";
import {gsap, Power2} from 'gsap';

const ProjectContainer = () => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef();
  
  const hoverCard = () => {
    setHovered(true);
    gsap.to(cardRef.current, {
      width: '40%',
      rotateY: -360,
      ease: Power2.easeInOut,
      duration: 2
    });
  }
  
  const leaveCard = () => {
    setHovered(false);
    gsap.to(cardRef.current, {
      width: '10%',
      rotateY: 360,
      ease: Power2.easeInOut,
      duration: 2
    });
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
