import SectionTitle from "../Commons/SectionTitle";
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import git from '../../assets/github.svg';
import node from '../../assets/node.svg';
import php from '../../assets/php.svg';
import phpstorm from '../../assets/phpstorm.svg';
import ts from '../../assets/ts.svg';
import reactLogo from '../../assets/reactLogo.svg';
import {useEffect} from "react";
import {gsap} from 'gsap';

const SkillContainer = () => {
  
  const imgArray = [html, css, git, node, php, phpstorm, ts, reactLogo];
  
  useEffect(()=>{
    gsap.utils.toArray(".slideSkill").forEach(img => {
      gsap.timeline({
        defaults: {ease: "none"},
        scrollTrigger: {
          scroller: img.closest(".horizontalSkillSlider"),
          horizontal: true,
          trigger: img.closest(".slide"),
          start: "left right",
          end: "left left",
          scrub: true
        }
      })
    });
  });
  
  return(
    <section className='container skillSection' id='skillContainer'>
      <SectionTitle message={'Mes compétences'} containerId={'#skillContainer'} height={500}/>
      <div className='horizontalSkillSlider'>
        <div className='centerSkills'>
          {
            imgArray.map((img, index)=> (
              <div className='slideSkill' key={`img-${index}`}>
                <img className='slideImg' src={img} alt={`Skill Logo ${index}`} />
              </div>
            ))
          };
        </div>
      </div>
    </section>
  );
}

export default SkillContainer;
