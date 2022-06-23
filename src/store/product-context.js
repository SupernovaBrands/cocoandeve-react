import React from "react";

const ProductContext = React.createContext({
    price: '',
    compareAtPrice: '',
    saving: '',
    title1: 'Sunny Honey',
    title2: 'Bali Bronzing Bundle',
    description: 'The only self-tanner you need ever need. <br />100% Natural DHA. Cruelty Free. Vegan.',
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
        medium: '',
        dark: '',
        ultra: '',
    },
    storeChange: (activeStore) => {},
});

export default ProductContext;