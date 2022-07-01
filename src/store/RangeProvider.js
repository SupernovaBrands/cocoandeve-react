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
    },
    'super-nourishing-coconut-fig-hair-masque': {
        us: {
            price: '$39.90',
            title: 'Like A Virgin Hair Masque',
        },
        ca: {
            price: '$57.90',
        },
        uk: {
            price: '£32.90',
        },
        eu: {
            price: '€32,90',
        },
        au: {
            price: '$57.90',
        },
        int: {
            price: 'SG$57.90',
        },
        de: {
            price: '€32,90',
            title: 'Like A Virgin Haarmaske',
        },
        fr: {
            price: '€32,90',
            title: 'Masque Cheveux Like a Virgin',
        },
        my: {
            price: 'RM178.00',
        },
    },
    'clean-scalp-treatment': {
        us: {
            price: '$29.00',
            title: 'Deep Clean Scalp Scrub',
        },
        ca: {
            price: '$39.00',
        },
        uk: {
            price: '£24.50',
        },
        eu: {
            price: '€28,00',
        },
        au: {
            price: '$46.00',
        },
        int: {
            price: 'SG$45.00',
        },
        de: {
            price: '€28,00',
        },
        fr: {
            price: '€28,00',
            title: 'Scrub Lavant Purifiant',
        },
        my: {
            price: 'RM138.00',
        },
    },
    'deep-condition-bundle': {
        us: {
            price: '$70.10',
            comparePrice: '$87.70',
            title: 'Deep Condition Bundle',
        },
        ca: {
            price: '$97.30',
            comparePrice: '$121.70',
        },
        uk: {
            price: '£54.90',
            comparePrice: '£68.70',
        },
        eu: {
            price: '€63,70',
            comparePrice: '€79,70',
        },
        au: {
            price: '$103.70',
            comparePrice: '$129.70',
        },
        int: {
            price: 'SG$102.90',
            comparePrice: 'SG$128.70',
        },
        de: {
            price: '€63,70',
            comparePrice: '€79,70',
        },
        fr: {
            price: '€63,70',
            comparePrice: '€79,70',
            title: 'Deep Condition Kit',
        },
        my: {
            price: 'RM395.00',
            comparePrice: 'RM316.00',
        },
    },
    'hydrating-shampoo': {
        us: {
            price: '$24.90',
            title: 'Super Hydrating Shampoo',
        },
        ca: {
            price: '$32.90',
        },
        uk: {
            price: '£15.90',
        },
        eu: {
            price: '€24,90',
        },
        au: {
            price: '$36.90',
        },
        int: {
            price: 'SG$36.90',
        },
        de: {
            price: '€24,90',
        },
        fr: {
            price: '€24,90',
            title: 'Glowy Face Bronzage Kit',
        },
        my: {
            price: 'RM113.00',
        },
    },
    'hydrating-conditioner': {
        us: {
            price: '$24.90',
            title: 'Super Hydrating Cream Conditioner',
        },
        ca: {
            price: '$32.90',
        },
        uk: {
            price: '£22.90',
        },
        eu: {
            price: '€24,90',
        },
        au: {
            price: '$36.90',
        },
        int: {
            price: 'SG$36.90',
        },
        de: {
            price: '€24,90',
        },
        fr: {
            price: '€24,90',
            title: 'Après-Shampooing Super Hydratant',
        },
        my: {
            price: 'RM113.00',
        },
    },
    'leave-in-conditioner': {
        us: {
            price: '$22.00',
            title: 'Leave In Conditioner',
        },
        ca: {
            price: '$28.00',
        },
        uk: {
            price: '£20.00',
        },
        eu: {
            price: '€22,00',
        },
        au: {
            price: '$34.00',
        },
        int: {
            price: 'SG$36.90',
        },
        de: {
            price: '€22,00',
        },
        fr: {
            price: '€22,00',
            title: 'Soin Sans Rinçage',
        },
        my: {
            price: 'RM98.00',
        },
    },
    'daily-essentials-bundle': {
        us: {
            price: '$57.40',
            comparePrice: '$71.80',
            title: 'Daily Essentials Bundle',
        },
        ca: {
            price: '$75.00',
            comparePrice: '$93.80',
        },
        uk: {
            price: '£47.00',
            comparePrice: '£58.80',
        },
        eu: {
            price: '€57,40',
            comparePrice: '€71,80',
        },
        au: {
            price: '$86.20',
            comparePrice: '$107.80',
        },
        int: {
            price: 'SG$84.60',
            comparePrice: 'SG$105.80',
        },
        de: {
            price: '€57,40',
            comparePrice: '€71,80',
        },
        fr: {
            price: '€57,40',
            comparePrice: '€71,80',
            title: 'Kit Essentiels du Quotidien',
        },
        my: {
            comparePrice: 'RM324.00',
            price: 'RM259.20',
        },
    },
    'hair-necessities-kit': {
        us: {
            price: '$43.90',
            comparePrice: '$51.80',
            title: 'Hair Necessities Kit',
        },
        ca: {
            price: '$59.90',
            comparePrice: '$72.80',
        },
        uk: {
            price: '£39.90',
            comparePrice: '£45.30',
        },
        eu: {
            price: '€40,90',
            comparePrice: '€46,80',
        },
        au: {
            price: '$66.90',
            comparePrice: '$79.80',
        },
        int: {
            price: 'SG$51.90',
            comparePrice: 'SG$78.80',
        },
        de: {
            price: '€40,90',
            comparePrice: '€46,80',
        },
        fr: {
            price: '€40,90',
            comparePrice: '€46,80',
            title: 'Coffret Les Essentiels',
        },
        my: {
            comparePrice: 'RM324.00',
            price: 'RM259.20',
        },
    },
    'super-hydration-kit': {
        us: {
            price: '$86.90',
            comparePrice: '$125.50',
            title: 'Super Hydration Kit',
        },
        ca: {
            price: '$118.90',
            comparePrice: '$170.60',
        },
        uk: {
            price: '£45.80',
            comparePrice: '£34.00',
        },
        eu: {
            price: '€81,90',
            comparePrice: '€117,50',
        },
        au: {
            price: '$66.90',
            comparePrice: '$79.80',
        },
        int: {
            price: 'SG$51.90',
            comparePrice: 'SG$78.80',
        },
        de: {
            price: '€81,90',
            comparePrice: '€117,50',
        },
        fr: {
            price: '€81,90',
            comparePrice: '€117,50',
        },
        my: {
            price: 'SG$128.90',
            comparePrice: 'SG$185.50',
        },
    },
    'shampoo-conditioner-set': {
        us: {
            price: '$39.50',
            comparePrice: '$49.80',
            title: 'Super Hydrating Shampoo & Conditioner Set',
        },
        ca: {
            price: '$53.00',
            comparePrice: '$65.80',
        },
        uk: {
            price: '£34.00',
            comparePrice: '£45.80',
        },
        eu: {
            price: '€38,00',
            comparePrice: '€49,80',
        },
        au: {
            price: '$66.90',
            comparePrice: '$79.80',
        },
        int: {
            price: 'SG$59.90',
            comparePrice: 'SG$73.80',
        },
        de: {
            price: '€38,00',
            comparePrice: '€49,80',
        },
        fr: {
            price: '€38,00',
            comparePrice: '€49,80',
            title: 'Shampooing et Après-Shampooing Super Hydratants',
        },
        my: {
            comparePrice: 'RM184.00',
            price: 'RM226.00',
        },
    },
    'miracle-elixir-hair-oil-treatment': {
        us: {
            price: '$29.90',
            title: 'Miracle Hair Elixir',
        },
        ca: {
            price: '$39.90',
        },
        uk: {
            price: '£28.90',
        },
        eu: {
            price: '€51,50',
        },
        au: {
            price: '$44.90',
        },
        int: {
            price: 'SG$46.90',
        },
        de: {
            price: '€51,50',
        },
        fr: {
            price: '€51,50',
            title: 'Elixir Miracle Pour Cheveux',
        },
        my: {
            price: 'RM144.00',
        },
    },
    'silky-hair-set': {
        us: {
            price: '$59.80',
            comparePrice: '$67.80',
            title: 'Silky Hair Set',
        },
        ca: {
            price: '$83.80',
            comparePrice: '$95.80',
        },
        uk: {
            price: '£51.00',
            comparePrice: '£58.80',
        },
        eu: {
            price: '€51,50',
            comparePrice: '€54,40',
        },
        au: {
            price: '$87.80',
            comparePrice: '$100.80',
        },
        int: {
            price: 'SG$88.60 ',
            comparePrice: 'SG$101.80',
        },
        de: {
            price: '€51,50',
            comparePrice: '€54,40',
        },
        fr: {
            price: '€51,50',
            comparePrice: '€54,40',
        },
        my: {
            comparePrice: 'RM272.00',
            price: 'RM313.00',
        },
    },
};

