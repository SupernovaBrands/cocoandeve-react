import ReviewStar from '../components/ReviewStar';
import { ReactComponent as GreenCheck } from '../../assets/green-checkmark.svg';

import { decodeHtml } from "../../modules/Utils";

const ReviewCard = (props) => {
    return (

        <div className=" bg-gray-100 p-1 rounded-3 me-g mx-lg-g">
            <div className="d-flex mb-1">
                <ReviewStar score={5} useSharpStar={true} />
                {props.disabledLink ? (
                    <span className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1 text-primary">5.0</span>
                ) : (
                    <a href={`https://www.cocoandeve.com/products/${props.handle}#write-a-review`} className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1">5.0</a>
                )}
            </div>
            <p>{props.name}<GreenCheck className='ms-1' /></p>
            <p className="fw-bold">{props.caption}</p>
            <div dangerouslySetInnerHTML={{ __html: props.text }}></div>
            {props.children}
        </div>
    )
};

export default ReviewCard;
