import Countries from './countries';

const Questions = [
    {
        question: "What's your age",
        answers: [
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65 up',
        ],
        type: 'SingleChoice',
    },
    {
        question: "What's your location",
        answers: Countries,
        type: 'CountrySelect',
    },
    {
        question: "Have you used self-tanner before",
        answers: [
            "Yes, I've tried them all!",
            "I have, but i don't always of it",
            "No, this would be my first",
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: "What brands are you using right now?",
        answers: [
            {label: 'Coco & Eve', type: 'checkbox'},
            {label: 'Bali Body', type: 'checkbox'},
            {label: 'Bondi Sands', type: 'checkbox'},
            {label: 'b.tan', type: 'checkbox'},
            {label: 'St. Tropez', type: 'checkbox'},
            {label: 'Coola', type: 'checkbox'},
            {label: 'Isle Paradise', type: 'checkbox'},
            {label: 'Tan-Luxe', type: 'checkbox'},
            {label: 'Loving Tan', type: 'checkbox'},
            {label: 'Other', type: 'input'},
        ],
        caption: 'Multiple choice question',
        type: 'MultipleChoice',
    },
    {
        question: "What do you like in a self-tanner?",
        answers: [
            {label: 'Easy application', type: 'checkboxNumber'},
            {label: 'Non-drying', type: 'checkboxNumber'},
            {label: 'No orange tones', type: 'checkboxNumber'},
            {label: 'No bad tan smells', type: 'checkboxNumber'},
            {label: 'Non-sticky, and light weight', type: 'checkboxNumber'},
            {label: 'Vegan and Cruelty-free', type: 'checkboxNumber'},
            {label: "This doesn't apply to me", type: 'checkboxAll'},
        ],
        caption: 'Choose up to 6 in order of priority',
        type: 'MultipleChoice',
        lastFull: true,
        maxChoose: 6,
        lastDisableForAll: true,
    },
    {
        question: "Do you like looking tan?",
        answers: [
            'No',
            'Sometimes',
            'Yes! Bring on the glow!',
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: "What are the reasons you want to use a self-tanner right now?",
        answers: [
            {label: 'Holiday', type: 'checkbox'},
            {label: 'Party', type: 'checkbox'},
            {label: 'Workout', type: 'checkbox'},
            {label: 'Better weather', type: 'checkbox'},
            {label: 'Look healthier', type: 'checkbox'},
            {label: 'Even out skin tone', type: 'checkbox'},
            {label: 'Other', type: 'input'},
        ],
        type: 'MultipleChoice',
        lastFull: true,
    },
    {
        question: "How much sun does your skin get?",
        answers: [
            "Not much, I'm usually indoors",
            "A fair amount",
            "Everyday! Give me that vitamin D"
        ],
        icons: [
            'cloud-rain.svg',
            '',
            'sun.svg',
        ],
        type: 'RangeSlideIcon',
    },
    {
        question: "What kind of tan do you want to have?",
        answers: [
            'Natural',
            'Sun-kissed and fresh from Bali',
            'Deep, bronzed, and a level darker than my original skin tone',
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: "What’s your skin tone?",
        answers: [
            'Fair',
            'Light',
            'Medium',
            'Dark',
        ],
        images: [
            'images-1',
            'images-2',
            'images-3',
            'images-4',
        ],
        type: 'RangeSlideImages',
    },
    {
        question: "What’s your undertone?",
        answers: [
            'Cool',
            'Neutral',
            'Warm',
        ],
        images: [
            'images-1',
            'images-2',
            'images-3',
        ],
        type: 'RangeSlideImages',
    },
    {
        question: 'Which areas do you want to tan?',
        answers: [
            'Face',
            'Body',
            'Both',
        ],
        type: 'SingleChoice',
        buttonType: 'full',
    },    
];

export default Questions;