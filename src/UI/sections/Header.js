import { ReactComponent as Logo } from '../../assets/ce-logo.svg';

const Header = () => {
  return (
    <header className="container text-center">
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand mx-auto text-secondary' href='https://www.cocoandeve.com'>
          <span className='visually-hidden-focusable'>Coco &amp; Eve</span>
          <Logo />
        </a>
      </nav>
    </header>
  );
};

export default Header;
