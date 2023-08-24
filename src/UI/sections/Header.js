import { ReactComponent as Logo } from '../../assets/ce-logo.svg';
import { useSearchParams } from "react-router-dom";
import { amazonURL } from '../../modules/Utils';
import TimerBar from './TimerBar';
const Header = (props) => {
  const isTanAmazon = window.location.pathname === '/range-tan-amazon/' || window.location.pathname === '/range-tan-amazon';
  const isHairAmazon = window.location.pathname === '/range-hair-amazon/' || window.location.pathname === '/range-hair-amazon';
  const isYR = window.location.pathname == '/range-youth-revive/'
  const [searchParams] = useSearchParams();
  const utmStore = searchParams.get('utm_store');
  let LOGO_URL = 'https://www.cocoandeve.com';
  if (isTanAmazon || isHairAmazon) {
    LOGO_URL = amazonURL(utmStore);
  }
  return (
    <header className={`text-center ${isYR ? 'position-fixed bg-white w-100 yl-lp-header' : ''}`}>
      {props.timerBar && (
        <TimerBar url={LOGO_URL} />
      )}
      <div className="container">
        <nav className='navbar navbar-expand-lg'>
          <a className='navbar-brand mx-auto text-secondary' href={LOGO_URL}>
            <span className='visually-hidden-focusable'>Coco &amp; Eve</span>
            <Logo />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
