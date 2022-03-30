import { ReactComponent as InstagramSquare } from '../../assets/instagram-square.svg';
import { ReactComponent as FacebookSquare } from '../../assets/facebook-square.svg';
import { ReactComponent as PinterestSquare } from '../../assets/pinterest-square.svg';
import { ReactComponent as Youtube } from '../../assets/youtube.svg';
import { ReactComponent as Tiktok } from '../../assets/tiktok.svg';
import { ReactComponent as PalmTree } from '../../assets/palm-tree.svg';

import SignupFooter from '../../modules/SignupFooter';

const Footer = () => {
	return (
		<footer className='pt-md-6 pb-md-6 pt-2 pt-lg-4 pb-1 bg-secondary text-white'>
			<div className='container px-g'>
				<div className='footer-grid'>
					<div className="footer-grid__newsletter">
						<h5 className="h2">Newsletter</h5><p>Receive exclusive offers, promotions and beauty tips via email.</p>
						<form method="post" action="/contact#ContactFooter" name="mc-embedded-subscribe-form" id="signup-footer-form" acceptCharset="UTF-8" className="contact-form" noValidate="">
							<div className="input-group mb-3">
								<input type="email" className="form-control border-0 me-n1" aria-label="Enter your email" placeholder="Enter your email" name="email" id="signup-footer" autoCorrect="off" autoCapitalize="off" />
								<input type="hidden" name="country" id="footer-country-name" />
								<input type="hidden" value="cocoandeve" name="brand_name" />
								<div className="input-group-append d-flex">
									<button className="btn btn-primary text-white rounded-3" type="submit" id="Subscribe" name="commit" onClick={SignupFooter}>Submit</button>
								</div>
							</div>
						</form>
						<p>You can unsubscribe at any time. Please read our&nbsp;<a href="https://www.cocoandeve.com/pages/privacy-policy-new" title="Privacy Policy" className="text-nowrap"><u>Privacy Policy</u></a>&nbsp;for more information about how we use your data.</p>
					</div>
					<div className="footer-grid__about-us">
						<h5 className="h2">About Us</h5>
						<ul className="list-unstyled">
							<li><a href="https://www.cocoandeve.com/pages/our-story">Our Story</a></li>
							<li><a href="https://www.cocoandeve.com/pages/sustainability">Sustainability</a></li>
							<li><a href="https://www.cocoandeve.com/pages/stockists">Stockists</a></li>
							<li><a href="https://www.cocoandeve.com/pages/affiliate">Affiliates</a></li>
							<li><a href="https://www.cocoandeve.com/blogs/news">Blog</a></li>
						</ul>
					</div>
					<div className="footer-grid__help-links">
						<h5 className="h2">Help</h5>
						<ul className="list-unstyled">
							<li><a href="https://www.cocoandeve.com/pages/track-my-order">Track My Order</a></li>
							<li><a href="https://support.cocoandeve.com/hc/en-us">FAQ</a></li>
							<li><a href="https://www.cocoandeve.com/pages/delivery-returns">Shipping &amp; Refund</a></li>
							<li><a href="https://www.cocoandeve.com/pages/contact-us">Contact Us</a></li>
							<li><a href="https://www.cocoandeve.com/pages/terms-and-conditions">Terms &amp; Conditions</a></li>
							<li><a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a></li>

						</ul>
					</div>
					<div className="footer-grid__support">
						<h5 className="h2">Support</h5>
						<p></p>
						<p>Got a question? <br />Contact us&nbsp;<a href="https://support.cocoandeve.com/hc/en-us/requests/new"><u>here</u></a></p>
						<p></p>
					</div>
					<div className="footer-grid__follow-us">
						<h2>Follow Us</h2>
						<a href="https://www.instagram.com/cocoandeve/" rel="noreferrer" className="d-inline-flex pe-g" target="_blank">
							<InstagramSquare className='svg' />
						</a>
						<a href="https://www.facebook.com/cocoandeve" rel="noreferrer" className="d-inline-flex pe-g" target="_blank">
							<FacebookSquare className='svg' />
						</a>
						<a href="https://www.pinterest.com/coco_and_eve/" rel="noreferrer" className="d-inline-flex pe-g" target="_blank">
							<PinterestSquare className='svg' />
						</a>
						<a href="https://www.youtube.com/c/CocoEve" rel="noreferrer" className="d-inline-flex pe-g" target="_blank">
							<Youtube className='svg' />
						</a>
						<a href="https://www.tiktok.com/@coco_and_eve" rel="noreferrer" className="d-inline-flex pe-g" target="_blank">
							<Tiktok className='svg' />
						</a>
					</div>
					<div className="footer-grid__currency">
						<h5 className="h2">Currency</h5>
						<div className="dropdown dropup">
							<button className="btn-unstyled dropdown-toggle fw-bold text-white" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-cy="currency-dropdown">
								US (USD)
							</button>
							<div className="dropdown-menu p-0 d-block overflow-hidden" aria-labelledby="dropdownMenuLink">
								<a className="dropdown-item pt-1 pb-1 active" href="https://www.cocoandeve.com/">USA (USD)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://uk.cocoandeve.com/">United Kingdom (GBP)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://ca.cocoandeve.com/">Canada (CAD)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://au.cocoandeve.com/">Australia (AUD)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://eu.cocoandeve.com/">Europe (EUR)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://de.cocoandeve.com/">Germany (EUR)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://fr.cocoandeve.com/">France (EUR)</a>
								<a className="dropdown-item pt-1 pb-1 " href="https://int.cocoandeve.com/">Rest of the World (SGD)</a>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<p className='d-flex justify-content-center align-items-baseline'>© 2022 Coco&amp;Eve <PalmTree className='svg ms-25' /></p>
			</div>
		</footer>
	);
};

export default Footer;
