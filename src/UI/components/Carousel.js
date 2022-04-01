import { Fragment } from "react";
import carouselLoop from "../../modules/carousel-loop";

const Carousel = (props) => {
    carouselLoop(props.id);
    return (
        <div id={props.id} className={props.className} data-bs-slide-number={props.slideNumber} data-bs-ride="carousel" data-bs-interval="false">
            {props.centered ? (
                <div className={`${props.items.length > 4 ? 'carousel--centered' : 'd-flex'}`}>
                    <div className={`carousel-inner d-flex flex-nowrap ${props.additionalClasses} ${props.items.length > 4 ? '' : 'justify-content-center'}`}>
                        {props.items.map((item, index) => (
                            <div key={`carouselItemContent1${index}`} className={item.carouselItemClass}>
                                {item.content}
                            </div>
                        ))}
                    </div>
                    {props.children}
                </div>
            ) : (
                <Fragment>
                    <div className="carousel-inner d-flex flex-nowrap">
                        {props.items.map((item, index) => (
                            <div key={`carouselItemContent2${index}`} className={item.carouselItemClass}>
                                {item.content}
                            </div>
                        ))}

                    </div>
                    {props.children}
                </Fragment>
            )}
        </div>
    )
};

export default Carousel;
