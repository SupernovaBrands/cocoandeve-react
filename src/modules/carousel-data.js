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

const PRODUCTS_HAIR_AMAZON = [
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3a5538e-0e90-4505-bfe6-bd95a542b100/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/704e5aab-f07e-43d0-b29b-77d41dfcfa00/828x"
            rating={4.8}
            title="Test"
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
            title="Test"
            handle='silky-hair-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/30afaedc-2ddc-44b9-e57e-1da4c5a0fa00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e24dd53e-b0e1-4def-7490-9bb441048f00/828x"
            rating={4.8}
            totalReviews='1419'
            title="Test"
            handle='shampoo-conditioner-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a3ce2b9-cbf2-4195-da7c-ab72f6e01300/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6e40527-c0e7-4383-4fa1-5d7dfffe3e00/828x"
            rating={4.8}
            totalReviews='628'
            title="Test"
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
            title="Test"
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
            title="Test"
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
            title="Test"
            handle='bond-repair-restore-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3a5538e-0e90-4505-bfe6-bd95a542b100/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/704e5aab-f07e-43d0-b29b-77d41dfcfa00/828x"
            rating={4.8}
            totalReviews='1417'
            title="Test"
            handle='super-hydration-kit' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e88f246-0350-46a4-52fd-bd2c64a5bc00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e88f246-0350-46a4-52fd-bd2c64a5bc00/828x"
            rating={4.8}
            totalReviews='7340'
            title="Test"
            handle='silky-hair-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/30afaedc-2ddc-44b9-e57e-1da4c5a0fa00/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e24dd53e-b0e1-4def-7490-9bb441048f00/828x"
            rating={4.8}
            totalReviews='1419'
            title="Test"
            handle='shampoo-conditioner-set' />
    },
    {
        carouselItemClass: 'carousel-item col-9 col-md-4 product-card text-center',
        content: <ProductCard
            img="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2a3ce2b9-cbf2-4195-da7c-ab72f6e01300/828x"
            comImg="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c6e40527-c0e7-4383-4fa1-5d7dfffe3e00/828x"
            rating={4.8}
            totalReviews='628'
            title="Test"
            handle='daily-essentials-bundle' />
    },
];

export { PRODUCTS_FACE, PRODUCTS_BODY, PRODUCTS_VALUE_SETS, PRODUCTS_HAIR_1, PRODUCTS_HAIR_2, PRODUCTS_HAIR_3, PRODUCTS_HAIR_AMAZON };
