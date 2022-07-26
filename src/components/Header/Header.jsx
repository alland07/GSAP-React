import logo from '../../assets/logo.svg';
import Content from "./Content";
import {gsap} from 'gsap';
import {useRef} from "react";

const Header = () => {
  
  const spanRef = useRef();
  const tl = gsap.timeline();
  
  const hoverLinks = (index) => {
    tl.fromTo(spanRef.current, {
      width: "0%",
      left: "0%",
    }, {
      width: "100%",
      duration: 1,
    });
  };
  
  const onLeaveLinks = (index) => {
    tl.fromTo(spanRef.current, {
      width: "100%",
      left: "0%",
    }, {
      width: "0%",
      left: "100%",
      duration: 1,
      immediateRender: false
    });
  };
  
  
  return (
    <>
      <header>
        <nav>
          <img className='logo' src={logo} alt='logo'></img>
          <ul>
            <li>
              <a
                className='nav_Link'
                href='#'
                onMouseEnter={() => hoverLinks(1)}
                onMouseLeave={() => onLeaveLinks(1)}
              >
                About
              </a>
              <span className='underline' ref={spanRef}/>
            </li>
            <li>
              <a
                className='nav_Link'
                href='#'
                onMouseEnter={() => hoverLinks(2)}
                onMouseLeave={() => onLeaveLinks(2)}
              >
                Projects
              </a>
              <span className='underline' ref={spanRef}/>
            </li>
            <li>
              <a
                className='nav_Link'
                href='#'
                onMouseEnter={() => hoverLinks(3)}
                onMouseLeave={() => onLeaveLinks(3)}
              >
                Contact
              </a>
              <span className='underline' ref={spanRef}/>
            </li>
          </ul>
        </nav>
      </header>
      <Content/>
    </>
  );
};

export default Header;
