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

if (['us'].includes(activeStore)) {
    PRODUCTS_FACE.push({
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_TanningMist_1_1140x.jpg"
            comImg="https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_TanningMist_1_1140x.jpg"
            rating={4.8}
            totalReviews='48'
            handle='antioxidant-face-tanning-micromist' />
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

let PRODUCTS_HAIR_1 = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d7b7e0b-1dcf-409a-0b9a-01d0fc3cdd00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/950c9d87-c6b0-42f8-76f2-f0b2fc4dee00/828x"
            rating={4.8}
            totalReviews='37'
            handle='leave-in-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a3ce2b9-cbf2-4195-da7c-ab72f6e01300/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6e40527-c0e7-4383-4fa1-5d7dfffe3e00/828x"
            rating={4.8}
            totalReviews='628'
            handle='daily-essentials-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d7111a69-d238-4ff2-afe8-5b2d40ca3c00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c3043ba7-ff66-43e9-60df-3f39a7b6b000/828x"
            rating={4.8}
            totalReviews='7340'
            handle='hair-necessities-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3a5538e-0e90-4505-bfe6-bd95a542b100/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/704e5aab-f07e-43d0-b29b-77d41dfcfa00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='super-hydration-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/Date_Night_No_Belly_Band_PDP_1140x.jpg?v=1673933285'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/Date_Night_No_Belly_Band_PDP_1140x.jpg?v=1673933285'
            rating={4.8}
            totalReviews='389'
            handle='date-night-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/HairRepairBundle_1140x1140_9381b082-032c-4b69-818b-7af278e217bc_1140x.jpg?v=1666153289'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/HairRepairBundle_1140x1140_9381b082-032c-4b69-818b-7af278e217bc_1140x.jpg?v=1666153289'
            rating={4.9}
            totalReviews='363'
            handle='hair-repair-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/BondRepairandRestoreKit_PDP_1140x1140_4f22cdc1-07da-4231-ab92-a3864fa1bcc4_1140x.jpg?v=1673842738'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/BondRepairandRestoreKit_PDP_1140x1140_4f22cdc1-07da-4231-ab92-a3864fa1bcc4_1140x.jpg?v=1673842738'
            rating={4.9}
            totalReviews='273'
            handle='bond-repair-restore-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            rating={4.9}
            totalReviews='102'
            handle='bond-building-pre-shampoo-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            rating={4.8}
            totalReviews='20'
            handle='repairing-restoring-hair-mask' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d7b7e0b-1dcf-409a-0b9a-01d0fc3cdd00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/950c9d87-c6b0-42f8-76f2-f0b2fc4dee00/828x"
            rating={4.8}
            totalReviews='37'
            handle='leave-in-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a3ce2b9-cbf2-4195-da7c-ab72f6e01300/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6e40527-c0e7-4383-4fa1-5d7dfffe3e00/828x"
            rating={4.8}
            totalReviews='628'
            handle='daily-essentials-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d7111a69-d238-4ff2-afe8-5b2d40ca3c00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c3043ba7-ff66-43e9-60df-3f39a7b6b000/828x"
            rating={4.8}
            totalReviews='7340'
            handle='hair-necessities-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3a5538e-0e90-4505-bfe6-bd95a542b100/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/704e5aab-f07e-43d0-b29b-77d41dfcfa00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='super-hydration-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            rating={4.8}
            totalReviews='20'
            handle='repairing-restoring-hair-mask' />
    }
];

if (!['us'].includes(activeStore)) {
    PRODUCTS_HAIR_1 = PRODUCTS_HAIR_1.filter((i) => !i.onlyUs);
}

const PRODUCTS_HAIR_2 = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/30afaedc-2ddc-44b9-e57e-1da4c5a0fa00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e24dd53e-b0e1-4def-7490-9bb441048f00/828x"
            rating={4.8}
            totalReviews='1419'
            handle='shampoo-conditioner-set' />
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
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7f217f70-0515-4725-cbe0-c222428f9c00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e42ff618-fb4d-4f4d-4282-5ac6d54f2100/828x"
            rating={4.8}
            totalReviews='7909'
            handle='miracle-elixir-hair-oil-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d7b7e0b-1dcf-409a-0b9a-01d0fc3cdd00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/950c9d87-c6b0-42f8-76f2-f0b2fc4dee00/828x"
            rating={4.8}
            totalReviews='37'
            handle='leave-in-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            rating={4.8}
            totalReviews='20'
            handle='repairing-restoring-hair-mask' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/30afaedc-2ddc-44b9-e57e-1da4c5a0fa00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e24dd53e-b0e1-4def-7490-9bb441048f00/828x"
            rating={4.8}
            totalReviews='1419'
            handle='shampoo-conditioner-set' />
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
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7f217f70-0515-4725-cbe0-c222428f9c00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e42ff618-fb4d-4f4d-4282-5ac6d54f2100/828x"
            rating={4.8}
            totalReviews='7909'
            handle='miracle-elixir-hair-oil-treatment' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d7b7e0b-1dcf-409a-0b9a-01d0fc3cdd00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/950c9d87-c6b0-42f8-76f2-f0b2fc4dee00/828x"
            rating={4.8}
            totalReviews='37'
            handle='leave-in-conditioner' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            rating={4.8}
            totalReviews='20'
            handle='repairing-restoring-hair-mask' />
    },
];

