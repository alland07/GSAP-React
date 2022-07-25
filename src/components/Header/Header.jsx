import logo from '../../assets/logo.svg';
import Content from "./Content";

const Header = () => {
  
  return (
    <>
      <header>
        <nav>
          <img className='logo' src={logo} alt='logo'></img>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <Content/>
    </>
  );
};

export default Header;
