import { useReducer } from "react";
import FaqContext from "./faq-context";

const _content = {
    tan: {
        us: {
            heading: 'Your questions – answered',
            items: [
                {
                    title: 'Which Sunny Honey color should I go for?',
                    text: 'Sunny Honey Self-Tan aims to get you a natural finish! So when choosing which colour to go for, consider what skin tone you are naturally and how dark you would like to go.<br/> Medium self-tan gives skin a sun-kissed glow. Great for lighter skin tones!<br/>Dark self-tan for a back from vacay bronze. Ideal for medium skin tones!<br/>Ultra Dark for a deep, rich tan. For deeper skin tones!<br/><br/>Check out REAL Reviews <a href="https://www.cocoandeve.com/pages/reviews">here</a>.',
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
                    text: "L'objectif de l'autobronzant Sunny Honey est d'obtenir un résultat naturel ! Pour choisir la couleur qu'il te faut, tiens compte de ton teint naturel et de l'intensité du hâle que tu souhaites obtenir. <br />Notre teinte Medium donne à la peau un éclat discret. Idéale pour les peaux plus claires !<br/>Notre teinte Dark permet d'obtemir un bronzage digne d'un retour de vacances. Parfaite pour les peaux médiums ! <br/>Opte pour la teinte Ultra Dark si tu as un teint plus hâlé et que tu veux donner encore plus d'éclat à ta peau.<br />Jette un œil à de VRAIS avis <a href='https://www.cocoandeve.com/pages/reviews'>ici</a>.",
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
                    text: "Sunny Honey Selbstbräuner zielt darauf ab, dir einen natürlichen Finish zu verleihen! Berücksichtige also bei der Auswahl der Nuance, welchen Hautton du von Natur aus hast und wie dunkel du werden möchtest.<br />Der Selbstbräuner in Medium verleiht der Haut einen sonnengeküssten Glow. Super für hellere Hauttöne!<br />Der Selbstbräuner in Dark schenkt dir eine perfekte Urlaubsbräune. Ideal für mittlere Hauttöne!<br />Der Selbstbräuner in Ultra Dark ist für eine tiefe, satte Bräune. Für dunklere Hauttöne!<br /><br />ECHTE Bewertungen findest du <a href='https://www.cocoandeve.com/pages/reviews'>hier</a>.",
                },
                {
                    title: 'Wie trage ich die Sunny Honey Selbstbräuner Mousse auf?',
                    text: '1. Entferne unerwünschte Haare und peele dich gründlich (idealerweise 6-24 Stunden vorher.)<br />2. Auf die trockene, eingecremte Haut auftragen.<br />3. Verwende Bräunungshandschuh & Pinsel zum Auftragen auf schwierige Bereiche wie Füße, Hände, Gesicht und Ohren.<br/>4. Verwende den Bräunungsapplikator für den Rücken, um die Bräune gleichmäßig auf deinen Rücken aufzutragen.<br/>5. Für eine tiefere Bräune mindestens 2 Stunden oder über Nacht einwirken lassen.<br/>6. Dusche in warmem Wasser, um die Führungsfarbe zu entfernen und tupfe deine Haut trocken.<br/>7. Alle 5-7 Tage oder bei Bedarf wiederholen. Täglich eincremen, um die Ergebnisse aufrechtzuerhalten.',
                },
                {
                    title: 'Wie oft sollte ich mich selbstbräunen?',
                    text: "Es liegt ganz bei dir! Wenn du dich für eine erneute Bräunung entschieden hast, empfehlen wir den vorherigen Selbstbräuner zu entfernen und ein gründliches Peeling durchzuführen, um die besten Ergebnisse zu erzielen. Bräune dich mindestens einmal pro Woche, wenn du sicherstellen willst, dass du das ganze Jahr über schön gebräunt bist!",
                },
                {
                    title: 'Kann ich Sunny Honey auf empfindlicher Haut verwenden?',
                    text: "Ja, unsere Formel ist perfekt für alle Hauttypen, einschließlich empfindlicher Haut. Sie ist nährend, feuchtigkeitsspendend und enthält Inhaltsstoffe, die die Poren nicht verstopfen und Unreinheiten verursachen.<br/>Wir empfehlen, vor dem Auftragen einer Ganzkörperbräune einen Hautverträglichkeitstest durchzuführen. Wenn der Hautverträglichkeitstest keine negativen Anzeichen zeigt, ist es sicher, eine Ganzkörperbräune zu verwenden.<br/>Vermeide es, die Bräune auf Bereiche mit verletzter Haut oder auf Haut aufzutragen, die Anzeichen einer Reizung zeigt.",
                },
            ],
        }
    },
    hair: {
        us: {
            heading: 'Your questions - answered',
            items: [
                {
                    title: 'How do I apply the hair masque?',
                    text: '<p>1. Shampoo your hair as normal, ideally using a sulfate-free shampoo.<br>2. Evenly distribute a generous amount of product to your towel-dried hair and brush through with the tangle tamer.<br>3. Leave for 5 to 10 minutes then rinse with warm water.<br>4. For dry hair, use 2-3 times a week, for normal hair, 1-2 times a week and for oily hair just once a week and focus the product towards the ends of the hair and avoid the scalp!</p>',
                },
                {
                    title: 'What hair types can you use the hair mask on?',
                    text: '<p>Our hair masque is safe and suitable for all hair types! <br /><br />Its formula is super nourishing and will benefit damaged hair from dyes, bleaching, heat, styling and chemicals by repairing, nourishing and strengthening it. Its rich, hydrating formula will revive curls to bring their bounce back, detangle and tame frizz! If you want a smooth, sleek look our masque will smooth flyaways and prevent split ends. You can even use it on hair extensions as it is sulfate free and will not dry them out.</p>',
                },
                {
                    title: 'How does the Super Hydrating Shampoo & Cream Conditioner work?',
                    text: "<p>Our Shampoo will give you the cleanest hair ever thanks to a sulfate free, triple cleansing formula using Soap Nuts, Fruit Enzymes & Coconut Oil to thoroughly wash your locks without over-drying hair. It will instantly boost your hair's hydration thanks to Coconut, Avocado & ResistHyal™ technology; a powerblend of Hyaluronic Acid to increase moisture by 51% for more softness, smoothness & gloss. <br/ ><br/ >Our Conditioner gives instant hair mask like results thanks to its rich formula that is 3 times thicker than a regular conditioner. This allows the formula to deeply and quickly penetrate strands delivering silicone-free hydration from ResistHyal™ technology which will increase hydration by 26 times. Get stronger, longer hair with a formula that instantly detangles for less breakage whilst pea proteins repair & reduce damage by 65%.</p>",
                },
                {
                    title: 'How often should I wash my hair with the Coco & Eve Super Hydrating Shampoo & Conditioner?',
                    text: '<p>Our Shampoo can be used daily for frequent cleansing & hydration. <br />We recommend to use our Conditioner 3/4 times weekly.</p>',
                },
            ],
        },
        fr: {
            heading: 'Vos questions - réponses',
            items: [
                {
                    title: 'Comment appliquer le masque capillaire?',
                    text: "1. Lave tes cheveux comme à ton habitude, idéalement en utilisant un shampooing sans sulfate.<br />2. Répartis uniformément une quantité généreuse de produit sur tes cheveux essorés et démêle-les. <br />3. Laisse agir 5 à 10 minutes puis rince à l`eau tiède.<br />4. Pour les cheveux secs, utilise 2 à 3 fois par semaine, pour les cheveux normaux, 1 à 2 fois par semaine et pour les cheveux gras, une seule fois par semaine. Concentre le produit sur les pointes des cheveux et évite le cuir chevelu !",
                },
                {
                    title: 'Sur quels types de cheveux peut-on utiliser le masque capillaire?',
                    text: "Notre masque capillaire est sûr et convient à tous les types de cheveux ! <br/><br/>Sa formule est super nourrissante et sera bénéfique pour les cheveux abimés par les colorations, les décolorations, la chaleur, le coiffage et les produits chimiques en les réparant, les nourrissant et les renforçant. Sa formule riche et hydratante ravivera les boucles pour leur redonner du rebond, les démêler et dompter les frisottis !<br/>Si vous souhaitez un look lisse et épuré, notre masque lissera les cheveux rebelles et évitera les pointes fourchues.<br/>Vous pouvez même l'utiliser sur les extensions de cheveux car il est sans sulfates et ne les dessèchera pas.",
                },
                {
                    title: "Comment fonctionnent le Shampooing et l'Après-Shampooing Super Hydratants?",
                    text: "Notre Shampooing vous donnera les cheveux les plus propres de tous les temps grâce à une formule triple nettoyage sans sulfate utilisant des noix de savon, des enzymes de fruits et de l'huile de coco, pour laver tes cheveux en profondeur sans les assécher. Il boostera instantanément l'hydratation grâce aux extraits de noix de coco, d'avocat et à la technologie ResistHyal™ ; un mélange puissant d'acide hyaluronique pour augmenter l'hydratation de 51% pour plus de douceur, d'éclat et de brillance. <br/><br/>Notre Après-Shampooing donne instantanément des résultats semblables à ceux d'un masque capillaire grâce à sa formule riche qui est 3 fois plus épaisse qu'un après-shampooing ordinaire. Cela permet à la formule de pénétrer profondément et rapidement dans les longueurs en apportant une hydratation sans silicone grâce à la technologie ResistHyal™ qui augmentera l'hydratation de 26 fois. Obtiens des cheveux plus forts et plus longs avec une formule qui démêle instantanément pour moins de casse, tandis que les protéines de pois réparent et réduisent les dommages de 65%.",
                },
                {
                    title: 'À quelle fréquence dois-je laver mes cheveux avec le shampooing et l`après-shampooing super hydratants de Coco & Eve?',
                    text: "Notre shampooing peut être utilisé quotidiennement pour un nettoyage et une hydratation fréquents. <br/>Nous recommandons d'utiliser notre après-shampooing 3/4 fois par semaine.",
                },
            ],
        },
        de: {
            heading: 'Deine Fragen - beantwortet',
            items: [
                {
                    title: 'Wie wende ich die Haarmaske an?',
                    text: "1. Wasche deine Haare wie gewohnt, am besten mit einem sulfatfreien Shampoo.<br/>2. Verteile eine großzügige Menge des Produkts gleichmäßig auf deinem handtuchtrockenen Haar und entwirre es mit einem Kamm.<br/>3. 5 bis 10 Minuten einwirken lassen und dann mit lauwarmem Wasser ausspülen.<br/>4. Bei trockenem Haar 2-3 Mal pro Woche anwenden, bei normalem Haar 1-2 Mal pro Woche und bei fettigem Haar nur einmal pro Woche. Trage das Produkt nur auf die Haarspitzen auf und vermeide die Kopfhaut!",
                },
                {
                    title: 'Bei welchen Haartypen kannst du die Haarmaske verwenden?',
                    text: 'Unsere Haarmaske ist sicher und für alle Haartypen geeignet!<br/>Ihre Formel ist super pflegend und wird, durch Färben, Bleichen, Hitze, Styling und Chemikalien geschädigtes Haar profitieren, indem es repariert, genährt und gestärkt wird.<br/>Seine reichhaltige, feuchtigkeitsspendende Formel wird Locken wiederbeleben, um ihre Sprungkraft zurückzubringen, zu entwirren und Frizz zu bändigen!<br/>Wenn du dir einen glatten, geschmeidigen Look wünschst, dann hilft dir unsere Haarmaske Frizz und Spliss vorzubeugen.<br/>Du kannst es sogar für Haarverlängerungen verwenden, da es sulfatfrei ist und sie nicht austrocknet.',
                },
                {
                    title: 'Wie funktioniert das Super Pflegende Shampoo & Conditioner Duo?',
                    text: "Unser Shampoo verleiht dir das sauberste Haar aller Zeiten, dank einer sulfatfreien Dreifach-Reinigungsformel mit Waschnüssen, Fruchtenzymen und Kokosnussöl, um deine Locken gründlich zu waschen, ohne das Haar zu stark auszutrocknen. Avocado & ResistHyal™-Technologie; eine leistungsstarke Mischung aus Hyaluronsäure zur Erhöhung der Feuchtigkeit um 51% für mehr Weichheit, Geschmeidigkeit und Glanz.<br/><br/> Unser Conditioner liefert sofort haarmaskenähnliche Ergebnisse mit seiner reichhaltigen Formel, die dreimal dicker ist als herkömmliche Conditioner. Dadurch dringt die Formel tief und schnell in die Strähnen ein und liefert eine silikonfreien Feuchtigkeitsboost durch die ResistHyal™-Technologie für 26x mehr Feuchtigkeit. Erhalte kräftigeres, längeres Haar mit einer Formel, die sofort entwirrt und weniger Haarbruch verursacht, während Erbsenproteine reparieren und Schäden um 65% reduzieren.",
                },
                {
                    title: 'Wie oft sollte ich meine Haare mit dem Coco & Eve Super Pflegendem Shampoo & Conditioner Duo waschen?',
                    text: "Unser Shampoo kann täglich zur Reinigung und Pflege verwendet werden. Wir empfehlen, unseren Conditioner 3-4 mal wöchentlich zu verwenden.",
                },
            ],
        }
    }
}

const faqReducer = (state, action) => {
    return _content[action.range][action.activeStore];
};

const FaqProvider = props => {
    const [faqState, dispatchFaqAction] = useReducer(faqReducer, _content.tan.us);
    const storeChangeHandler = (activeStore, range) => {
        const store = ['us', 'fr', 'de'].includes(activeStore) ? activeStore : 'us';
        dispatchFaqAction({type: 'CHANGESTORE', activeStore: store, range})
    };

    const faqContext = { ...faqState, storeChange: storeChangeHandler };


    return (
        <FaqContext.Provider value={faqContext}>
            {props.children}
        </FaqContext.Provider>
    );
};

export default FaqProvider;