let PRODUCTS_HAIR_3 = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3a5538e-0e90-4505-bfe6-bd95a542b100/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/704e5aab-f07e-43d0-b29b-77d41dfcfa00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='super-hydration-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e88f246-0350-46a4-52fd-bd2c64a5bc00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e88f246-0350-46a4-52fd-bd2c64a5bc00/828x"
            rating={4.8}
            totalReviews='7340'
            handle='silky-hair-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/30afaedc-2ddc-44b9-e57e-1da4c5a0fa00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e24dd53e-b0e1-4def-7490-9bb441048f00/828x"
            rating={4.8}
            totalReviews='1419'
            handle='shampoo-conditioner-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a3ce2b9-cbf2-4195-da7c-ab72f6e01300/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6e40527-c0e7-4383-4fa1-5d7dfffe3e00/828x"
            rating={4.8}
            totalReviews='628'
            handle='daily-essentials-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/Date_Night_No_Belly_Band_PDP_1140x.jpg?v=1673933285'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/Date_Night_No_Belly_Band_PDP_1140x.jpg?v=1673933285'
            rating={4.8}
            totalReviews='389'
            handle='date-night-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/HairRepairBundle_1140x1140_9381b082-032c-4b69-818b-7af278e217bc_1140x.jpg?v=1666153289'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/HairRepairBundle_1140x1140_9381b082-032c-4b69-818b-7af278e217bc_1140x.jpg?v=1666153289'
            rating={4.9}
            totalReviews='363'
            handle='hair-repair-bundle' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        onlyUs: true,
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/BondRepairandRestoreKit_PDP_1140x1140_4f22cdc1-07da-4231-ab92-a3864fa1bcc4_1140x.jpg?v=1673842738'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/BondRepairandRestoreKit_PDP_1140x1140_4f22cdc1-07da-4231-ab92-a3864fa1bcc4_1140x.jpg?v=1673842738'
            rating={4.9}
            totalReviews='273'
            handle='bond-repair-restore-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3a5538e-0e90-4505-bfe6-bd95a542b100/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/704e5aab-f07e-43d0-b29b-77d41dfcfa00/828x"
            rating={4.8}
            totalReviews='1417'
            handle='super-hydration-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e88f246-0350-46a4-52fd-bd2c64a5bc00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e88f246-0350-46a4-52fd-bd2c64a5bc00/828x"
            rating={4.8}
            totalReviews='7340'
            handle='silky-hair-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/30afaedc-2ddc-44b9-e57e-1da4c5a0fa00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e24dd53e-b0e1-4def-7490-9bb441048f00/828x"
            rating={4.8}
            totalReviews='1419'
            handle='shampoo-conditioner-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a3ce2b9-cbf2-4195-da7c-ab72f6e01300/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6e40527-c0e7-4383-4fa1-5d7dfffe3e00/828x"
            rating={4.8}
            totalReviews='628'
            handle='daily-essentials-bundle' />
    },
];

if (!['us'].includes(activeStore)) {
    PRODUCTS_HAIR_3 = PRODUCTS_HAIR_3.filter((i) => !i.onlyUs);
}