const carouselSection = {
    tan: {
        us: {
            title: 'Self-tanners for any occasion',
            tab1: 'Face',
            tab2: 'Body',
            tab3: 'Value Sets',
            learnMore: 'Learn More',
            carouselTabs: [
                {
                    carouselId: 'FeaturedFace',
                    isTabActive: false,
                    tabLabel: 'Face',
                },
                {
                    carouselId: 'FeaturedBody',
                    isTabActive: true,
                    tabLabel: 'Body'
                },
                {
                    carouselId: 'FeaturedValueSets',
                    isTabActive: false,
                    tabLabel: 'Value Sets'
                }
            ]
        },
        fr: {
            title: 'Des autobronzants pour toutes les occasions.',
            face: 'Visage',
            body: 'Corps',
            valuesets: 'Kits',
            learnMore: 'En savoir plus',
            carouselTabs: [
                {
                    carouselId: 'FeaturedFace',
                    isTabActive: false,
                    tabLabel: 'Face',
                },
                {
                    carouselId: 'FeaturedBody',
                    isTabActive: true,
                    tabLabel: 'Body'
                },
                {
                    carouselId: 'FeaturedValueSets',
                    isTabActive: false,
                    tabLabel: 'Value Sets'
                }
            ]
        },
        de: {
            title: 'Selbstbräuner für jeden Anlass',
            face: 'Gesicht',
            body: 'Körper',
            valuesets: 'Sets & Kits',
            learnMore: 'Erfahre mehr',
            carouselTabs: [
                {
                    carouselId: 'FeaturedFace',
                    isTabActive: false,
                    tabLabel: 'Face',
                },
                {
                    carouselId: 'FeaturedBody',
                    isTabActive: true,
                    tabLabel: 'Body'
                },
                {
                    carouselId: 'FeaturedValueSets',
                    isTabActive: false,
                    tabLabel: 'Value Sets'
                }
            ]
        }
    },
    hair: {
        us: {
            title: 'Hair products for any occasion',
            face: 'New',
            body: 'Bestsellers',
            valuesets: 'Kits',
            learnMore: 'Learn More',
            carouselTabs: [
                {
                    carouselId: 'FeaturedHair1',
                    isTabActive: false,
                    tabLabel: 'New'
                },
                {
                    carouselId: 'FeaturedHair2',
                    isTabActive: true,
                    tabLabel: 'Bestsellers'
                },
                {
                    carouselId: 'FeaturedHair3',
                    isTabActive: false,
                    tabLabel: 'Value Sets'
                }
            ]
        },
        fr: {
            title: 'Hair products for any occasion',
            face: 'New',
            body: 'Best Seller',
            valuesets: 'Kits',
            learnMore: 'En savoir plus',
            carouselTabs: [
                {
                    carouselId: 'FeaturedHair1',
                    isTabActive: false,
                    tabLabel: 'New'
                },
                {
                    carouselId: 'FeaturedHair2',
                    isTabActive: true,
                    tabLabel: 'Best Seller'
                },
                {
                    carouselId: 'FeaturedHair3',
                    isTabActive: false,
                    tabLabel: 'Value Sets'
                }
            ]
        },
        de: {
            title: 'Hair products for any occasion',
            face: 'New',
            body: 'Best Seller',
            valuesets: 'Sets & Kits',
            learnMore: 'Erfahre mehr',
            carouselTabs: [
                {
                    carouselId: 'FeaturedHair1',
                    isTabActive: false,
                    tabLabel: 'New'
                },
                {
                    carouselId: 'FeaturedHair2',
                    isTabActive: true,
                    tabLabel: 'Best Seller'
                },
                {
                    carouselId: 'FeaturedHair3',
                    isTabActive: false,
                    tabLabel: 'Value Sets'
                }
            ]
        }
    },
};

