import { useReducer } from 'react';
import RangeContext from './range-context';

const productList = {
    'bronzing-self-tanner-drops': {
        us: {
            price: '$27.90',
            comparePrice: null,
            title: 'Bronzing Face Drops',
        },
        ca: {
            price: '$35.90',
            comparePrice: null,
        },
        uk: {
            price: '£22.90',
            comparePrice: null,
        },
        eu: {
            price: '€26,90',
            comparePrice: null,
        },
        au: {
            price: '$39.90',
            comparePrice: null,
        },
        int: {
            price: 'SG$38.90',
            comparePrice: null,
        },
        de: {
            price: '€26,90',
            comparePrice: null,
            title: 'Bronzing Face Drops'
        },
        fr: {
            price: '€26,90',
            comparePrice: null,
            title: 'Sérum bronzant pour le visage',
        },
        my: {
            price: 'RM119.00',
            comparePrice: null,
        },
    },
    'spf-glow-kit': {
        us: {
            price: '$45.70',
            comparePrice: '$57.20',
            title: 'SPF & Glow Kit',
        },
        ca: {
            price: '$69.90',
            comparePrice: '$87.40',
        },
        uk: {
            price: '£45.70',
            comparePrice: '£57.20',
        },
        eu: {
            price: '€45.70',
            comparePrice: '€57.20',
        },
        au: {
            price: '$63.80',
            comparePrice: '$79.80',
        },
        int: {
            price: 'SG$45.70',
            comparePrice: 'SG$57.20',
        },
        de: {
            price: '€45.70',
            comparePrice: '€57.20',
        },
        fr: {
            price: '€45.70',
            comparePrice: '€57.20',
        },
    },
    'sunny-honey-bali-bronzing-self-tan-set': {
        us: {
            price: '$46.90',
            comparePrice: '$73.90',
            title: 'Sunny Honey Bronzing Bundle',
        },
        ca: {
            price: '$59.90',
            comparePrice: '$101.90',
        },
        uk: {
            price: '£39.90',
            comparePrice: '£56.90',
        },
        eu: {
            price: '€46,90',
            comparePrice: '€65,90',
        },
        au: {
            price: '$69.20',
            comparePrice: '$99.90',
        },
        int: {
            price: 'SG$64.90',
            comparePrice: 'SG$101.90',
        },
        de: {
            price: '€46,90',
            comparePrice: '€65,90',
            title: 'Sunny Honey Selbstbräuner Set',
        },
        fr: {
            price: '€46,90',
            comparePrice: '€65,90',
            title: 'Kit de Bronzage de Bali Sunny Honey',
        },
        my: {
            price: 'RM199.00',
            comparePrice: 'RM312.00',
        },
    },
    'sunny-honey-bali-bronzing-self-tan-mousse': {
        us: {
            price: '$34.90',
            comparePrice: null,
            title: 'Sunny Honey Bronzing Foam',
        },
        ca: {
            price: '$49.90',
            comparePrice: null,
        },
        uk: {
            price: '£25.90',
            comparePrice: null,
        },
        eu: {
            price: '€31,90',
            comparePrice: null,
        },
        au: {
            price: '$44.90',
            comparePrice: null,
        },
        int: {
            price: 'SG$48.90',
            comparePrice: null,
        },
        de: {
            price: '€31,90',
            comparePrice: null,
            title: 'Sunny Honey Selbstbräuner Mousse',
        },
        fr: {
            price: '€31,90',
            comparePrice: null,
            title: 'Sunny Honey Mousse de bronzage',
        },
        my: {
            price: 'RM150.00',
            comparePrice: null,
        },
    },
    'tanning-goddess': {
        us: {
            price: '$73.90',
            comparePrice: '$105.80',
            title: 'Tanning Goddess Kit',
        },
        ca: {
            price: '$101.90',
            comparePrice: '$146.90',
        },
        uk: {
            price: '£57.90',
            comparePrice: '£78.90',
        },
        eu: {
            price: '€66,90',
            comparePrice: '€95,80',
        },
        au: {
            price: '$101.90',
            comparePrice: '$146.80',
        },
        int: {
            price: 'SG$101.90',
            comparePrice: 'SG$145.80',
        },
        de: {
            price: '€66,90',
            comparePrice: '€95,80',
            title: 'Set für himmlische Bräune',
        },
        fr: {
            price: '€66,90',
            comparePrice: '€95,80',
            title: 'Kit de bronzage Goddess',
        },
        my: {
            price: 'RM313.00',
            comparePrice: 'RM447.00',
        },
    },
    'self-tan-travel-kit': {
        us: {
            price: '$24.90',
            comparePrice: null,
            title: 'Self Tan Travel Kit',
        },
        ca: {
            price: '$33.90',
            comparePrice: null,
        },
        uk: {
            price: '£22.90',
            comparePrice: null,
        },
        eu: {
            price: '€24,90',
            comparePrice: null,
        },
        au: {
            price: '$34.90',
            comparePrice: null,
        },
        int: {
            price: 'SG$34.90',
            comparePrice: null,
        },
        de: {
            price: '€24,90',
            comparePrice: null,
            title: 'Selbstbräuner Reiseset',
        },
        fr: {
            price: '€24,90',
            comparePrice: null,
            title: 'Kit de voyage Autobronzant',
        },
        my: {
            price: 'RM107.00',
            comparePrice: null,
        },
    },
    'bali-bae-self-tan-set': {
        us: {
            price: '$59.00',
            comparePrice: '$90.80',
            title: 'Bali Bae Self Tan Set',
        },
        ca: {
            price: '$80.40',
            comparePrice: '$123.80',
        },
        uk: {
            price: '£50.20',
            comparePrice: '£71.80',
        },
        eu: {
            price: '€57,90',
            comparePrice: '€82,80',
        },
        au: {
            price: '$81.70',
            comparePrice: '$125.80',
        },
        int: {
            price: 'SG$88.70',
            comparePrice: 'SG$126.80',
        },
        de: {
            price: '€57,90',
            comparePrice: '€82,80',
            title: 'Bali Bae Selbstbräuner Set',
        },
        fr: {
            price: '€57,90',
            comparePrice: '€82,80',
            title: 'Kit de Bronzage Bali Bae',
        },
        my: {
            price: 'RM273.00',
            comparePrice: 'RM388.00',
        },
    },
    'glowy-face-tan-set': {
        us: {
            price: '$62.20',
            comparePrice: '$77.80',
            title: 'Glowy Face Tan Set',
        },
        ca: {
            price: '$84.60',
            comparePrice: '$105.80',
        },
        uk: {
            price: '£54.20',
            comparePrice: '£67.80',
        },
        eu: {
            price: '€61,40',
            comparePrice: '€76,80',
        },
        au: {
            price: '$95.80',
            comparePrice: '$119.80',
        },
        int: {
            price: 'SG$89.50',
            comparePrice: 'SG$111.90',
        },
        de: {
            price: '€61,40',
            comparePrice: '€76,80',
        },
        fr: {
            price: '€61,40',
            comparePrice: '€76,80',
            title: 'Glowy Face Bronzage Kit',
        },
        my: {
            price: 'RM275.00',
            comparePrice: 'RM336.00',
        },
    }
};