const PRODUCTS_HAIR_AMAZON_UK = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6d7b7e0b-1dcf-409a-0b9a-01d0fc3cdd00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/950c9d87-c6b0-42f8-76f2-f0b2fc4dee00/828x"
            externalUrl='https://www.amazon.co.uk/dp/B0B13YLSJJ?maas=maas_adg_6D3735355419B6C2B4758EC30D28A6DF_afap_abs&ref_=aa_maas&tag=maas'
            handle='leave-in-conditioner'
            ctaText='Shop on Amazon'
            externalPrice='£20' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            externalUrl='https://www.amazon.co.uk/dp/B0B44W2CGG?maas=maas_adg_5F6CB52A5724BD5806402AB3B8FF7AF2_afap_abs&ref_=aa_maas&tag=maas'
            handle='repairing-restoring-hair-mask'
            ctaText='Shop on Amazon'
            externalPrice='£32' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            externalUrl='https://www.amazon.co.uk/dp/B0BC874RGL?maas=maas_adg_F9229F3B4AC9ADDF11A6BD751CDC22CF_afap_abs&ref_=aa_maas&tag=maas'
            ctaText='Shop on Amazon'
            handle='bond-building-pre-shampoo-treatment'
            externalPrice='£23' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00/828x'
            externalUrl='https://www.amazon.co.uk/dp/B098DV8QYS?maas=maas_adg_9D69CD94DF536A9F73D2637F5B51FEC9_afap_abs&ref_=aa_maas&tag=maas'
            ctaText='Shop on Amazon'
            handle='shampoo-conditioner-set'
            externalPrice='£35'
            externalCompare='£44' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7f217f70-0515-4725-cbe0-c222428f9c00/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e42ff618-fb4d-4f4d-4282-5ac6d54f2100/828x'
            externalUrl='https://www.amazon.co.uk/dp/B08T1LNVGQ?maas=maas_adg_CF441D485C3337415EFD0F9EF22FECE8_afap_abs&ref_=aa_maas&tag=maas'
            ctaText='Shop on Amazon'
            handle='miracle-elixir-hair-oil-treatment'
            externalPrice='£29' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://cdn.shopify.com/s/files/1/0028/8253/5533/products/MasqueFullSizewithTangleTamer_828x.jpg"
            comImg="https://cdn.shopify.com/s/files/1/0028/8253/5533/products/MasqueFullSizewithTangleTamer_828x.jpg"
            externalUrl='https://www.amazon.co.uk/dp/B07B8JN5NP?maas=maas_adg_5B1CE1E8545CD3C29F9C00AF74982268_afap_abs&ref_=aa_maas&tag=maas'
            handle='super-nourishing-coconut-fig-hair-masque'
            ctaText='Shop on Amazon'
            externalPrice='£33' />
    },
];

const PRODUCTS_HAIR_AMAZON_CA = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://cdn.shopify.com/s/files/1/0286/1327/9779/products/That_saWrap-LeafPrint_5fc1d002-b50b-4ad4-acca-ba3fe7d92d51_828x.jpg?v=1644811592"
            comImg="https://cdn.shopify.com/s/files/1/0286/1327/9779/products/That_saWrap-LeafPrint_5fc1d002-b50b-4ad4-acca-ba3fe7d92d51_828x.jpg?v=1644811592"
            externalUrl='https://www.amazon.ca/dp/B07PWVZXGF?maas=maas_adg_AEAC7B1677960BAF74A64260F78E8963_afap_abs&ref_=aa_maas&tag=maas'
            handle='masque-towelwrap'
            ctaText='Shop on Amazon'
            externalCompare='$103'
            externalPrice='$78' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            externalUrl='https://www.amazon.ca/dp/B0B44W2CGG?maas=maas_adg_90D0ADB01669C00F080BBD1A2EC3E2EE_afap_abs&ref_=aa_maas&tag=maas'
            handle='repairing-restoring-hair-mask'
            externalPrice='$48'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            externalUrl='https://www.amazon.ca/dp/B0BC874RGL?maas=maas_adg_804394199A6D30DE982F0D901BBA0C9D_afap_abs&ref_=aa_maas&tag=maas'
            handle='bond-building-pre-shampoo-treatment'
            externalPrice='$36'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00/828x'
            externalUrl='https://www.amazon.ca/dp/B098DV8QYS?maas=maas_adg_26A4820B93A87B21C18B89626920CE6B_afap_abs&ref_=aa_maas&tag=maas'
            handle='shampoo-conditioner-set'
            externalPrice='$53'
            externalCompare='$66'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7f217f70-0515-4725-cbe0-c222428f9c00/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e42ff618-fb4d-4f4d-4282-5ac6d54f2100/828x'
            externalUrl='https://www.amazon.ca/dp/B08T1LNVGQ?maas=maas_adg_3EB8D5C4CDB4D2192EC0F57FACB9C5D8_afap_abs&ref_=aa_maas&tag=maas'
            handle='miracle-elixir-hair-oil-treatment'
            externalPrice='$39'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://cdn.shopify.com/s/files/1/0028/8253/5533/products/MasqueFullSizewithTangleTamer_828x.jpg"
            comImg="https://cdn.shopify.com/s/files/1/0028/8253/5533/products/MasqueFullSizewithTangleTamer_828x.jpg"
            externalUrl='https://www.amazon.ca/dp/B07B8JN5NP?maas=maas_adg_0E9342A56F401EFFF6CAF510C995DAD8_afap_abs&ref_=aa_maas&tag=maas'
            handle='super-nourishing-coconut-fig-hair-masque'
            externalPrice='$58'
            ctaText='Shop on Amazon' />
    },
];


