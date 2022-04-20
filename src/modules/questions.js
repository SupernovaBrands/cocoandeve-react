const Questions = [
    {
        question: "What kind of tan do you want to have?",
        answers: [
            'Natural',
            'Sun-kissed and fresh from Holiday',
            'Deep, bronzed, and at least 2 levels darker than my original',
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
            'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4a3f10e2-92d0-4b86-ecf6-06f77ea66000/828x',
            'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/df8966f0-29e7-4467-d540-f78393f72b00/828x',
            'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/65ba074e-eee9-4b68-4bae-9ac38a7f8100/828x',
            'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/288d7222-4d99-4452-f313-f51a68654300/828x',
        ],
        type: 'SingleChoiceImage',
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
    {
        question: "Have you used self-tanner before?",
        answers: [
            "Yes, I've tried them all!",
            "I have, I am occasionally tanning with self tanner",
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
        question: "Do you like looking tanned?",
        answers: [
            "Occasionally",
            "I love a post holiday glow",
            "I am always looking tanned",
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
        question: "What's your age?",
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
];

export default Questions;