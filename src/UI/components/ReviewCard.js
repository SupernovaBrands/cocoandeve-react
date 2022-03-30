import ReviewStar from '../components/ReviewStar';

const ReviewCard = (props) => {
    return (
        <div className=" bg-gray-100 p-1 rounded-3">
            <div className="d-flex mb-1">
                <ReviewStar score={5} />
                <span className="d-block yotpo-widget__total mt-lg-0 ms-lg-1">5.0</span>
            </div>
            <p>{props.name}</p>
            <p className="fw-bold">{props.caption}</p>
            {props.children}
        </div>
    )
};

export default ReviewCard;