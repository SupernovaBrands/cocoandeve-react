import ReviewStar from '../components/ReviewStar';

const IRLCard = (props) => {
    return (
        <div className=" bg-gray-100 p-1 rounded-3 me-g mx-lg-g">
            <picture>
                <source type="image/webp" srcSet={props.comImage} />
                <source type="image/jpeg" srcSet={props.image} />
                <img src={props.image} className="w-100 mb-1" alt={props.caption} loading="lazy" />
            </picture>
            <div className="d-flex mb-1">
                <ReviewStar score={5} useSharpStar={true} />
                {props.disabledLink ? (
                    <span className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1 text-primary">5.0</span>
                ) : (
                    <a href={`https://www.cocoandeve.com/products/${props.handle}#write-a-review`} className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1 text-primary">5.0</a>
                )}
            </div>
            <p className="fw-bold">{props.caption}</p>
            {props.children}
            <p>{props.name}</p>
        </div>
    )
};

export default IRLCard;
