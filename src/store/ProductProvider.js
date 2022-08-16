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
                    text: "Dark Shade - Pour un bronzage digne d'un retour de vacances. Parfait pour les teints médiums!",
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
            title2: 'Deep Condition Bundle',
            description: '1x Super Hydrating Shampoo 8.4oz<br/>1x Super Hydrating Cream Conditioner 8.4oz<br/>1x Super Nourishing Hair Masque 7.2oz',
            rating: '1417',
            stars: '4.8',
            benefits: {
                formula1: 'Super Hydrating Cream Conditioner deeply conditions resulting in visibly glossier, shinier & smoother hair. ',
                formula2: 'Super Hydrating Shampoo moisturises and cleanses hair without stripping colour. ',
                formula3: 'Super Nourishing Hair Masque repairs hair from inside out, improving texture and shine in one wash. ',
                formula4: 'Signature Coconut & Fig scent takes your hair on a trip to paradise!',
            },
            asSeenin: 'As seen in',
            atc: 'Add to cart',
            shades: []
        },
        fr: {
            handle: 'deep-condition-bundle',
            price: '€63,70',
            compareAtPrice: '€79,70',
            saving: '20% de réduction',
            title1: 'Like A Virgin',
            title2: 'Deep Condition Kit',
            description: '1x Shampooing Super Hydratant 250ml <br />1x Après-Shampooing Super Hydratant 250ml<br/>1x Masque Super Nourrissant 212ml ',
            rating: '1417',
            stars: '4.8',
            benefits: {
                formula1: 'Shampooing Super Hydratant qui hydrate et nettoie les cheveux sans abîmer les cheveux.',
                formula2: 'Après-Shampooing Super Hydratant qui répare en profondeur pour des cheveux plus brillants, éclatants et lisses.',
                formula3: 'Masque Super Nourrissant qui répare les cheveux de l’intérieur, améliorant la texture et la brillance dès le premier lavage.',
                formula4: 'Parfum signature noix de coco et figue qui feront voyager tes cheveux au paradis !',
            },
            asSeenin: 'Comme on peut le voir dans',
            atc: 'Ajouter au panier',
            shades: []
        },
        de: {
            handle: 'deep-condition-bundle',
            price: '€63,70',
            compareAtPrice: '€79,70',
            saving: 'Spare 20%',
            title1: 'Like A Virgin',
            title2: 'Deep Condition Bundle',
            description: '1x Super Pflegendes Shampoo 250ml<br />1x Super Pflegender Conditioner 250ml<br/>1x Like A Virgin Haarmaske 212ml',
            rating: '1417',
            stars: '4.8',
            benefits: {
                formula1: 'Intensiv Pflegender Conditioner mit sofortigem Feuchtigkeitsboost für sichtbar glänzendes, geschmeidiges Haar.',
                formula2: 'Super Pflegendes Shampoo pflegt und reinigt dein Haar ohne auszutrocknen oder ihm Farbglanz zu entziehen.',
                formula3: 'Super Pflegende Haarmaske repariert dein Haar von innen heraus, verbessert die Struktur und den Glanz mit einer Haarwäsche.',
                formula4: 'Unser unverwechselbarer Duft aus Kokosnuss & Feige nimmt deine Haare mit auf eine Reise ins Paradies!',
            },
            asSeenin: 'Empfohlen von',
            atc: 'Jetzt kaufen',
            shades: []
        },
        my: {
            price: 'RM316.00',
            compareAtPrice: 'RM395.00',
            saving: 'Save 20%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
        },
        uk: {
            price: '£54.90',
            compareAtPrice: '£68.70',
            saving: 'Save 20%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
        },
        ca: {
            price: '$97.30',
            compareAtPrice: '$121.70',
            saving: 'Save 20%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
        },
        au: {
            price: '$103.70',
            compareAtPrice: '$129.70',
            saving: 'Save 20%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
        },
        eu: {
            price: '€63,70',
            compareAtPrice: '€79,70',
            saving: 'Save 20%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
        },
        int: {
            price: 'SG$102.90',
            compareAtPrice: 'SG$128.70',
            saving: 'Save 20%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml<br/>1x Super Nourishing Hair Masque 212ml',
        }
    },
    "repairing-restoring-hair-mask": {
        us: {
            handle: 'repairing-restoring-hair-mask',
            price: '$34.90',
            compareAtPrice: '',
            saving: '',
            title1: '',
            title2: 'Sweet Repair Hair Mask',
            description: '1x Sweet Repair Hair Mask 7.2oz<br/>',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'Hair repair powerblend of active ingredients: Biomimetic Ceramides, Vegan Keratin Complex and Hyaluronic Acid reduce hair damage and repair hair weakened by heat, chemical damage and color. ',
                formula2: 'Clinically proven: improves hair strength by 85% and reduces damage by up to 65%.',
                formula3: 'Hair is completely restored and cracks are repaired from first use for healthier, smoother, softer hair. ',
                formula4: 'Scientifically formulated to deeply repair and restore in just 5 minutes! ',
            },
            asSeenin: 'As seen in',
            atc: 'Add to cart',
            shades: []
        },
        fr: {
            handle: 'repairing-restoring-hair-mask',
            price: '€34,90',
            title1: '',
            title2: 'Masque Cheveux Sweet Repair',
            description: '1x Masque Cheveux Sweet Repair 212ml',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: "Un mélange puissant de principes actifs pour réparer les cheveux : les céramides biomimétiques, le complexe de kératine vegan et l'acide hyaluronique réduisent les dommages et réparent les cheveux affaiblis par la chaleur, les produits chimiques et les colorations.",
                formula2: "Cliniquement prouvé : améliore la résistance des cheveux de 85% et réduit les dommages jusqu'à 65%.",
                formula3: 'Les cheveux sont complètement régénérés et les cassures sont réparées dès la première utilisation pour des cheveux plus sains, plus lisses et plus doux.',
                formula4: 'Formulé scientifiquement pour réparer et redonner vie à tes cheveux en seulement 5 minutes ! ',
            },
            asSeenin: 'Comme on peut le voir dans',
            atc: 'Ajouter au panier',
            shades: []
        },
        de: {
            handle: 'repairing-restoring-hair-mask',
            price: '€34,90',
            title1: '',
            title2: 'Sweet Repair Haarmaske',
            description: '1x Sweet Repair Haarmaske 212ml',
            rating: '220',
            stars: '4.8',
            benefits: {
                formula1: 'Wissenschaftlich entwickelt, um in nur 5 Minuten tiefgreifend zu reparieren und wiederherzustellen!',
                formula2: 'Haarreparatur-Power-Formel mit aktiven Wirkstoffen: Biomimetische Ceramide, veganer Keratin-Komplex und Hyaluronsäure reduzieren Haarschäden und reparieren geschwächtes Haar.',
                formula3: 'Das Haar wird vollständig wiederhergestellt und Risse werden ab der ersten Anwendung repariert: für gesünderes, glatteres und weicheres Haar.',
                formula4: 'Klinisch erwiesen: Verbessert die Haarfestigkeit um 85% und reduziert Schäden um bis zu 65%.',
            },
            asSeenin: 'Empfohlen von',
            atc: 'Jetzt kaufen',
            shades: []
        },
        my: {
            price: 'RM156.00',
            description: '1x Sweet Repair Hair Mask 212ml<br/>',
        },
        uk: {
            price: '£30.90',
            description: '1x Sweet Repair Hair Mask 212ml<br/>',
        },
        ca: {
            price: '$43.90',
            description: '1x Sweet Repair Hair Mask 212ml<br/>',
        },
        au: {
            price: '$51.90',
            description: '1x Sweet Repair Hair Mask 212ml<br/>',
        },
        eu: {
            price: '€34,90',
            description: '1x Sweet Repair Hair Mask 212ml<br/>',
        },
        int: {
            price: 'SG$50.90',
            description: '1x Sweet Repair Hair Mask 212ml<br/>',
        }
    },
    "shampoo-conditioner-set": {
        us: {
            handle: 'shampoo-conditioner-set',
            price: '$39.50',
            compareAtPrice: '$49.80',
            saving: 'Save 21%',
            title1: '',
            title2: 'Super Hydrating Shampoo & Conditioner Set',
            description: '1x Super Hydrating Shampoo 8.4oz<br/>1x Super Hydrating Cream Conditioner 8.4oz   ',
            rating: '1419',
            stars: '4.8',
            benefits: {
                formula1: '26 times more hydration with ResistHyalTM Hyaluronic Acid technology & no devolumizing silicones.',
                formula2: 'Hair is cleaner for longer with a rich lather & zero drying sulfates.',
                formula3: '7-in-1 formula for instant hydration, shine, softness, strength, volume & no split ends or frizz.',
                formula4: 'Iconic Coconut & Fig scent takes your hair to paradise.',
            },
            asSeenin: 'As seen in',
            atc: 'Add to cart',
            shades: []
        },
        fr: {
            handle: 'shampoo-conditioner-set',
            price: '€38,00',
            compareAtPrice: '€49,80',
            saving: '24% de réduction',
            title1: '',
            title2: 'Shampooing et Après-Shampooing Super Hydratants',
            description: '1 Shampooing Super Hydratant (250ml)<br/>1 Après-Shampooing Super Hydratant (250ml)',
            rating: '1419',
            stars: '4.8',
            benefits: {
                formula1: 'Apporte 26 fois plus d’hydratation grâce à la technologie ResistHyalTM contenant de l’acide hyaluronique, le tout sans silicones.',
                formula2: 'Les cheveux restent propres plus longtemps avec une mousse riche et oncteuse, sans sulfates desséchants.',
                formula3: 'Formule 7 en 1 qui hydrate et adoucit les cheveux tout en prévenant les fourches et en domptant les frisottis.',
                formula4: 'Le parfum de la noix de coco et de la figue emmèneront tes cheveux au paradis.',
            },
            asSeenin: 'Comme on peut le voir dans',
            atc: 'Ajouter au panier',
            shades: []
        },
        de: {
            handle: 'shampoo-conditioner-set',
            price: '€38,00',
            compareAtPrice: '€49,80',
            saving: 'Spare 24%',
            title1: '',
            title2: 'Super Pflegendes Shampoo & Conditioner Set',
            description: '1x Super Pflegendes Shampoo 250ml<br/>1x Super Pflegender Conditioner 250ml',
            rating: '1419',
            stars: '4.8',
            benefits: {
                formula1: '26-mal mehr Feuchtigkeitspflege mit ResistHyal™ Hyaluronsäuren-Technologie & keine Silikone, die dem Haar Volumen entnehmen.',
                formula2: 'Dein Haar bleibt länger sauber & keine austrocknenden Sulfate.',
                formula3: '7-in-1 Rezeptur für sofortige Feuchtigkeitspflege, Glanz, Geschmeidigkeit, Kraft und Volumen & kein Spliss oder Frizz.',
                formula4: 'Unser Beliebter Duft aus Kokosnuss & Feige bringt dich ins Paradies.',
            },
            asSeenin: 'Empfohlen von',
            atc: 'Jetzt kaufen',
            shades: []
        },
        my: {
            price: 'RM184.00',
            compareAtPrice: 'RM226.00',
            saving: 'Save 19%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml',
        },
        uk: {
            price: '£34.00',
            compareAtPrice: '£45.80',
            saving: 'Save 26%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml',
        },
        ca: {
            price: '$53.00',
            compareAtPrice: '$65.80',
            saving: 'Save 19%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml',
        },
        au: {
            price: '$59.90',
            compareAtPrice: '$73.80',
            saving: 'Save 19%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml',
        },
        eu: {
            price: '€38,00',
            compareAtPrice: '€49,80',
            saving: 'Save 24%',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml',
        },
        int: {
            price: 'SG$59.90',
            compareAtPrice: 'SG$73.80',
            saving: '19% de réduction',
            description: '1x Super Hydrating Shampoo 250ml<br/>1x Super Hydrating Cream Conditioner 250ml',
        }
    },
    "super-nourishing-coconut-fig-hair-masque": {
        us: {
            handle: 'super-nourishing-coconut-fig-hair-masque',
            price: '$39.90',
            compareAtPrice: '',
            saving: '',
            title1: '',
            title2: 'Like A Virgin Hair Masque',
            description: '1x Like a Virgin Hair Masque 7.2oz<br/>1x Tangle Tamer',
            rating: '7564',
            stars: '4.8',
            benefits: {
                formula1: 'Hydrates and deeply conditions. ',
                formula2: 'Transform your hair in only 10 minutes.',
                formula3: 'Restores dry damaged hair. Treats split ends and tames frizz. ',
                formula4: 'Improves hair texture and shine.',
            },
            asSeenin: 'As seen in',
            atc: 'Add to cart',
            shades: []
        },
        fr: {
            handle: 'super-nourishing-coconut-fig-hair-masque',
            price: '€32,90',
            title1: '',
            title2: 'Masque Cheveux Like a Virgin',
            description: '1 Masque Capillaire Like a Virgin (212 ml)<br/>1 Brosse démêlante',
            rating: '7564',
            stars: '4.8',
            benefits: {
                formula1: "Hydrate et nourrit des longueurs jusqu'aux pointes.",
                formula2: 'Transforme tes cheveux en seulement 10 minutes.',
                formula3: 'Répare les cheveux secs et abimés. Prévient les fourches et dompte les frisottis. ',
                formula4: "Améliore la texture et redonne de l'éclat aux cheveux.",
            },
            asSeenin: 'Comme on peut le voir dans',
            atc: 'Ajouter au panier',
            shades: []
        },
        de: {
            handle: 'super-nourishing-coconut-fig-hair-masque',
            price: '€32,90',
            title1: '',
            title2: 'Like A Virgin Haarmaske',
            description: '1x Like a Virgin Haarmaske 212ml<br/>1x Tangle Tamer',
            rating: '7564',
            stars: '4.8',
            benefits: {
                formula1: 'Spendet Feuchtigkeit und pflegt bis in die Spitzen. ',
                formula2: 'Verwandelt dein Haar in nur 10 Minuten.',
                formula3: 'Repariert trockenes und geschädigtes Haar.  Behandelt Spliss und zähmt krauses Haar. ',
                formula4: 'Verbessert die Haarstruktur und verleiht einen wunderschönen Glanz. ',
            },
            asSeenin: 'Empfohlen von',
            atc: 'Jetzt kaufen',
            shades: []
        },
        my: {
            price: 'RM178.00',
            description: '1x Like a Virgin Hair Masque 212ml<br/>1x Tangle Tamer',
        },
        uk: {
            price: '£32.90',
            description: '1x Like a Virgin Hair Masque 212ml<br/>1x Tangle Tamer',
        },
        ca: {
            price: '$57.90',
            description: '1x Like a Virgin Hair Masque 212ml<br/>1x Tangle Tamer',
        },
        au: {
            price: '$57.90',
            description: '1x Like a Virgin Hair Masque 212ml<br/>1x Tangle Tamer',
        },
        eu: {
            price: '€32,90',
            description: '1x Like a Virgin Hair Masque 212ml<br/>1x Tangle Tamer',
        },
        int: {
            price: 'SG$57.90',
            description: '1x Like a Virgin Hair Masque 212ml<br/>1x Tangle Tamer',
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