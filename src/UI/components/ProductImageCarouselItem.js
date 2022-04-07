
const ProductImageCarouselItem = (props) => {
    return (
        <div className={`carousel-item ${props.index === 0 ? 'active': ''}`}>
            <picture>
                <source type="image/webp" srcSet={`${props.webp}/productmobile`}/>
                <source type="image/webp" srcSet={`${props.webp}/productdesktop`} media="(min-width: 992px)"/>
                <source type="image/jpeg" srcSet={`${props.jpg}/productmobile`}/>
                <source type="image/jpeg" srcSet={`${props.jpg}/productdesktop`} media="(min-width: 992px)"/>
                <img src={`${props.jpg}/productdesktop`} alt="" className="w-100 embed-responsive-item fit--cover"/>
            </picture>
        </div>
    );
};

export default ProductImageCarouselItem