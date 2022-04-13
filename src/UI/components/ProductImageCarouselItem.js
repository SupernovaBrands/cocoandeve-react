const ProductImageCarouselItem = (props) => {
    return (
        <div className={`carousel-item ${props.index === 0 ? 'active': ''}`}>
            <picture>
                <source type="image/webp" srcSet={`${props.webp}/828x`}/>
                <source type="image/webp" srcSet={`${props.webp}/1140x`} media="(min-width: 992px)"/>
                <source type="image/jpeg" srcSet={`${props.jpg}/828x`}/>
                <source type="image/jpeg" srcSet={`${props.jpg}/1140x`} media="(min-width: 992px)"/>
                <img src={`${props.jpg}/828x`} alt="" className="w-100 embed-responsive-item fit--cover" loading="lazy" />
            </picture>
        </div>
    );
};

export default ProductImageCarouselItem