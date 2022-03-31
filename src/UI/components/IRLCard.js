import ReviewStar from '../components/ReviewStar';

const IRLCard = (props) => {
    return (
        <div className=" bg-gray-100 p-1 rounded-3">
            <img src={props.image} className='w-100 mb-1' />
            <div className="d-flex mb-1">
                <ReviewStar score={5} />
                <span className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1 text-primary">5.0</span>
            </div>
            <p className="fw-bold">{props.caption}</p>
            {props.children}
            <p>{props.name}</p>
        </div>
    )
};

export default IRLCard;