const carouselSection = {
    us: {
        title: 'Self-tanners for any occasion',
        face: 'Face',
        body: 'Body',
        valuesets: 'Value Sets',
        learnMore: 'Learn More',
    },
    fr: {
        title: 'Des autobronzants pour toutes les occasions.',
        face: 'Visage',
        body: 'Corps',
        valuesets: 'Kits',
        learnMore: 'En savoir plus',
    },
    de: {
        title: 'Selbstbräuner für jeden Anlass',
        face: 'Gesicht',
        body: 'Körper',
        valuesets: 'Sets & Kits',
        learnMore: 'Erfahre mehr',
    }
};

const formulaSection = {
    us: {
        title: 'Revolutionary formula',
        subtitle: 'NO nasties, NO orange tones.',
        list1: 'Blurs pigmentation and perfects skin.',
        list2: 'Tropical mango and guava scent\n (no biscuit smell!)',
        list3: 'Lightweight, non-sticky formula.',
        list4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
        footer: 'No sulfates · No silicone · No parabens · Vegan',
    },
    fr: {
        title: 'Une formule révolutionnaire',
        subtitle: 'PAS de substances nocives, PAS de sous-tons orangés.',
        list1: 'Estompe les tâches de pigmentation et embellit la peau.',
        list2: 'Parfum mangue et goyave.\n (sans odeur de biscuit !)',
        list3: 'Formule légère et non collante.',
        list4: 'Développé avec une base verte-grise pour un éclat doré naturel, sans sous-tons orangés.',
        footer: 'Sans sulfates · Sans silicones · Sans parabènes · Végan',
    },
    de: {
        title: 'Revolutionäre Formel',
        subtitle: 'KEINE schädlichen Zusätze, KEINE Orangetöne.',
        list1: 'Verwischt Pigmentflecken und perfektioniert die Haut.',
        list2: 'Tropischer Mango- und Guavenduft\n (kein Keksgeruch!)',
        list3: 'Leichte, nicht klebrige Formel.',
        list4: 'Entwickelt mit einer grüngrauen Basis für einen natürlich aussehendes, goldenes Strahlen ohne Orangetöne.',
        footer: 'Ohne Sulfate · Ohne Silikone · Ohne Parabene · Vegan',
    },
};