const formulaSection = {
    tan: {
        jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a8440365-7bda-4690-1602-277357af8a00',
        webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e5ee4be5-5f6e-4fe1-9248-fa04acb29b00',
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
    },
    hair: {
        jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8d241b66-7b80-43bb-f59f-a9eedf7e8d00',
        webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2aaaf539-0ab5-44f6-bb94-44a0aaf1ff00',
        us: {
            title: 'Revolutionary formula',
            subtitle: 'Multi-award winning hair range',
            list1: 'Hydrates and deeply conditions',
            list2: 'Treats split ends and tames frizz.',
            list3: 'Visibly glossier, shinier & smoother hair.',
            list4: 'Suitable for normal to dry hair.',
            footer: 'Vegan · Cruelty-free · No nasties',
        },
        fr: {
            title: 'Revolutionary formula',
            subtitle: 'Multi-award winning hair range',
            list1: 'Hydrates and deeply conditions',
            list2: 'Treats split ends and tames frizz.',
            list3: 'Visibly glossier, shinier & smoother hair.',
            list4: 'Suitable for normal to dry hair.',
            footer: 'Vegan · Non testé sur les animaux · Sans substances nocives',
        },
        de: {
            title: 'Revolutionary formula',
            subtitle: 'Multi-award winning hair range',
            list1: 'Hydrates and deeply conditions',
            list2: 'Treats split ends and tames frizz.',
            list3: 'Visibly glossier, shinier & smoother hair.',
            list4: 'Suitable for normal to dry hair.',
            footer: 'Vegan · Tierversuchsfrei · Keine Chemikalien.',
        },
    },
};

