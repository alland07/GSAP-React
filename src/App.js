import './styles/App.scss';
import Header from "./components/Header/Header";
import SkillContainer from "./components/skills/SkillContainer";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";
import ProjectContainer from "./components/projects/ProjectContainer";
import Contact from "./components/contact/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  
  const filArianne = useRef();
  const tl = gsap.timeline();
  
  
  useEffect(()=>{
    const path = document.querySelector('#arianneID');
    const pathL = path.getTotalLength();
    
    tl.set('#arianneID', {
      strokeDasharray: pathL
    });
    tl.from('#arianneID', {
      scrollTrigger: {
        trigger: '.App',
        start: "top top",
        end: "bottom bottom",
        onUpdate: (e) => {
          if(e.progress < 0.38) {
            path.style.strokeDashoffset = pathL - (e.progress * pathL * 1.8);
          } else if(e.progress >= 0.38 && e.progress < 0.60){
            path.style.strokeDashoffset = pathL - (e.progress * pathL * 2);
          } else {
            path.style.strokeDashoffset = pathL - (e.progress * pathL * 1.1);
          }
          
        }
      },
      strokeDashoffset: pathL,
    });
  });
  
  return (
    <div className="App" >
      <svg className='ariane' ref={filArianne} width="1440" height="3559" viewBox="0 0 1440 3559" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='arianneID' d="M775 -29.5C759.667 18.3333 744.5 126 806.5 174C884 234 1000 154.5 1102 184.5C1183.6 208.5 1186 277.5 1177 309C1163.67 374.5 1103 574 1049 598C981.5 628 809.5 555 906 508.5C1043.88 442.059 1205.5 526.5 1227.5 585C1268.6 694.301 1125.5 776.5 1012.5 793.5C922.5 807.04 813.146 894.721 913.5 999C1038 1128.37 1206 727 1256.5 948.5C1258.83 1017.95 1292.5 1248 1024 1122C820.8 1038 -166 1036 104 1179.5C378 1284 110 1322 45.5 1366.5C-19 1411 -148.5 1452.5 -8.50002 1520.5C103.5 1574.9 120 1520.5 161.5 1693C203 1865.5 1508 1532.5 1455 1854L1471 2384.5C1490.17 2404.33 1513.19 2477.08 1457.5 2473.5C952.5 2441 878.5 2670.5 570.5 2747.5C436 2766 434.39 2721.5 254.5 2721.5C149.5 2721.5 89.5 2753 165.5 2916C241.5 3079 128 3067.5 165.5 3215C245.5 3414 495.7 3363.4 570.5 3579" stroke="#64AFA4" strokeWidth="2"/>
      </svg>
      <svg className='ariane2' width="1440" height="3559" viewBox="0 0 1440 3559" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M775 -29.5C759.667 18.3333 744.5 126 806.5 174C884 234 1000 154.5 1102 184.5C1183.6 208.5 1186 277.5 1177 309C1163.67 374.5 1103 574 1049 598C981.5 628 809.5 555 906 508.5C1043.88 442.059 1205.5 526.5 1227.5 585C1268.6 694.301 1125.5 776.5 1012.5 793.5C922.5 807.04 813.146 894.721 913.5 999C1038 1128.37 1206 727 1256.5 948.5C1258.83 1017.95 1292.5 1248 1024 1122C820.8 1038 -166 1036 104 1179.5C378 1284 110 1322 45.5 1366.5C-19 1411 -148.5 1452.5 -8.50002 1520.5C103.5 1574.9 120 1520.5 161.5 1693C203 1865.5 1508 1532.5 1455 1854L1471 2384.5C1490.17 2404.33 1513.19 2477.08 1457.5 2473.5C952.5 2441 878.5 2670.5 570.5 2747.5C436 2766 434.39 2721.5 254.5 2721.5C149.5 2721.5 89.5 2753 165.5 2916C241.5 3079 128 3067.5 165.5 3215C245.5 3414 495.7 3363.4 570.5 3579" stroke="#64AFA4" strokeWidth="2"/>
      </svg>
      <Header/>
      <SkillContainer />
      <ProjectContainer />
      <Contact />
    </div>
  );
}

export default App;
