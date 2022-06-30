import ProductCard from "../UI/components/ProductCard";

let params = (new URL(document.location)).searchParams;
let activeStore = params.get('utm_store') || 'us';

const PRODUCTS_FACE = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            title='Bronzing Face Drops'
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8c2d8c7b-46d4-4303-9ae6-106d6e25d800/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a30deb4-1d70-4ad8-af43-15b446aaae00/828x'
            rating={4.8}
            totalReviews='735'
            handle='bronzing-self-tanner-drops' />
    }
];

if (['ca', 'au'].includes(activeStore)) {
    PRODUCTS_FACE.push({
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_CExNakedSundaysBundle_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_CExNakedSundaysBundle_532x.webp`}
            rating={4.8}
            totalReviews='735'
            handle='spf-glow-kit' />
    });
}

const PRODUCTS_BODY = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_532x.webp`}
            rating={4.8}
            totalReviews='4336'
            handle='sunny-honey-bali-bronzing-self-tan-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFoam_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFoam_532x.webp`}
            rating={4.8}
            totalReviews='2021'
            handle='sunny-honey-bali-bronzing-self-tan-mousse' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_532x.webp`}
            rating={4.8}
            totalReviews='2021'
            handle='tanning-goddess' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_TanningTravelKit_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningTravelKit_532x.webp`}
            rating={4.8}
            totalReviews='96'
            handle='self-tan-travel-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_532x.webp`}
            rating={4.8}
            totalReviews='4336'
            handle='sunny-honey-bali-bronzing-self-tan-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_BronzingFoam_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BronzingFoam_532x.webp`}
            rating={4.8}
            totalReviews='2021'
            handle='sunny-honey-bali-bronzing-self-tan-mousse' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_532x.webp`}
            rating={4.8}
            totalReviews='2021'
            handle='tanning-goddess' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_TanningTravelKit_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningTravelKit_532x.webp`}
            rating={4.8}
            totalReviews='96'
            handle='self-tan-travel-kit' />
    }
];

const PRODUCTS_VALUE_SETS = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_TanBundlewithBackApplicator_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanBundlewithBackApplicator_532x.webp`}
            rating={4.8}
            totalReviews='4336'
            handle='bali-bae-self-tan-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_BaliBronzingBundle_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_BaliBronzingBundle_532x.webp`}
            rating={4.8}
            totalReviews='4336'
            handle='sunny-honey-bali-bronzing-self-tan-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img={`${process.env.PUBLIC_URL}/images/Featured_TanningGoddessKit_532x.jpg`}
            comImg={`${process.env.PUBLIC_URL}/compressed_images/Featured_TanningGoddessKit_532x.webp`}
            rating={4.8}
            totalReviews='2021'
            handle='tanning-goddess' />
    }
];

const PRODUCTS_HAIR_1 = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500/1140x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00/828x"
            rating={4.8}
            totalReviews='7568'
            handle='super-nourishing-coconut-fig-hair-masque' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd815d54-612e-4233-8595-5d2dfd83b600/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3958709-ed8f-49cc-ba72-4bd711ab8a00/828x"
            rating={4.8}
            totalReviews='7780'
            handle='clean-scalp-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/55c3daf4-06c1-4514-83e2-9069aa6d2b00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='deep-condition-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e8013bd7-4a67-4283-3aa3-1fb1e0644b00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b08df0d9-8e63-4a68-1769-4d1f63a32c00/828x"
            rating={4.8}
            totalReviews='1469'
            handle='hydrating-shampoo' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/deea10c9-27f3-4202-563e-dfd6fb3d0c00/828x"
            rating={4.8}
            totalReviews='1452'
            handle='hydrating-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500/1140x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00/828x"
            rating={4.8}
            totalReviews='7568'
            handle='super-nourishing-coconut-fig-hair-masque' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd815d54-612e-4233-8595-5d2dfd83b600/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3958709-ed8f-49cc-ba72-4bd711ab8a00/828x"
            rating={4.8}
            totalReviews='7780'
            handle='clean-scalp-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/55c3daf4-06c1-4514-83e2-9069aa6d2b00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='deep-condition-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e8013bd7-4a67-4283-3aa3-1fb1e0644b00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b08df0d9-8e63-4a68-1769-4d1f63a32c00/828x"
            rating={4.8}
            totalReviews='1469'
            handle='hydrating-shampoo' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/deea10c9-27f3-4202-563e-dfd6fb3d0c00/828x"
            rating={4.8}
            totalReviews='1452'
            handle='hydrating-conditioner' />
    },
];

