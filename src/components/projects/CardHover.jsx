import asta from '../../assets/asta.jpg';

const CardHover = () => {
  return(
    <div className='cardHover'>
      <img src={asta} alt='project image'/>
      <div className='content'>
        <span className='title'>EasyVista Service Manager</span>
        <span className='description'>
          EVSM est un logiciel permettant de manager et de monitorer ses applications, clients ...
        </span>
        <a href='#' target='_blank'>Accéder</a>
      </div>
    </div>
  );
}

export default CardHover;
