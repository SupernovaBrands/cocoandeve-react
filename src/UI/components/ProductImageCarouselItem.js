
const ProductImageCarouselItem = (props) => {
    return (
        <div className={`carousel-item ${props.index === 0 ? 'active': ''}`}>
            <picture>
                <source srcSet={props.imageUrl} media="(min-width: 992px)" />
                <img src={props.imageUrl} alt={`Slide {props.index}`} className="w-100 embed-responsive-item fit--cover" />
            </picture>
        </div>
    );
};

export default ProductImageCarouselItem