const PRODUCTS_HAIR_AMAZON_US = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://cdn.shopify.com/s/files/1/0286/1327/9779/products/That_saWrap-LeafPrint_5fc1d002-b50b-4ad4-acca-ba3fe7d92d51_828x.jpg?v=1644811592"
            comImg="https://cdn.shopify.com/s/files/1/0286/1327/9779/products/That_saWrap-LeafPrint_5fc1d002-b50b-4ad4-acca-ba3fe7d92d51_828x.jpg?v=1644811592"
            externalUrl='https://www.amazon.com/dp/B07PWVZXGF?maas=maas_adg_AEAC7B1677960BAF74A64260F78E8963_afap_abs&ref_=aa_maas&tag=maas'
            handle='masque-towelwrap'
            ctaText='Shop on Amazon'
            externalPrice='$49.40' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cbc423ec-78a5-44e7-1170-3a7359ca1900/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/80718850-39b2-4d3a-f82c-09be6320c700/828x"
            externalUrl='https://www.amazon.com/dp/B0B44W2CGG?maas=maas_adg_90D0ADB01669C00F080BBD1A2EC3E2EE_afap_abs&ref_=aa_maas&tag=maas'
            handle='repairing-restoring-hair-mask'
            externalPrice='$36'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            comImg='https://cdn.shopify.com/s/files/1/0243/8817/3888/products/PDP_BondBuildingPre-Shampoo_1140x.jpg?v=1663207008'
            externalUrl='https://www.amazon.com/dp/B0BC874RGL?maas=maas_adg_804394199A6D30DE982F0D901BBA0C9D_afap_abs&ref_=aa_maas&tag=maas'
            handle='bond-building-pre-shampoo-treatment'
            externalPrice='$25'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00/828x'
            externalUrl='https://www.amazon.com/dp/B098DV8QYS?maas=maas_adg_26A4820B93A87B21C18B89626920CE6B_afap_abs&ref_=aa_maas&tag=maas'
            handle='shampoo-conditioner-set'
            externalPrice='$50'
            externalCompare='$40'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7f217f70-0515-4725-cbe0-c222428f9c00/828x'
            comImg='https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e42ff618-fb4d-4f4d-4282-5ac6d54f2100/828x'
            externalUrl='https://www.amazon.com/dp/B08T1LNVGQ?maas=maas_adg_3EB8D5C4CDB4D2192EC0F57FACB9C5D8_afap_abs&ref_=aa_maas&tag=maas'
            handle='miracle-elixir-hair-oil-treatment'
            externalPrice='$29'
            ctaText='Shop on Amazon' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://cdn.shopify.com/s/files/1/0028/8253/5533/products/MasqueFullSizewithTangleTamer_828x.jpg"
            comImg="https://cdn.shopify.com/s/files/1/0028/8253/5533/products/MasqueFullSizewithTangleTamer_828x.jpg"
            externalUrl='https://www.amazon.com/dp/B07B8JN5NP?maas=maas_adg_0E9342A56F401EFFF6CAF510C995DAD8_afap_abs&ref_=aa_maas&tag=maas'
            handle='super-nourishing-coconut-fig-hair-masque'
            externalPrice='$39'
            ctaText='Shop on Amazon' />
    },
];

