import { ReactComponent as Logo } from '../../assets/ce-logo.svg';
import { useSearchParams } from "react-router-dom";
import { amazonURL } from '../../modules/Utils';
const Header = () => {
  const isTanAmazon = window.location.pathname === '/range-tan-amazon/' || window.location.pathname === '/range-tan-amazon';
  const isHairAmazon = window.location.pathname === '/range-hair-amazon/' || window.location.pathname === '/range-hair-amazon';
  const [searchParams] = useSearchParams();
  const utmStore = searchParams.get('utm_store');
  let LOGO_URL = 'https://www.cocoandeve.com';
  if (isTanAmazon || isHairAmazon) {
    LOGO_URL = amazonURL(utmStore);
  }
  return (
    <header className="container text-center">
      <nav className='navbar navbar-expand-lg'>
        <a className='navbar-brand mx-auto text-secondary' href={LOGO_URL}>
          <span className='visually-hidden-focusable'>Coco &amp; Eve</span>
          <Logo />
        </a>
      </nav>
    </header>
  );
};

export default Header;
