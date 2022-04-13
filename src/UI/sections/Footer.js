import QuantityBox from "../components/QuantityBox";

const Footer = () => {
	const isRange = window.location.pathname === '/range-tan/';
	return (
		<footer className='pt-md-6 pb-md-6 pt-2 pt-lg-4 pb-1 bg-secondary text-white'>
			<div className='container px-g'>
				<hr />
				<p className='d-flex justify-content-center align-items-baseline'>© 2022 Coco&amp;Eve </p>{isRange && (<div className='d-none'><QuantityBox /></div>)}
			</div>
		</footer>
	);
};

export default Footer;