const PRODUCTS_TAN_AMAZON_UK = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8c2d8c7b-46d4-4303-9ae6-106d6e25d800/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a30deb4-1d70-4ad8-af43-15b446aaae00/828x"
            externalUrl='https://www.amazon.co.uk/dp/B091CF3JVM?maas=maas_adg_CC13AEB22B274A91DB2BCCB2E9DE3092_afap_abs&ref_=aa_maas&tag=maas'
            handle='bronzing-self-tanner-drops'
            ctaText='Shop on Amazon'
            externalPrice='£22' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_BronzingFoam_532x.jpg"
            comImg="../compressed_images/Featured_BronzingFoam_532x.webp"
            externalUrl='https://www.amazon.co.uk/dp/B07Z53CNBS?maas=maas_adg_23731EDEA691F1F1C4B2B94B758963F9_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-mousse'
            ctaText='Shop on Amazon'
            externalPrice='£26' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_BaliBronzingBundle_532x.jpg"
            comImg="../compressed_images/Featured_BaliBronzingBundle_532x.webp"
            externalUrl='https://www.amazon.co.uk/dp/B08Y6T5LH7?maas=maas_adg_D744E9EA7D5ED9560F3C3A01B5FCBC30_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-set'
            ctaText='Shop on Amazon'
            externalPrice='£46'
            externalCompare='£58' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/47a254b2-14c2-4a7b-dd6d-530064d5f400/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c548b49d-7cc2-44db-0949-555633529800/828x"
            externalUrl='https://www.amazon.co.uk/dp/B08G1LQGLN?maas=maas_adg_41BA452BD27E9183A787C581A15F110D_afap_abs&ref_=aa_maas&tag=maas&th=1'
            handle='sunny-honey-bali-bronzing-self-tan-set-mitt'
            ctaText='Shop on Amazon'
            externalPrice='£32'
            externalCompare='£38' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_TanBundlewithBackApplicator_532x.jpg"
            comImg="../compressed_images/Featured_TanBundlewithBackApplicator_532x.webp"
            externalUrl='https://www.amazon.co.uk/dp/B09XV2LZBN?maas=maas_adg_56A92FEFE18B2F481EACF2D502E06117_afap_abs&ref_=aa_maas&tag=maas'
            handle='bali-bae-self-tan-set'
            ctaText='Shop on Amazon'
            externalPrice='£56'
            externalCompare='£75' />
    },
];

const PRODUCTS_TAN_AMAZON_CA = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8c2d8c7b-46d4-4303-9ae6-106d6e25d800/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a30deb4-1d70-4ad8-af43-15b446aaae00/828x"
            externalUrl='https://www.amazon.ca/dp/B091CF3JVM?maas=maas_adg_DA33E47C05DF88018AEAF652C9A3C6B2_afap_abs&ref_=aa_maas&tag=maas'
            handle='bronzing-self-tanner-drops'
            ctaText='Shop on Amazon'
            externalPrice='$38' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_BronzingFoam_532x.jpg"
            comImg="../compressed_images/Featured_BronzingFoam_532x.webp"
            externalUrl='https://www.amazon.ca/dp/B08FX6ZGS7?maas=maas_adg_0496C4F1C4AE39E2A882CD0F493BF870_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-mousse'
            ctaText='Shop on Amazon'
            externalPrice='$49' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_BaliBronzingBundle_532x.jpg"
            comImg="../compressed_images/Featured_BaliBronzingBundle_532x.webp"
            externalUrl='https://www.amazon.ca/dp/B08Y6T5LH7?maas=maas_adg_D734E060FE25A5BCD74D084256D4EE36_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-set'
            ctaText='Shop on Amazon'
            externalPrice='$70'
            externalCompare='$101' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/47a254b2-14c2-4a7b-dd6d-530064d5f400/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c548b49d-7cc2-44db-0949-555633529800/828x"
            externalUrl='https://www.amazon.ca/dp/B0C45TL4YB?maas=maas_adg_2D63E5E984AAEA1EFFFC1E4AFAD04F84_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-set-mitt'
            ctaText='Shop on Amazon'
            externalCompare='$69'
            externalPrice='$54' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_TanBundlewithBackApplicator_532x.jpg"
            comImg="../compressed_images/Featured_TanBundlewithBackApplicator_532x.webp"
            externalUrl='https://www.amazon.ca/dp/B09XV2LZBN?maas=maas_adg_AF95642603D7372EAE55A8BA45298159_afap_abs&ref_=aa_maas&tag=maas'
            handle='bali-bae-self-tan-set'
            ctaText='Shop on Amazon'
            externalCompare='$129'
            externalPrice='$93' />
    },
];

