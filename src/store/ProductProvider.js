import { useReducer } from "react";
import ProductContext from "./product-context";

const _content = {
    us: {
        price: '$46.90',
        compareAtPrice: '$73.90',
        saving: 'Save 37%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    my: {
        price: 'RM199.00',
        compareAtPrice: 'RM312.00',
        saving: 'Save 36%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    uk: {
        price: '£39.90',
        compareAtPrice: '£56.90',
        saving: 'Save 30%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    ca: {
        price: '$59.90',
        compareAtPrice: '$101.90',
        saving: 'Save 41%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    au: {
        price: '$69.20',
        compareAtPrice: '$99.90',
        saving: 'Save 31%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    eu: {
        price: '€46,90',
        compareAtPrice: '€65,90',
        saving: 'Save 29%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    int: {
        price: 'SG$64.90',
        compareAtPrice: 'SG$101.90',
        saving: 'Save 36%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
        benefits: {
            formula1: 'Blurs pigmentation and perfects skin.',
            formula2: 'Tropical mango and guava scent (no biscuit smell!)',
            formula3: 'Lightweight, non-sticky formula.',
            formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
            formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
        },
        asSeenin: 'As seen in',
        atc: 'Add to cart',
        shades: {
            medium: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
            dark: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
            ultra: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
        },
    },
    fr: {
        price: '€46,90',
        compareAtPrice: '€65,90',
        saving: '29% de réduction',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'Le seul autobronzant dont tu auras besoin. <br />DHA 100% naturelle. Non testé sur les animaux. Vegan. ',
        benefits: {
            formula1: 'PAS de substances nocives, PAS de sous-tons orangés.',
            formula2: 'Estompe les tâches de pigmentation et embellit la peau.',
            formula3: 'Parfum mangue et goyave. (sans odeur de biscuit !)',
            formula4: 'Formule légère et non collante.',
            formula5: 'Un gant de bronzage et un pinceau kabuki pour une application facile et impeccable.',
        },
        asSeenin: 'Comme on peut le voir dans',
        atc: 'Ajouter au panier',
        shades: {
            medium: 'Medium Shade - Donne à ta peau un éclat discret. Parfait pour une peau plus claire !',
            dark: "Dark Shade - Pour un bronzage digne d'un retour de vacances. Parfait pour les teints médiums !",
            ultra: 'Ultra Dark Shade - Pour un bronzage profond et unifié. Pour les teints plus hâlés !',
        },
    },
    de: {
        price: '€46,90',
        compareAtPrice: '€65,90',
        saving: 'Spare 29%',
        title1: 'Sunny Honey',
        title2: 'Bali Bronzing Bundle',
        description: 'Der einzige Selbstbräuner, den du jemals brauchen wirst.<br />100% natürliches DHA. Tierversuchsfrei. Vegan.',
        benefits: {
            formula1: 'Verwischt Pigmentflecken und perfektioniert die Haut.',
            formula2: 'Tropischer Mango- und Guavenduft (kein Keksgeruch!)',
            formula3: 'Leichte, nicht klebrige Formel.',
            formula4: 'Entwickelt mit einer grüngrauen Basis für einen natürlich aussehenden, goldenen Schimmer ohne Orangetöne.',
            formula5: 'Weicher Bräunungshandschuh und Kabuki-Bürste für eine perfekte, unkomplizierte Anwendung.',
        },
        asSeenin: 'Wie zusehen in',
        atc: 'Jetzt kaufen',
        shades: {
            medium: 'Nuance: Medium - Verleiht der Haut einen sonnengeküssten Glow. Super für hellere Hauttöne!',
            dark: 'Nuance: Dark - Für eine perfekte Urlaubsbräune. Ideal für mittlere Hauttöne!',
            ultra: 'Nuance: Ultra Dark – Eine tiefe, satte Bräune. Für dunklere Hauttöne!',
        },
    }
}

const productReducer = (state, action) => {
    return _content[action.activeStore];
};

const ProductProvider = props => {
    const [productState, dispatchProductAction] = useReducer(productReducer, _content.us);
    const storeChangeHandler = (activeStore) => {
        const validStore = ['us', 'au', 'ca', 'uk', 'eu', 'int', 'de', 'fr', 'my'].indexOf(activeStore) !== -1 ? activeStore : 'us';
        dispatchProductAction({type: 'CHANGESTORE', activeStore: validStore})
    };

    const productContext = { ...productState, storeChange: storeChangeHandler };
    

    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;