const bannerSection = {
    us: {
        title: 'The only self tanner you\'ll ever need.',
        webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e597aaa2-22fb-416e-0572-2671dd39f000/1400x',
        jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a8d30ba5-6fc6-41ee-5462-cc9bbaacd800/1400x',
    },
    fr: {
        title: 'Le seul autobronzant dont tu auras besoin.',
        webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cddf3aee-8c02-41dc-fb57-c4aed2a98400/1400x',
        jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/11df0a91-b8a5-4cfc-ab0a-218feb6c5900/1400x',
    },
    de: {
        title: 'Der einzige Selbstbräuner, den du jemals brauchen wirst.',
        webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/43439088-3d3a-420e-b165-436332838000/1400x',
        jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d16a2f1f-a383-4dfa-5e44-37fa00844700/1400x',
    },
};

const rangeReducer = (state, action) => {
    return productList[action.productHandle][action.activeStore];
};

const carouselReducer = (state, action) => {
    return carouselSection[action.activeStore];
};

const formulaReducer = (state, action) => {
    return formulaSection[action.activeStore];
};

const bannerReducer = (state, action) => {
    return bannerSection[action.activeStore];
};

const RangeProvider = props => {
    const [productState, dispatchProductAction] = useReducer(rangeReducer, productList);
    const [carouselState, dispatchCarouselAction] = useReducer(carouselReducer, carouselSection);
    const [formulaState, dispatchFormulaAction] = useReducer(formulaReducer, formulaSection);
    const [bannerState, dispatchBannerAction] = useReducer(bannerReducer, bannerSection);
    const changeStoreHandler = (activeStore, productHandle) => {
        dispatchProductAction({type: 'CHANGESTORE', activeStore: activeStore, productHandle: productHandle});
        dispatchCarouselAction({type: 'CHANGESTORE', activeStore: activeStore});
        dispatchFormulaAction({type: 'CHANGESTORE', activeStore: activeStore});
        dispatchBannerAction({type: 'CHANGESTORE', activeStore: activeStore});
    };

    const rangeData = {
        products: productState,
        carouselSection: carouselState,
        formulaSection: formulaState,
        bannerSection: bannerState,
        storeChange: changeStoreHandler,
    };

    return (
        <RangeContext.Provider value={rangeData}>
            {props.children}
        </RangeContext.Provider>
    );
};

export default RangeProvider;
