import ProductImageCarousel from "../components/ProductImageCarousel";
import QuantityBox from '../components/QuantityBox';
import ReviewStar from '../components/ReviewStar';

const ProductDetail = () => {
    return (
        <div class="container px-g mb-4 mt-lg-5">
            <div class="row align-items-start">
                <ProductImageCarousel />
                <div class="col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column">
                    <div class="react-yotpo-star" data-product-id="4543113265187" data-show-total="false" data-show-score="true"></div>
                    <p class="font-size-lg order-lg-0">Sunny Honey</p>
                    <h1 class="mb-2 order-lg-0">Sunny Honey Bali Bronzing Foam</h1>
                    <p class="font-size-lg">1x Bali Bronzing Foam 200ml<br/>1x Deluxe Vegan Kabuki Brush<br/>1x Hypoallergenic Soft Velvet Mitt</p>
                    <p class="my-1 font-size-lg font-weight-bold">
                        <span class="text-primary mr-25 text-nowrap" data-variant-available="true" data-variant-price="$59.90">$59.90</span>
                        <span class="text-linethrough mr-25 text-nowrap">$96.80</span>
                        <span class="text-primary text-nowrap text-save">(Save 38%)</span>
                    </p>
                    <div class="product-swatch-mobile__trigger">
                        <div class="product-form-submit mb-3 position-relative">
                            <div class="d-flex">
                                <QuantityBox />
                                <button class="btn btn-lg btn-primary btn-block ml-1 ml-lg-g" type="submit">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProductDetail