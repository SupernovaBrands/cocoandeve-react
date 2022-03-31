
const ProductImageCarouselItem = (props) => {
    return (
        <div className={`carousel-item ${props.index === 0 ? 'active': ''}`}>
            <picture>
                <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/compressed_images/${props.imageUrl.replace('jpg', 'webp')}`}/>
                <source type="image/jpeg" srcSet={`${process.env.PUBLIC_URL}/images/${props.imageUrl}`}/>
                <img src={`${process.env.PUBLIC_URL}/images/${props.imageUrl}`} alt="" className="w-100 embed-responsive-item fit--cover"/>
            </picture>
        </div>
    );
};

export default ProductImageCarouselItem