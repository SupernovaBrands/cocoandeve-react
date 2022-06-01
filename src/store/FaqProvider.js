import { useReducer } from "react";
import FaqContext from "./faq-context";

const _content = {
    us: {
        heading: 'Your questions – answered',
        items: [
            {
                title: 'Which Sunny Honey color should I go for?',
                text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. ',
            },
            {
                title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
                text: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br />2. Apply to dry skin, free from moisturisers.<br />3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br />4. Use the Back Tan Applicator to apply the tan evenly across your back.<br />5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br />6. Shower in warm water to remove the guide colour and pat skin dry.<br />7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
            },
            {
                title: 'How often should I self-tan?',
                text: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
            },
            {
                title: 'Can I use Sunny Honey on sensitive skin?',
                text: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts. <br />We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br />Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation. ',
            },
        ],
    },
    uk: {
        heading: 'Your questions – answered',
        items: [
            {
                title: 'Which Sunny Honey color should I go for?',
                text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. ',
            },
            {
                title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
                text: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br />2. Apply to dry skin, free from moisturisers.<br />3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br />4. Use the Back Tan Applicator to apply the tan evenly across your back.<br />5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br />6. Shower in warm water to remove the guide colour and pat skin dry.<br />7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
            },
            {
                title: 'How often should I self-tan?',
                text: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
            },
            {
                title: 'Can I use Sunny Honey on sensitive skin?',
                text: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts. <br />We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br />Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation. ',
            },
        ],
    },
    ca: {
        heading: 'Your questions – answered',
        items: [
            {
                title: 'Which Sunny Honey color should I go for?',
                text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. ',
            },
            {
                title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
                text: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br />2. Apply to dry skin, free from moisturisers.<br />3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br />4. Use the Back Tan Applicator to apply the tan evenly across your back.<br />5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br />6. Shower in warm water to remove the guide colour and pat skin dry.<br />7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
            },
            {
                title: 'How often should I self-tan?',
                text: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
            },
            {
                title: 'Can I use Sunny Honey on sensitive skin?',
                text: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts. <br />We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br />Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation. ',
            },
        ],
    },
    au: {
        heading: 'Your questions – answered',
        items: [
            {
                title: 'Which Sunny Honey color should I go for?',
                text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. ',
            },
            {
                title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
                text: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br />2. Apply to dry skin, free from moisturisers.<br />3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br />4. Use the Back Tan Applicator to apply the tan evenly across your back.<br />5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br />6. Shower in warm water to remove the guide colour and pat skin dry.<br />7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
            },
            {
                title: 'How often should I self-tan?',
                text: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
            },
            {
                title: 'Can I use Sunny Honey on sensitive skin?',
                text: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts. <br />We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br />Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation. ',
            },
        ],
    },
    eu: {
        heading: 'Your questions – answered',
        items: [
            {
                title: 'Which Sunny Honey color should I go for?',
                text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. ',
            },
            {
                title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
                text: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br />2. Apply to dry skin, free from moisturisers.<br />3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br />4. Use the Back Tan Applicator to apply the tan evenly across your back.<br />5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br />6. Shower in warm water to remove the guide colour and pat skin dry.<br />7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
            },
            {
                title: 'How often should I self-tan?',
                text: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
            },
            {
                title: 'Can I use Sunny Honey on sensitive skin?',
                text: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts. <br />We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br />Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation. ',
            },
        ],
    },
    int: {
        heading: 'Your questions – answered',
        items: [
            {
                title: 'Which Sunny Honey color should I go for?',
                text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go. ',
            },
            {
                title: 'How do I apply the Sunny Honey Bali Bronzing Foam?',
                text: '1. Remove unwanted hair and exfoliate thoroughly (ideally 6-24 hours before.)<br />2. Apply to dry skin, free from moisturisers.<br />3. Use Mitt & Brush to apply to tricky areas like the feet, hands, face & ears.<br />4. Use the Back Tan Applicator to apply the tan evenly across your back.<br />5. Allow to develop for a minimum of 2 hours or overnight for a deeper tan.<br />6. Shower in warm water to remove the guide colour and pat skin dry.<br />7. Repeat every 5-7 days or when needed. Moisturise daily to maintain results.',
            },
            {
                title: 'How often should I self-tan?',
                text: "It's completely up to you! When you have decided to re-tan, we recommend removing all of the previous tans and thoroughly exfoliating to get the best results. Tanning at least once a week will ensure you are bronzed beautifully all year round! ",
            },
            {
                title: 'Can I use Sunny Honey on sensitive skin?',
                text: 'Yes, our formula is perfect for all skin types including sensitive skin. It is nourishing, hydrating and contains ingredients that will not clog pores and cause breakouts. <br />We do advise doing a skin patch test before applying a full body tan. If the skin patch test shows no negative signs, it is safe to use a full-body tan.<br />Avoid applying the tan to areas with broken skin or skin which is showing signs of aggravation. ',
            },
        ],
    },
    fr: {
        heading: 'Vos questions - réponses',
        items: [
            {
                title: 'Quelle teinte de Sunny Honney choisir ?',
                text: "L'objectif de l'autobronzant Sunny Honey est d'obtenir un résultat naturel ! Pour choisir la couleur qu'il te faut, tiens compte de ton teint naturel et de l'intensité du hâle que tu souhaites obtenir. <br />Notre teinte Medium donne à la peau un éclat discret. Idéale pour les peaux plus claires !<br/>Notre teinte Dark permet d'obtemir un bronzage digne d'un retour de vacances. Parfaite pour les peaux médiums ! <br/>Opte pour la teinte Ultra Dark si tu as un teint plus hâlé et que tu veux donner encore plus d'éclat à ta peau.<br />Jette un œil à de VRAIS avis ici.",
            },
            {
                title: 'Comment appliquer la Mousse bronzante Sunny Honey ?',
                text: "1. Retire les poils indésirables et exfolie soigneusement ta peau (de préférence 6 à 24 heures avant l'application de l'autobronzant).<br/>2. Applique le produit sur peau sèche, sans crème hydratante.<br/>3. Utilise le gant et le pinceau kabuki pour appliquer le produit sur les zones les plus difficiles comme les pieds, les mains, le visage et les oreilles.<br/>4. Utilise l'applicateur pour le dos pour une applicayion uniforme et sans traces.<br/>5. Laisse poser pendant deux heures minimum, ou tout une nuit pour obtenir un bronzage plus intense.<br/>6. Retire l'excédent de produit sous une douche chaude puis sèche ta peau en la tapotant avec une serviette.<br/>7. Réapplique le produit tous les 5 à 7 jours ou lorsque nécessaire, sans oublier d'hydrater ta peau tous les jours pour prolonger la tenue du bronzage.",
            },
            {
                title: "A quelle fréquence dois-je appliquer l'autobronzant ?",
                text: "C'est à toi de décider ! Lorsque tu as décidé de réappliquer le produit, nous te conseillons de retirer toutes les traces des précédents bronzages et de bien exfolier ta peau pour obtenir le meilleur résultat. Utiliser l'autobronzant au moins une fois par semaine vous permettra d'avoir un beau bronzage toute l'année ! ",
            },
            {
                title: 'Est-ce que je peux utiliser la Mousse de Bronzage Sunny Honey sur une peau sensible ?',
                text: "Oui, notre formule est parfaite pour tous les types de peau, y compris les peaux sensibles. Elle est nourrissante, hydratante et contient des ingrédients qui n'obstruent pas les pores et ne favorisent pas les éruptions cutanées. <br/>Nous te conseillons de faire un test sur la peau avant d'appliquer le produit sur tout le corps. Si le test ne montre aucun signe de réaction allergique, tu peux alors appliquer l'autobronzant en toute sécurité.<br/>Évitez d'appliquer l'autobronzant sur des zones où la peau est abîmée ou fragilisée.",
            },
        ],
    },
    de: {
        heading: 'Deine Fragen – beantwortet',
        items: [
            {
                title: 'Welche Sunny Honey Nuance soll ich auswählen?',
                text: "Sunny Honey Selbstbräuner zielt darauf ab, dir einen natürlichen Finish zu verleihen! Berücksichtige also bei der Auswahl der Nuance, welchen Hautton du von Natur aus hast und wie dunkel du werden möchtest.<br />Der Selbstbräuner in Medium verleiht der Haut einen sonnengeküssten Glow. Super für hellere Hauttöne!<br />Der Selbstbräuner in Dark schenkt dir eine perfekte Urlaubsbräune. Ideal für mittlere Hauttöne!<br />Der Selbstbräuner in Ultra Dark ist für eine tiefe, satte Bräune. Für dunklere Hauttöne!<br /><br />ECHTE Bewertungen findest du hier.",
            },
            {
                title: 'Wie trage ich die Sunny Honey Selbstbräuner Mousse auf?',
                text: '1. Entferne unerwünschte Haare und peele dich gründlich (idealerweise 6-24 Stunden vorher.)<br />2. Auf die trockene, eingecremte Haut auftragen.<br />3. Verwende Bräunungshandschuh & Pinsel zum Auftragen auf schwierige Bereiche wie Füße, Hände, Gesicht und Ohren.<br/>4. Verwende den Bräunungsapplikator für den Rücken, um die Bräune gleichmäßig auf deinen Rücken aufzutragen.<br/>5. Für eine tiefere Bräune mindestens 2 Stunden oder über Nacht einwirken lassen.<br/>6. Dusche in warmem Wasser, um die Führungsfarbe zu entfernen und tupfe deine Haut trocken.<br/>7. Alle 5-7 Tage oder bei Bedarf wiederholen. Täglich eincremen, um die Ergebnisse aufrechtzuerhalten.',
            },
            {
                title: 'Wie oft sollte ich mich selbstbräunen?',
                text: "Es liegt ganz bei dir! Wenn du dich für eine erneute Bräunung entschieden hast, empfehlen wir den vorherigen Selbstbräuner zu entfernen und ein gründliches Peeling durchzuführen, um die besten Ergebnisse zu erzielen. Bräune dich mindestens einmal pro Woche, um sicherzustellen, dass du das ganze Jahr über schön gebräunt bist!",
            },
            {
                title: 'Kann ich Sunny Honey auf empfindlicher Haut verwenden?',
                text: "Ja, unsere Formel ist perfekt für alle Hauttypen, einschließlich empfindlicher Haut. Sie ist nährend, feuchtigkeitsspendend und enthält Inhaltsstoffe, die die Poren nicht verstopfen und Unreinheiten verursachen.<br/>Wir empfehlen, vor dem Auftragen einer Ganzkörperbräune einen Epikutantest durchzuführen. Wenn der Epikutantest keine negativen Anzeichen zeigt, ist es sicher, eine Ganzkörperbräune zu verwenden.<br/>Vermeide es, die Bräune auf Bereiche mit verletzter Haut oder auf Haut aufzutragen, die Anzeichen einer Reizung zeigt.",
            },
        ],
    }
}

const faqReducer = (state, action) => {
    return _content[action.activeStore];
};

const FaqProvider = props => {
    const [faqState, dispatchFaqAction] = useReducer(faqReducer, _content.us);
    const storeChangeHandler = (activeStore) => {
        dispatchFaqAction({type: 'CHANGESTORE', activeStore: activeStore})
    };

    const faqContext = { ...faqState, storeChange: storeChangeHandler };
    

    return (
        <FaqContext.Provider value={faqContext}>
            {props.children}
        </FaqContext.Provider>
    );
};

export default FaqProvider;