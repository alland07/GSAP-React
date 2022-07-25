import logo from '../../assets/logo.svg';
import Content from "./Content";
import {gsap} from 'gsap';
import {useRef} from "react";

const Header = () => {
  
  const spanRef = useRef();
  let spans = gsap.utils.selector(spanRef);
  
  const hoverLinks = () => {
    gsap.fromTo(spans('.underline'), {
      width: "0%",
      left: "0%",
    }, {
      width: "100%",
      duration: 1,
    });
  };
  
  const onLeaveLinks = () => {
    gsap.fromTo(spans('.underline'), {
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
                onMouseEnter={hoverLinks}
                onMouseLeave={onLeaveLinks}
              >
                About
              </a>
              <span className='underline' ref={spanRef}/>
            </li>
            <li>
              <a
                className='nav_Link'
                href='#'
                onMouseEnter={hoverLinks}
                onMouseLeave={onLeaveLinks}
              >
                Projects
              </a>
              <span className='underline' ref={spanRef}/>
            </li>
            <li>
              <a
                className='nav_Link'
                href='#'
                onMouseEnter={hoverLinks}
                onMouseLeave={onLeaveLinks}
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
