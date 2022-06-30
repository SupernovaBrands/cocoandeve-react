import { useReducer } from "react";
import ProductContext from "./product-context";

const _content = {
    "sunny-honey-bali-bronzing-self-tan-set": {
        us: {
            handle: 'sunny-honey-bali-bronzing-self-tan-set',
            price: '$70.10',
            compareAtPrice: '$87.70',
            saving: 'Save 20%',
            title1: 'Sunny Honey',
            title2: 'Bali Bronzing Bundle',
            description: 'The only self-tanner you will ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'Blurs pigmentation and perfects skin.',
                formula2: 'Tropical mango and guava scent (no biscuit smell!)',
                formula3: 'Lightweight, non-sticky formula.',
                formula4: 'Developed with a green-grey base for a natural looking, golden glow with no orangey tones.',
                formula5: 'Soft tanning mitt and kabuki brush for a perfect fuss-free application.',
            },
            asSeenin: 'As seen in',
            atc: 'Add to cart',
            shades: [
                {
                    type: 'swatch',
                    swatch: 'medium',
                    text: 'Medium Shade - Gives skin a sun-kissed glow. Great for lighter skin tones!',
                    class: 'medium',
                },
                {
                    type: 'swatch',
                    swatch: 'dark',
                    text: 'Dark Shade - For a back from vacay bronze. Ideal for medium skin tones!',
                    class: 'dark',
                },
                {
                    type: 'swatch',
                    swatch: 'ultra-dark',
                    text: 'Ultra Dark Shade - A deep, rich tan. For deeper skin tones!',
                    class: 'ultra-dark',
                }
            ]
        },
        fr: {
            handle: 'sunny-honey-bali-bronzing-self-tan-set',
            price: '€46,90',
            compareAtPrice: '€65,90',
            saving: '29% de réduction',
            title1: 'Sunny Honey',
            title2: 'Kit de Bronzage',
            description: 'Le seul autobronzant dont tu auras besoin. <br />DHA 100% naturelle. Non testé sur les animaux. Vegan. ',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'PAS de substances nocives, PAS de sous-tons orangés.',
                formula2: 'Estompe les tâches de pigmentation et embellit la peau.',
                formula3: 'Parfum mangue et goyave. (sans odeur de biscuit !)',
                formula4: 'Formule légère et non collante.',
                formula5: 'Un gant de bronzage et un pinceau kabuki pour une application facile et impeccable.',
            },
            asSeenin: 'Comme on peut le voir dans',
            atc: 'Ajouter au panier',
            shades: [
                {
                    type: 'swatch',
                    swatch: 'medium',
                    text: 'Medium Shade - Donne à ta peau un éclat discret. Parfait pour une peau plus claire !',
                    class: 'medium',
                },
                {
                    type: 'swatch',
                    swatch: 'dark',
                    text: 'Dark Shade - Pour un bronzage digne d`un retour de vacances. Parfait pour les teints médiums !',
                    class: 'dark',
                },
                {
                    type: 'swatch',
                    swatch: 'ultra-dark',
                    text: 'Ultra Dark Shade - Pour un bronzage profond et unifié. Pour les teints plus hâlés ! Dark Shade - A deep, rich tan. For deeper skin tones!',
                    class: 'ultra-dark',
                }
            ]
        },
        de: {
            handle: 'sunny-honey-bali-bronzing-self-tan-set',
            price: '€46,90',
            compareAtPrice: '€65,90',
            saving: 'Spare 29%',
            title1: 'Sunny Honey',
            title2: 'Selbstbräuner Set',
            description: 'Der einzige Selbstbräuner, den du jemals brauchen wirst.<br />100% natürliches DHA. Tierversuchsfrei. Vegan.',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'Verwischt Pigmentflecken und perfektioniert die Haut.',
                formula2: 'Tropischer Mango- und Guavenduft (kein Keksgeruch!)',
                formula3: 'Leichte, nicht klebrige Formel.',
                formula4: 'Entwickelt mit einer grüngrauen Basis für einen natürlich aussehendes, goldenes Strahlen ohne Orangetöne.',
                formula5: 'Weicher Bräunungshandschuh und Kabuki-Pinsel für eine perfekte, stressfreie Anwendung.',
            },
            asSeenin: 'Empfohlen von',
            atc: 'Jetzt kaufen',
            shades: [
                {
                    type: 'swatch',
                    swatch: 'medium',
                    text: 'Nuance: Medium - Verleiht der Haut einen sonnengeküssten Glow. Super für hellere Hauttöne!',
                    class: 'medium',
                },
                {
                    type: 'swatch',
                    swatch: 'dark',
                    text: 'Nuance: Dark - Für eine perfekte Urlaubsbräune. Ideal für mittlere Hauttöne!',
                    class: 'dark',
                },
                {
                    type: 'swatch',
                    swatch: 'ultra-dark',
                    text: 'Nuance: Ultra Dark – Eine tiefe, satte Bräune. Für dunklere Hauttöne!',
                    class: 'ultra-dark',
                }
            ]
        },
        my: {
            price: 'RM199.00',
            compareAtPrice: 'RM312.00',
            saving: 'Save 36%',
        },
        uk: {
            price: '£39.90',
            compareAtPrice: '£56.90',
            saving: 'Save 30%',
        },
        ca: {
            price: '$59.90',
            compareAtPrice: '$101.90',
            saving: 'Save 41%',
        },
        au: {
            price: '$69.20',
            compareAtPrice: '$99.90',
            saving: 'Save 31%',
        },
        eu: {
            price: '€46,90',
            compareAtPrice: '€65,90',
            saving: 'Save 29%',
        },
        int: {
            price: 'SG$64.90',
            compareAtPrice: 'SG$101.90',
            saving: 'Save 36%',
        }
    },
    "deep-condition-bundle": {
        us: {
            handle: 'deep-condition-bundle',
            price: '$70.10',
            compareAtPrice: '$87.70',
            saving: 'Save 20%',
            title1: 'Like A Virgin',
            title2: 'Deep Conditioning Bundle',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'Super Hydrating Cream Conditioner deeply conditions resulting in visibly glossier, shinier & smoother hair.',
                formula2: 'Super Hydrating Shampoo moisturises and cleanses hair without stripping colour.',
                formula3: 'Super Nourishing Hair Masque repairs hair from inside out, improving texture and shine in one wash.',
                formula4: 'Signature Coconut & Fig scent takes your hair on a trip to paradise!',
            },
            asSeenin: 'As seen in',
            atc: 'Add to cart',
            shades: []
        },
        fr: {
            handle: 'deep-condition-bundle',
            price: '€46,90',
            compareAtPrice: '€65,90',
            saving: '29% de réduction',
            title1: 'Sunny Honey',
            title2: 'Kit de Bronzage',
            description: 'Le seul autobronzant dont tu auras besoin. <br />DHA 100% naturelle. Non testé sur les animaux. Vegan. ',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'PAS de substances nocives, PAS de sous-tons orangés.',
                formula2: 'Estompe les tâches de pigmentation et embellit la peau.',
                formula3: 'Parfum mangue et goyave. (sans odeur de biscuit !)',
                formula4: 'Formule légère et non collante.',
                formula5: 'Un gant de bronzage et un pinceau kabuki pour une application facile et impeccable.',
            },
            asSeenin: 'Comme on peut le voir dans',
            atc: 'Ajouter au panier',
            shades: []
        },
        de: {
            handle: 'deep-condition-bundle',
            price: '€46,90',
            compareAtPrice: '€65,90',
            saving: 'Spare 29%',
            title1: 'Sunny Honey',
            title2: 'Selbstbräuner Set',
            description: 'Der einzige Selbstbräuner, den du jemals brauchen wirst.<br />100% natürliches DHA. Tierversuchsfrei. Vegan.',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'Verwischt Pigmentflecken und perfektioniert die Haut.',
                formula2: 'Tropischer Mango- und Guavenduft (kein Keksgeruch!)',
                formula3: 'Leichte, nicht klebrige Formel.',
                formula4: 'Entwickelt mit einer grüngrauen Basis für einen natürlich aussehendes, goldenes Strahlen ohne Orangetöne.',
                formula5: 'Weicher Bräunungshandschuh und Kabuki-Pinsel für eine perfekte, stressfreie Anwendung.',
            },
            asSeenin: 'Empfohlen von',
            atc: 'Jetzt kaufen',
            shades: []
        }
    },
    default: {
        price: '$70.10',
        compareAtPrice: '$87.70',
        saving: 'Save 20%',
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
        shades: []
    },
}

const productReducer = (state, action) => {
    const defaultObj = _content[action.handle].us;
    const storeObj = _content[action.handle][action.activeStore];
    const content = Object.assign(defaultObj, storeObj);
    return content;
};

const ProductProvider = props => {
    const [productState, dispatchProductAction] = useReducer(productReducer, _content.default);
    const storeChangeHandler = (activeStore, handle) => {
        const validStore = ['us', 'de', 'fr', 'int', 'my', 'eu', 'fr', 'de', 'uk', 'ca', 'au'].indexOf(activeStore) !== -1 ? activeStore : 'us';
        dispatchProductAction({type: 'CHANGESTORE', activeStore: validStore, handle})
    };

    const productContext = { ...productState, storeChange: storeChangeHandler };
    

    return (
        <ProductContext.Provider value={productContext}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;