const bannerSection = {
    tan: {
        us: {
            title: 'Sunny Honey',
            subtitle: 'The only self tanner you\'ll ever need.',
            desktop: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e597aaa2-22fb-416e-0572-2671dd39f000/1400x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a8d30ba5-6fc6-41ee-5462-cc9bbaacd800/1400x',
            },
            mobile: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/afa85196-4f02-42da-091e-393e63d1c900/828x',
            }
        },
        fr: {
            title: 'Sunny Honey',
            subtitle: 'Le seul autobronzant dont tu auras besoin.',
            desktop: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cddf3aee-8c02-41dc-fb57-c4aed2a98400/1400x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/11df0a91-b8a5-4cfc-ab0a-218feb6c5900/1400x',
            },
            mobile: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/afa85196-4f02-42da-091e-393e63d1c900/828x',
            }
        },
        de: {
            title: 'Sunny Honey',
            subtitle: 'Der einzige Selbstbräuner, den du jemals brauchen wirst.',
            desktop: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/43439088-3d3a-420e-b165-436332838000/1400x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d16a2f1f-a383-4dfa-5e44-37fa00844700/1400x',
            },
            mobile: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/afa85196-4f02-42da-091e-393e63d1c900/828x',
            }
        }
    },
    hair: {
        us: {
            title: 'Like A Virgin',
            subtitle: 'Transform you hair so it feels like a virgin..again!',
            desktop: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0f61851c-a4ed-4f12-4e75-21b0e67c7d00/1140x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/58f7eeb3-0c8d-45ec-4321-cd23eb3d2800/1140x',
            },
            mobile: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4fdd78e9-e970-4764-05e9-6a2d2489fb00/828x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b5e9f771-3abd-404a-9823-de03a738c700/1140x',
            }
        },
        fr: {
            title: 'Like A Virgin',
            subtitle: 'Transform you hair so it feels like a virgin..again!',
            desktop: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b9f3ec91-69b1-4f69-21e6-bcaf9037ed00/1140x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/11df0a91-b8a5-4cfc-ab0a-218feb6c5900/1400x',
            },
            mobile: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/383dbdf2-f7e4-412b-8447-54dbb0984a00/828x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b5e9f771-3abd-404a-9823-de03a738c700/1140x',
            }
        },
        de: {
            title: 'Like A Virgin',
            subtitle: 'Transform you hair so it feels like a virgin..again!',
            desktop: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b9f3ec91-69b1-4f69-21e6-bcaf9037ed00/1140x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d16a2f1f-a383-4dfa-5e44-37fa00844700/1400x',
            },
            mobile: {
                webpBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4fdd78e9-e970-4764-05e9-6a2d2489fb00/828x',
                jpegBanner: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b5e9f771-3abd-404a-9823-de03a738c700/1140x',
            }
        }
    }
    
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