const PRODUCTS_TAN_AMAZON_US = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8c2d8c7b-46d4-4303-9ae6-106d6e25d800/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1a30deb4-1d70-4ad8-af43-15b446aaae00/828x"
            externalUrl='https://www.amazon.com/dp/B091CF3JVM?maas=maas_adg_DA33E47C05DF88018AEAF652C9A3C6B2_afap_abs&ref_=aa_maas&tag=maas'
            handle='bronzing-self-tanner-drops'
            ctaText='Shop on Amazon'
            externalPrice='$28' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_BronzingFoam_532x.jpg"
            comImg="../compressed_images/Featured_BronzingFoam_532x.webp"
            externalUrl='https://www.amazon.com/dp/B08FX6ZGS7?maas=maas_adg_0496C4F1C4AE39E2A882CD0F493BF870_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-mousse'
            ctaText='Shop on Amazon'
            externalPrice='$35' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_BaliBronzingBundle_532x.jpg"
            comImg="../compressed_images/Featured_BaliBronzingBundle_532x.webp"
            externalUrl='https://www.amazon.com/dp/B08Y6T5LH7?maas=maas_adg_D734E060FE25A5BCD74D084256D4EE36_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-set'
            ctaText='Shop on Amazon'
            externalPrice='$52'
            externalCompare='$74' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/47a254b2-14c2-4a7b-dd6d-530064d5f400/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c548b49d-7cc2-44db-0949-555633529800/828x"
            externalUrl='https://www.amazon.com/dp/B0C45TL4YB?maas=maas_adg_2D63E5E984AAEA1EFFFC1E4AFAD04F84_afap_abs&ref_=aa_maas&tag=maas'
            handle='sunny-honey-bali-bronzing-self-tan-set-mitt'
            ctaText='Shop on Amazon'
            externalCompare='$69'
            externalPrice='$54' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="../images/Featured_TanBundlewithBackApplicator_532x.jpg"
            comImg="../compressed_images/Featured_TanBundlewithBackApplicator_532x.webp"
            externalUrl='https://www.amazon.com/dp/B09XV2LZBN?maas=maas_adg_AF95642603D7372EAE55A8BA45298159_afap_abs&ref_=aa_maas&tag=maas'
            handle='bali-bae-self-tan-set'
            ctaText='Shop on Amazon'
            externalCompare='$95'
            externalPrice='$69' />
    },
];

let PRODUCTS_HAIR_AMAZON = [];
let PRODUCTS_TAN_AMAZON = [];
if (['uk'].includes(activeStore)) {
    PRODUCTS_HAIR_AMAZON = [...PRODUCTS_HAIR_AMAZON_UK, ...PRODUCTS_HAIR_AMAZON_UK];
    PRODUCTS_TAN_AMAZON = [...PRODUCTS_TAN_AMAZON_UK, ...PRODUCTS_TAN_AMAZON_UK];
}

if (['ca'].includes(activeStore)) {
    PRODUCTS_HAIR_AMAZON = [...PRODUCTS_HAIR_AMAZON_CA, ...PRODUCTS_HAIR_AMAZON_CA];
    PRODUCTS_TAN_AMAZON = [...PRODUCTS_TAN_AMAZON_CA, ...PRODUCTS_TAN_AMAZON_CA];
}

if (['us'].includes(activeStore)) {
    PRODUCTS_HAIR_AMAZON = [...PRODUCTS_HAIR_AMAZON_US, ...PRODUCTS_HAIR_AMAZON_US];
    PRODUCTS_TAN_AMAZON = [...PRODUCTS_TAN_AMAZON_US, ...PRODUCTS_TAN_AMAZON_US];
}

export { PRODUCTS_FACE, PRODUCTS_BODY, PRODUCTS_VALUE_SETS, PRODUCTS_HAIR_1, PRODUCTS_HAIR_2, PRODUCTS_HAIR_3, PRODUCTS_HAIR_AMAZON, PRODUCTS_TAN_AMAZON };