const PRODUCTS_HAIR_2 = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500/1140x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00/828x"
            rating={4.8}
            totalReviews='7568'
            handle='super-nourishing-coconut-fig-hair-masque' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd815d54-612e-4233-8595-5d2dfd83b600/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3958709-ed8f-49cc-ba72-4bd711ab8a00/828x"
            rating={4.8}
            totalReviews='7780'
            handle='clean-scalp-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/55c3daf4-06c1-4514-83e2-9069aa6d2b00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='deep-condition-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e8013bd7-4a67-4283-3aa3-1fb1e0644b00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b08df0d9-8e63-4a68-1769-4d1f63a32c00/828x"
            rating={4.8}
            totalReviews='1469'
            handle='hydrating-shampoo' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/deea10c9-27f3-4202-563e-dfd6fb3d0c00/828x"
            rating={4.8}
            totalReviews='1452'
            handle='hydrating-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500/1140x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00/828x"
            rating={4.8}
            totalReviews='7568'
            handle='super-nourishing-coconut-fig-hair-masque' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd815d54-612e-4233-8595-5d2dfd83b600/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3958709-ed8f-49cc-ba72-4bd711ab8a00/828x"
            rating={4.8}
            totalReviews='7780'
            handle='clean-scalp-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/55c3daf4-06c1-4514-83e2-9069aa6d2b00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='deep-condition-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e8013bd7-4a67-4283-3aa3-1fb1e0644b00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b08df0d9-8e63-4a68-1769-4d1f63a32c00/828x"
            rating={4.8}
            totalReviews='1469'
            handle='hydrating-shampoo' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/deea10c9-27f3-4202-563e-dfd6fb3d0c00/828x"
            rating={4.8}
            totalReviews='1452'
            handle='hydrating-conditioner' />
    },
];

const PRODUCTS_HAIR_3 = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500/1140x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00/828x"
            rating={4.8}
            totalReviews='7568'
            handle='super-nourishing-coconut-fig-hair-masque' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd815d54-612e-4233-8595-5d2dfd83b600/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3958709-ed8f-49cc-ba72-4bd711ab8a00/828x"
            rating={4.8}
            totalReviews='7780'
            handle='clean-scalp-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/55c3daf4-06c1-4514-83e2-9069aa6d2b00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='deep-condition-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e8013bd7-4a67-4283-3aa3-1fb1e0644b00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b08df0d9-8e63-4a68-1769-4d1f63a32c00/828x"
            rating={4.8}
            totalReviews='1469'
            handle='hydrating-shampoo' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/deea10c9-27f3-4202-563e-dfd6fb3d0c00/828x"
            rating={4.8}
            totalReviews='1452'
            handle='hydrating-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500/1140x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00/828x"
            rating={4.8}
            totalReviews='7568'
            handle='super-nourishing-coconut-fig-hair-masque' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd815d54-612e-4233-8595-5d2dfd83b600/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3958709-ed8f-49cc-ba72-4bd711ab8a00/828x"
            rating={4.8}
            totalReviews='7780'
            handle='clean-scalp-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/55c3daf4-06c1-4514-83e2-9069aa6d2b00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='deep-condition-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e8013bd7-4a67-4283-3aa3-1fb1e0644b00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b08df0d9-8e63-4a68-1769-4d1f63a32c00/828x"
            rating={4.8}
            totalReviews='1469'
            handle='hydrating-shampoo' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf55ad57-f74e-4b4e-c8ef-badb1c78ee00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/deea10c9-27f3-4202-563e-dfd6fb3d0c00/828x"
            rating={4.8}
            totalReviews='1452'
            handle='hydrating-conditioner' />
    },
];

export { PRODUCTS_FACE, PRODUCTS_BODY, PRODUCTS_VALUE_SETS, PRODUCTS_HAIR_1, PRODUCTS_HAIR_2, PRODUCTS_HAIR_3 };