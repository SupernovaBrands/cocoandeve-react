const Questions = [
    {
        question: {
            en: 'What kind of tan do you want to have?',
            de: 'Welche Bräune möchtest du haben?',
            fr: "Quel type de bronzage souhaitez-vous obtenir?"
        },
        answers: {
            en: [
            'Natural',
            'Sun-kissed and fresh from Holiday',
            'Deep, bronzed, and at least 2 levels darker than my original',
            ],
            de: [
                'Natürlich',
                'Sonnengeküsst und frisch aus dem Urlaub',
                'Tief, gebräunt und mindestens 2 Stufen dunkler als meine original Hautfarbe',
            ],
            fr: [
                'Naturel',
                'Bronzé et fraîchement revenu de vacances',
                'Intense, au moins deux fois plus foncé que mon teint naturel',
            ],
        },
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: {
            en: "What’s your skin tone?",
            de: 'Was ist deine Hautfarbe?',
            fr: 'Quelle est votre carnation ?',
        },
        answers: {
            en:[
            'Fair',
            // 'Light',
            'Medium',
            'Dark',
            ],
            de: [
                'Sehr hell',
                // 'Hell',
                'Mittel',
                'Dunkel',
            ],
            fr: [
                'Très claire',
                // 'Claire',
                'Médium',
                'Foncée',
            ],
        },
        images: [
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5ae2dd27-d9fe-4977-ac17-7f9fed94eb00/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a071a974-5d70-4eb2-1cdf-b3fa5a86ec00/828x',
            },
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8721f91b-8b2a-47c3-90d7-8014886cb400/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/74efb78a-b052-4509-dd77-342afc958a00/828x',
            },
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b46f9838-8997-4f8e-2919-f4d834801500/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b26eec13-744b-4e93-845c-82e785493800/828x',
            },
            {
                jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/44916792-ff79-4c61-e66f-508e0540c800/828x',
                webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/62ec87bb-b9f4-44b7-04a2-eba153bb3900/828x',
            },
        ],
        type: 'SingleChoiceImage',
    },
    {
        question: {
            en: 'Which areas do you want to tan?',
            fr: 'Quelles sont les zones que vous souhaitez bronzer ?',
            de: 'Welche Bereiche möchtest du bräunen?',
        },
        answers: {
            en: [
            'Face',
            'Body',
            'Both',
            ],
            fr: [
                'Visage',
                'Corps',
                'Les deux',
            ],
            de: [
                'Gesicht',
                'Körper',
                'Beides',
            ]
        },
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: {
            en: "Have you used self-tanner before?",
            de: 'Hast du schon mal Selbstbräuner verwendet?',
            fr: "Avez-vous déjà utilisé de l'autobronzant ?",
        },
        answers: {
            en: [
                "Yes, I've tried them all!",
                "I have, I am occasionally tanning with self tanner",
                "No, this would be my first",
            ],
            de: [
                'Ja, ich habe sie alle ausprobiert!',
                'Ja, ich bräune mich gelegentlich mit Selbstbräuner',
                'Nein, das wäre mein erstes Mal',
            ],
            fr: [
                'Oui, je les ai tous testés !',
                "Oui, j'utilise de l'autobronzant de temps en temps.",
                'Non, ce serait la première fois',
            ],
        },
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: {
            en: "What brands are you using right now?",
            fr: "Quelles marques utilisez-vous en ce moment ?",
            de: "Welche Marken verwendest du gerade?",
        },
        answers: {
            en: [
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
            de: [
                {label: 'Coco & Eve', type: 'checkbox'},
                {label: 'Bali Body', type: 'checkbox'},
                {label: 'Bondi Sands', type: 'checkbox'},
                {label: 'b.tan', type: 'checkbox'},
                {label: 'St. Tropez', type: 'checkbox'},
                {label: 'Coola', type: 'checkbox'},
                {label: 'Isle Paradise', type: 'checkbox'},
                {label: 'Tan-Luxe', type: 'checkbox'},
                {label: 'Loving Tan', type: 'checkbox'},
                {label: 'Sonstiges', type: 'input'},
            ],
            fr: [
                {label: 'Coco & Eve', type: 'checkbox'},
                {label: 'Bali Body', type: 'checkbox'},
                {label: 'Bondi Sands', type: 'checkbox'},
                {label: 'b.tan', type: 'checkbox'},
                {label: 'St. Tropez', type: 'checkbox'},
                {label: 'Coola', type: 'checkbox'},
                {label: 'Isle Paradise', type: 'checkbox'},
                {label: 'Tan-Luxe', type: 'checkbox'},
                {label: 'Loving Tan', type: 'checkbox'},
                {label: 'Autre', type: 'input'},
            ]
        },
        caption: {
            en: 'Choose all that apply!',
            de: 'Wähle alle, die zutreffen!',
            fr: "Choisissez toutes les raisons qui vous concernent !",
        },
        type: 'MultipleChoice',
    },
    {
        question: {
            en: "What do you like in a self-tanner?",
            de: 'Was magst du an einem Selbstbräuner?',
            fr: "Qu'est-ce que vous aimez dans un autobronzant ?",
        },
        answers: {
            en: [
                {label: 'Easy application', type: 'checkboxNumber'},
                {label: 'Non-drying', type: 'checkboxNumber'},
                {label: 'No orange tones', type: 'checkboxNumber'},
                {label: 'No bad tan smells', type: 'checkboxNumber'},
                {label: 'Non-sticky, and light weight', type: 'checkboxNumber'},
                {label: 'Vegan and Cruelty-free', type: 'checkboxNumber'},
                {label: "This doesn't apply to me", type: 'checkboxAll'},
            ],
            de: [
                {label: 'Einfache Anwendung', type: 'checkboxNumber'},
                {label: 'Nicht trocknend', type: 'checkboxNumber'},
                {label: 'Keine Orangetöne', type: 'checkboxNumber'},
                {label: 'Keine unangenehmen Bräunungsgerüche', type: 'checkboxNumber'},
                {label: 'Nicht klebrig und leicht', type: 'checkboxNumber'},
                {label: 'Vegan und tierversuchsfrei', type: 'checkboxNumber'},
                {label: "Das trifft auf mich nicht zu", type: 'checkboxAll'},
            ],
            fr: [
                {label: 'Application facile', type: 'checkboxNumber'},
                {label: 'Ne sèche pas', type: 'checkboxNumber'},
                {label: 'Pas de sous-tons orangés', type: 'checkboxNumber'},
                {label: 'Pas de mauvaises senteurs', type: 'checkboxNumber'},
                {label: 'Léger et non collant', type: 'checkboxNumber'},
                {label: 'Vegan et non testé sur les animaux', type: 'checkboxNumber'},
                {label: "Cela ne me concerne pas", type: 'checkboxAll'},
            ]
        },
        caption: {
            en: 'Choose up to 6 in order of priority',
            de: 'Wähle bis zu 6 Antworten in der Reihenfolge deiner Priorität aus',
            fr: "Sélectionnez jusqu'à 6 critères par ordre de priorité",
        },
        type: 'MultipleChoice',
        lastFull: true,
        maxChoose: 6,
        lastDisableForAll: true,
        rule: {
            skipped: true,
            question: 4,
            answer: {
                en: 'No, this would be my first',
                de: 'Nein, das wäre mein erstes Mal',
                fr: 'Non, ce serait la première fois',
            },
        },
    },
    {
        question: {
            en: "Do you like looking tanned?",
            de: "Siehst du gerne gebräunt aus?",
            fr: "Aimez-vous paraître bronzé ?",
        },
        answers: {
            en: [
                "Occasionally",
                "I love a post holiday glow",
                "I am always looking tanned",
            ],
            fr: [
                "De temps en temps",
                "J'aime avoir l'air bronzé après les vacances",
                "Je suis toujours bronzé",
            ],
            de: [
                "Hin und wieder",
                "Ich liebe einen Urlaubs-Glow",
                "Ich sehe immer gebräunt aus",
            ],
        },
        type: 'SingleChoice',
        buttonType: 'full',
    },
    {
        question: {
            en: "What are the reasons you want to use a self-tanner right now?",
            de: "Was sind die Gründe, warum du jetzt einen Selbstbräuner verwenden möchtest?",
            fr: "Quelles sont les raisons qui vous poussent à utiliser un autobronzant en ce moment ?",
        },
        answers: {
            en: [
                {label: 'Holiday', type: 'checkbox'},
                {label: 'Party', type: 'checkbox'},
                {label: 'Workout', type: 'checkbox'},
                {label: 'Better weather', type: 'checkbox'},
                {label: 'Look healthier', type: 'checkbox'},
                {label: 'Even out skin tone', type: 'checkbox'},
                {label: 'Other', type: 'input'},
            ],
            de: [
                {label: 'Urlaub', type: 'checkbox'},
                {label: 'Party', type: 'checkbox'},
                {label: 'Trainieren', type: 'checkbox'},
                {label: 'Besseres Wetter', type: 'checkbox'},
                {label: 'Gesünder aussehen', type: 'checkbox'},
                {label: 'Hautton ausgleichen', type: 'checkbox'},
                {label: 'Sonstiges', type: 'input'},
            ],
            fr: [
                {label: 'Vacances', type: 'checkbox'},
                {label: 'Soirée', type: 'checkbox'},
                {label: "Faire du sport", type: 'checkbox'},
                {label: 'Meilleure météo', type: 'checkbox'},
                {label: "Avoir l'air en meilleure forme", type: 'checkbox'},
                {label: 'Unifier son teint', type: 'checkbox'},
                {label: 'Autre', type: 'input'},
            ],
        },
        type: 'MultipleChoice',
        caption: {
            en: 'Choose all that apply!',
            de: 'Wähle alle, die zutreffen!',
            fr: 'Choisissez toutes les raisons qui vous concernent !',
        },
        lastFull: true,
    },
    {
        question: {
            en: "What's your age?",
            de: "Wie alt bist du?",
            fr: "Quel âge avez-vous ?",
        },
        answers: {
            en: [
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65 up',
            ],
            de: [
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65+',
            ],
            fr: [
            '18-24',
            '25-34',
            '35-44',
            '45-54',
            '55-64',
            '65 up',
            ],
        },
        type: 'SingleChoice',
    },
];

export default Questions;
