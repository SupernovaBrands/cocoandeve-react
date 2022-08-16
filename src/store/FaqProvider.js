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
                    title: 'Comment appliquer le masque capillaire ?',
                    text: "1. Lave tes cheveux comme à ton habitude, idéalement en utilisant un shampooing sans sulfate.<br />2. Répartis uniformément une quantité généreuse de produit sur tes cheveux essorés et démêle-les. <br />3. Laisse agir 5 à 10 minutes puis rince à l'eau tiède.<br />4. Pour les cheveux secs, utilise 2 à 3 fois par semaine, pour les cheveux normaux, 1 à 2 fois par semaine et pour les cheveux gras, une seule fois par semaine. Concentre le produit sur les pointes des cheveux et évite le cuir chevelu !",
                },
                {
                    title: 'Sur quels types de cheveux peut-on utiliser le masque capillaire ?',
                    text: "Notre masque capillaire est sûr et convient à tous les types de cheveux ! <br/><br/>Sa formule est super nourrissante et sera bénéfique pour les cheveux abimés par les colorations, les décolorations, la chaleur, le coiffage et les produits chimiques en les réparant, les nourrissant et les renforçant. Sa formule riche et hydratante ravivera les boucles pour leur redonner du rebond, les démêler et dompter les frisottis !<br/>Si vous souhaitez un look lisse et épuré, notre masque lissera les cheveux rebelles et évitera les pointes fourchues.<br/>Vous pouvez même l'utiliser sur les extensions de cheveux car il est sans sulfates et ne les dessèchera pas.",
                },
                {
                    title: "Comment fonctionnent le Shampooing et l'Après-Shampooing Super Hydratants ?",
                    text: "Notre Shampooing vous donnera les cheveux les plus propres de tous les temps grâce à une formule triple nettoyage sans sulfate utilisant des noix de savon, des enzymes de fruits et de l'huile de coco, pour laver tes cheveux en profondeur sans les assécher. Il boostera instantanément l'hydratation grâce aux extraits de noix de coco, d'avocat et à la technologie ResistHyal™ ; un mélange puissant d'acide hyaluronique pour augmenter l'hydratation de 51% pour plus de douceur, d'éclat et de brillance. <br/><br/>Notre Après-Shampooing donne instantanément des résultats semblables à ceux d'un masque capillaire grâce à sa formule riche qui est 3 fois plus épaisse qu'un après-shampooing ordinaire. Cela permet à la formule de pénétrer profondément et rapidement dans les longueurs en apportant une hydratation sans silicone grâce à la technologie ResistHyal™ qui augmentera l'hydratation de 26 fois. Obtiens des cheveux plus forts et plus longs avec une formule qui démêle instantanément pour moins de casse, tandis que les protéines de pois réparent et réduisent les dommages de 65%.",
                },
                {
                    title: "À quelle fréquence dois-je laver mes cheveux avec le shampooing et l'après-shampooing super hydratants de Coco & Eve ?",
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
    },
    "sunny-honey-bali-bronzing-self-tan-set": {
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
    "deep-condition-bundle": {
        us: {
            heading: 'Your questions - answered',
            items: [
                {
                    title: 'How often should I use each product?',
                    text: '<p><b>Shampoo & Conditioner</b>: There’s no set amount of times you should wash your hair but we generally recommend washing your hair 3-5 times a week or as needed. Depending on your hair type, wash less if you have dry hair and more for oily hair.<br/><b>Hair Masque</b>: For dry hair, use 2-3 times a week. For normal hair, use 1-2 times a week. For oily hair just once a week and focus the product towards the ends of the hair and avoid the scalp!</p>',
                },
                {
                    title: 'Can I use the shampoo for bleached/damaged hair?',
                    text: '<p>Yes, our shampoo is suitable for all hair types. It’s formulated to hydrate, strengthen and soften hair and to replenish hair with moisture from the inside out strengthening, preventing breakage whilst boosting vibrancy of hair color.</p>',
                },
                {
                    title: 'Can I sleep in the Hair Masque ?',
                    text: "<p>Absolutely! If you think your hair is particularly dry, try sleeping in our hair mask. SIMPLY apply the hair mask to damp hair (or apply it to dry hair) and wrap it up with our Microfibre Hair Wrap, or any shower cap or silk scarf that you don’t mind using for this purpose. Rinse out in the morning, and you’ll have silky soft hair!</p>",
                },
                {
                    title: 'Is the Hair Masque okay to use with chemically straightened/dyed hair ?',
                    text: '<p>Yes! It will really benefit hair that is damaged from dyes, heat, styling and chemicals by repairing, nourishing and strengthening it.</p>',
                },
            ],
        },
        fr: {
            heading: 'Vos questions - réponses',
            items: [
                {
                    title: 'À quelle fréquence dois-je utiliser chaque produit ?',
                    text: "<p><b>Shampoing et Après-shampooing</b>: Il n'y a pas de nombre de fois défini pour se laver les cheveux, mais nous recommandons généralement de se laver les cheveux 3 à 5 fois par semaine ou selon tes besoins. Selon ton type de cheveux, lave les moins souvent si tu as les cheveux secs, et plus souvent s' ils sont gras.<br/><b>Puis-je utiliser le shampooing pour les cheveux décolorés / abîmés?</b> Oui, notre shampooing convient à tous les types de cheveux. Il est formulé pour hydrater, renforcer, adoucir et empêcher la casse des cheveux tout en stimulant la vivacité de la couleur.<br/><b>Est-ce que je peux dormir avec le masque sur les cheveux?</b> Tout à fait! Si tu penses que tes cheveux sont particulièrement secs essaie de dormir avec notre masque cheveux. Applique SIMPLEMENT le masque à la fin de ta douche (ou sur cheveux secs) et recouvre tes cheveux avec un bonnet de douche ou notre serviette turban en microfibres. Rince le lendemain matin et tu auras des cheveux tout doux !<br/><b>Le masque peut-il être utilisé sur des cheveux lissés/teints chimiquement?</b> Oui! Ce masque aide à réparer les cheveux abîmés par les teintures, la chaleur, les coiffures et les produits chimiques. Il aura un effet nourrissant et fortifiant.</p>",
                },
                {
                    title: 'Puis-je utiliser le shampooing pour les cheveux décolorés / abîmés ?',
                    text: "<p>Oui, notre shampooing convient à tous les types de cheveux. Il est formulé pour hydrater, renforcer, adoucir et empêcher la casse des cheveux tout en stimulant la vivacité de la couleur.</p>",
                },
                {
                    title: "Est-ce que je peux dormir avec le masque sur les cheveux ?",
                    text: "<p>Tout à fait! Si tu penses que tes cheveux sont particulièrement secs essaie de dormir avec notre masque cheveux. Applique SIMPLEMENT le masque à la fin de ta douche (ou sur cheveux secs) et recouvre tes cheveux avec un bonnet de douche ou notre serviette turban en microfibres. Rince le lendemain matin et tu auras des cheveux tout doux!</p>",
                },
                {
                    title: 'Le masque peut-il être utilisé sur des cheveux lissés/teints chimiquement ?',
                    text: "<p>Oui! Ce masque aide à réparer les cheveux abîmés par les teintures, la chaleur, les coiffures et les produits chimiques. Il aura un effet nourrissant et fortifiant.</p>",
                },
            ],
        },
        de: {
            heading: 'Deine Fragen - beantwortet',
            items: [
                {
                    title: 'Wie often sollte ich die Produkte benutzen?',
                    text: "<p><b>Shampoo & Conditioner</b>: Es gibt keine festgelegten Bedingungen, wie oft du dein Haar waschen solltest, aber wir empfehlen generell, das Haar 3-5 Mal pro Woche oder nach Bedarf zu waschen. Wasche je nach Haartyp bei trockenem Haar weniger und bei fettigem Haar etwas häufiger.<br/><b>Haarmaske</b>: Ein paar Mal pro Woche für eine intensive Pflege.</p>",
                },
                {
                    title: 'Ist das Shampoo auch für sensible und/oder trockene Kopfhaut geeignet?',
                    text: 'Ja, unser Shampoo ist frei von Parabenen, Sulfaten, Silikonen und anderen Schadstoffen! Vollgepackt mit balinesischen Pflanzenstoffen und ResistHyal™ Technologie zur effektiven Reinigung und Feuchtigkeitspflege deiner Haare von der Kopfhaut bis in die Spitzen ohne auszutrocknen oder deine Kopfhaut zu reizen. Ich benutze das Shampoo für gebleichtes/geschädigtes Haar?',
                },
                {
                    title: 'Kann ich die Maske über Nacht im Haar lassen?',
                    text: "Auf jeden Fall! Wenn dein Haar besonders trocken ist, kannst du die Maske gerne über Nacht im Haar lassen. Trage die Maske einfach nach dem Waschen auf die noch feuchten (oder auch trockenen) Haare auf und bedecke sie dann mit einer Duschhaube oder einem alten Seidenschal. Wasche die Maske am nächsten Morgen aus und erfreue dich an seidig schönen Haaren!",
                },
                {
                    title: 'Kann die Haarmaske auch bei chemisch gefärbtem und/oder gebleichtem Haar verwendet werden?',
                    text: "Oh ja! Haare, die durch Farbstoffe, Hitze, Styling und Chemikalien geschädigt wurden, werden davon total profitieren, indem sie repariert, gepflegt und gestärkt werden.",
                },
            ],
        }
    },
    "repairing-restoring-hair-mask": {
        us: {
            heading: 'Your questions - answered',
            items: [
                {
                    title: 'What hair types can you use the hair mask on?',
                    text: '<p>This Sweet Repair range is suitable for all hair types and specifically designed to target damage, dry and weak hair prone to breakage. It can be used for highly damaged hair, dry and easily broken hair requiring more intensive repairing treatment due to chemical, mechanical or heat damage (i.e. frequent hair dye, frequent hair styling, combing, hair straightening, blow drying with high heat, excessive sun exposure).</p>',
                },
                {
                    title: 'How does the Sweet repair hair mask work?',
                    text: '<p>This Sweet Repair mask is designed to target damaged, dry and weak hair prone to breakage. We strongly recommend you to try to out if you have highly damaged hair, or on days where hair is more damaged! It also works incredibly well for dry and easily broken type of hair, requiring more intensive repairing treatment due to chemical, mechanical or heat damage (i.e. frequent hair dye, frequent hair styling, combing, hair straightening, blow drying with high heat, excessive sun exposure). Here is our magical formula, our hair repair powerblend of active ingredients: <br/><br/><b>Biomimetic Ceramides:</b> Reinforce and smooth the hair fiber with the integration of lipids.<br/><b>Vegan Keratin Complex:</b> A plant based chain of amino acids that replicate the performance of keratin to give hair much greater strength and elasticity.<br/><b>Hyaluronic Acid:</b> A bio-active ingredient providing hydration, moisture and softness, by tightening the cells of the hair cuticle resulting in volume and shine while avoiding any frizz.<br/><b>Balinese fruits:</b> Banana, avocado, guava, rambutan and our famous raw virgin coconut. Loaded with minerals, nutrients, amino acids and antioxidants to deeply nourish.</p>',
                },
                {
                    title: 'How do I apply the hair mask?',
                    text: "<p>1. Shampoo your hair as normal, ideally using a sulfate-free shampoo.<br/>2. Evenly distribute a generous amount of product to your towel-dried hair and brush through with the tangle tamer.<br/>3. Leave for 5 minutes then rinse with warm water.<br/>4. Frequency:<br/><span style='margin-left:1.15em;'>Dry Hair: Use 2-3 times a week</span><br/><span style='margin-left:1.15em;'>Normal Hair: 1-2 times a week</span><br/><span style='margin-left:1.15em;'>Oily Hair: Once a week</span></p>",
                },
            ],
        },
        fr: {
            heading: 'Vos questions - réponses',
            items: [
                {
                    title: 'Sur quels types de cheveux peut-on utiliser le masque capillaire ?',
                    text: "<p>Notre gamme Sweet Repair est conçue pour cibler les cheveux abîmés, secs et fragilisés, sujets aux cassures. Elle peut être utilisée par des personnes dont les cheveux sont endommagés, ou pour les moments où les cheveux sont plus secs et facilement cassants, nécessitant un traitement réparateur plus intensif, par exemple en raison de dommages chimiques ou thermiques (colorations fréquentes, coiffures, lissage, séchage à haute température, exposition excessive au soleil, etc). Pour les moments quotidiens, les personnes ayant des cheveux normaux ou moins abîmés peuvent utiliser notre masque Like a Virgin qui restaure également l'hydratation et lisse les cheveux pour faciliter leur manipulation quotidienne. </p>",
                },
                {
                    title: 'Comment fonctionne le masque capillaire Sweet Repair ?',
                    text: "<p>Le masque Sweet Repair est conçu pour cibler les cheveux endommagés, secs et fragilisés, ou sujets à la casse. Nous te recommandons vivement de l'essayer si tu as des cheveux très abîmés, ou bien pendant les périodes où tes cheveux sont fragilisés ! Notre masque fonctionne aussi incroyablement bien sur les cheveux secs et facilement cassants, nécessitant un traitement réparateur intensif en raison de dommages chimiques ou thermiques (par exemple, des colorations fréquentes, un coiffage fréquent, le lissage des cheveux, le séchage à haute température, une exposition excessive au soleil, etc...). <br/>Voici notre formule magique, une mélange puissant d'ingrédients actifs pour réparer tes cheveux en profondeur :<br><br><b>Céramides biomimétiques</b> - Renforcent et lissent la fibre capillaire grâce à l'intégration de lipides.<br/><b>Complexe de kératine vegan</b> - Une chaîne d'acides aminés d'origine végétale qui reproduit les performances de la kératine pour donner aux cheveux beaucoup plus de force et d'élasticité.<br/><b>Acide hyaluronique</b> - un ingrédient bio-actif qui apporte hydratation, souplesse et douceur, en resserrant les cellules de la cuticule du cheveu, ce qui donne volume et brillance, tout en évitant les frisottis. <br/><b>Des fruits venus tout droit de Bali</b> (banane, avocat, goyave, ramboutan et notre célèbre noix de coco) - tous chargés de minéraux, de nutriments, d'acides aminés et d'antioxydants.</p>",
                },
                {
                    title: "Comment dois-je appliquer le masque capillaire ?",
                    text: "<p>1. Lave tes cheveux normalement, en utilisant idéalement un shampoing sans sulfates.<br/>2. Répartit uniformément une quantité généreuse de produit sur tes cheveux essorés et peigne-les.<br/>3. Laisse le masque agir pendant 5 minutes puis rince à l'eau tiède.<br/>4. Cheveux secs : 2 à 3 fois par semaine<br/><span style='margin-left:1.15em;'>Cheveux normaux : 1 à 2 fois par semaine</span><br/><span style='margin-left:1.15em;'>Cheveux gras : une fois par semaine</span></p>",
                },
            ],
        },
        de: {
            heading: 'Deine Fragen - beantwortet',
            items: [
                {
                    title: 'Bei welchen Haartypen kann die Haarmaske verwendet werden?',
                    text: "<p>Die Sweet Repair-Reihe wurde entwickelt, um geschädigtes, trockenes, schwaches und brüchiges Haar zu bekämpfen. Es kann bei stark geschädigtem Haar oder an Tagen verwendet werden, an denen das Haar aufgrund von chemischen-, mechanischen- oder Hitzeschäden stärker belastet, trocken oder leicht brüchig ist und eine intensivere Reparaturbehandlung benötigt (z. B. häufiges Haarfärben, häufiges Frisieren, Kämmen, Haare glätten, Föhnen mit hoher Hitze, übermäßige Sonneneinstrahlung). An anderen Tagen mit normalem oder weniger strapaziertem Haar kannst du unsere Like a Virgin Haarmaske verwenden, die Feuchtigkeit wiederherstellt und das Haar glättet, um es leichter frisierbar zu machen.</p>",
                },
                {
                    title: 'Wie wirkt die Sweet Repair Haarmaske?',
                    text: '<p>Die Sweet Repair Haarmaske wurde entwickelt, um geschädigtes, trockenes, schwaches und brüchiges Haar zu bekämpfen. Wir empfehlen dir dringend, sie auszuprobieren, wenn du stark geschädigtes Haar hast oder an Tagen, an denen dein Haar strapaziert ist! Sie funktioniert auch unglaublich gut für trockenes und leicht brüchiges Haar, das aufgrund von chemischen-, mechanischemn- oder Hitzeschäden eine intensivere Reparaturbehandlung  benötigt (z.B. übermäßige Sonneneinstrahlung). Hier ist unsere Zauberformel, die Haarreparatur Power-Mischung aus aktiven Wirkstoffen:<br/><b>Biomimetische Ceramide</b> - Verstärken und glätten die Haarfaser durch die Einbeziehzung von Lipiden.<br/><b>Veganer Keratin-Komplex</b> - Eine pflanzliche Kette von Aminosäuren, die die Leistung von Keratin nachahmt, um dem Haar viel mehr Kraft und Elastizität zu verleihen.<br/><b>Hyaluronsäure</b> - ist ein bioaktiver Inhaltsstoff, der Hydratation, Feuchtigkeit und Geschmeidigkeit spendet, indem er die Zellen der Haarkutikula strafft, was zu Volumen und Glanz führt, während Frizz vermieden wird.<br/><b>Balinesische Früchte</b> - (Banane, Avocado, Guave, Rambutan und unsere berühmte rohe Kokosnuss) – alle vollgepackt mit Mineralien, Nährstoffen, Aminosäuren und Antioxidantien.</p>',
                },
                {
                    title: 'Wie soll ich die Haarmaske auftragen?',
                    text: "<ol style='padding-left: 1em;'><li>Shampooniere dein Haar wie gewohnt, idealerweise mit einem sulfatfreien Shampoo.</li><li>Verteile eine großzügige Menge des Produkts gleichmäßig auf dein handtuchtrockenes Haar und bürste es mit dem Tangle Tamer durch.</li><li>Fünf Minuten einwirken lassen und dann mit warmem Wasser ausspülen.</li><li>Trockenes Haar: 2-3 Mal pro Woche anwenden<br/>Normales Haar: 1-2 Mal pro Woche<br/>Fettiges Haar: Einmal pro Woche</li></ol>",
                },
            ],
        }
    },
    "shampoo-conditioner-set": {
        us: {
            heading: 'Your questions - answered',
            items: [
                {
                    title: 'How often should I use the Shampoo?',
                    text: '<p>There’s no set amount of times you should wash your hair but we generally recommend washing your hair 3-5 times a week or as needed. Depending on your hair type, wash less if you have dry hair and more for oily hair.</p>',
                },
                {
                    title: 'Can I use the shampoo for bleached/damaged hair?',
                    text: '<p>Yes, our shampoo is suitable for all hair types. It’s formulated to hydrate, strengthen and soften hair and to replenish hair with moisture from the inside out strengthening, preventing breakage whilst boosting vibrancy of hair color.</p>',
                },
                {
                    title: 'How often should I use the Cream Conditioner?',
                    text: "<p>Use after each time you shampoo your hair to strengthen and hydrate your hair.</p>",
                },
                {
                    title: 'Do I need to use the Hair Masque after conditioning?',
                    text: "<p>For best results we recommend using the whole Like A Virgin Hair Range. Use the Scalp Scrub and Hair Masque a few times a week as intense cleansing & nourishing treatments and our Hair Elixir daily to protect from heat, style and maintain hydration levels of your locks.</p>",
                },
            ],
        },
        fr: {
            heading: 'Vos questions - réponses',
            items: [
                {
                    title: 'À quelle fréquence faut-il utiliser le shampoing ?',
                    text: "<p>Il n'y a pas de fréquence précise pour laver tes cheveux. Nous recommandons en général de les laver entre 3 et 5 fois par semaine selon tes besoins. Cela dépend du type de cheveux, lave-les moins souvent s'ils sont secs et plus souvent s'ils sont gras.</p>",
                },
                {
                    title: 'Puis-je utiliser le shampooing sur les cheveux décolorés et/ou endommagés ?',
                    text: "<p>Oui, notre shampooing convient à tous types de cheveux. Sa formule hydrate, renforce et adoucit les cheveux. L'après-shampooing les revitalise en les hydratants de l'intérieur, il les renforce et évite les cassures tout en ravivant la couleur des cheveux.",
                },
                {
                    title: "À quelle fréquence dois-je utiliser l'après-shampoing ?",
                    text: "<p>Après chaque shampoing.</p>",
                },
                {
                    title: "Est-ce que je dois utiliser le masque hydratant après avoir utilisé l'après-shampoing?",
                    text: "<p>Pour obtenir de meilleurs résultats, nous recommandons d'utiliser toute la gamme pour cheveux Like A Virgin. Utilise le scrub lavant purifiant et le masque capillaire plusieurs fois par semaine comme soins nettoyants et nourrissants intenses, et utilise notre élixir pour cheveux quotidiennement pour les protéger de la chaleur, les coiffer et pour maintenir un bon niveau d'hydratation dans ta chevelure.</p>",
                },
            ],
        },
        de: {
            heading: 'Deine Fragen - beantwortet',
            items: [
                {
                    title: 'Wie oft sollte ich das Shampoo verwenden?',
                    text: '<p>Es gibt keine feste Vorgabe wie oft du dein Haar waschen solltest aber wir empfehlen generell das Haar 3-5 mal pro Woche zu waschen oder so oft wie du es für notwendig hältst. Je nach Haartyp empfiehlt es sich dein Haar weniger zu waschen wenn es trocken ist und öfter wenn es ölig ist.</p>',
                },
                {
                    title: 'Ist das Shampoo für gefärbtes/geschädigtes Haar geeignet?',
                    text: '<p>Ja, unser Shampoo eignet sich für alle Haartypen. Es ist so entwickelt, dass es das Haar von innen heraus mit Feuchtigkeit versorgt, es kräftigt und weich macht. Dadurch wird Haarbruch vermieden während die Strahlkraft deiner Haare zum Vorschein kommt.</p>',
                },
                {
                    title: 'Wie oft sollte ich den Conditioner verwenden?',
                    text: "<p>Verwende ihn immer nach dem Shampoonieren um das Haar zu kräftigen und zu pflegen.</p>",
                },
                {
                    title: 'Soll ich die Haarmaske nach dem Conditioner verwenden?',
                    text: "<p>Für die besten Ergebnisse empfehlen wir das gesamte Like A Virgin Haarpflege Sortiment zu verwenden. Verwende den Scalp Scrub und die Haarmaske ein paar Mal pro Woche als intensive Reinigung & nährende Pflege und unser Haar Elixir täglich um dein Haar vor Stylinghitze zu schützen und deinem intensive Pflege zu schenken.</p>",
                },
            ],
        },
    },
    "super-nourishing-coconut-fig-hair-masque": {
        us: {
            heading: 'Your questions - answered',
            items: [
                {
                    title: 'How do I apply the hair mask?',
                    text: "<p>It's simple!<br/>1. Shampoo your hair as normal, ideally using our sulfate-free Super Hydrating Shampoo & Conditioner.<br/>2. Evenly distribute a generous amount of the Hair Masque to your towel-dried hair and brush through with the tangle tamer.<br/>3. Leave for 5 to 10 minutes then rinse with warm water.<br/>4. For dry hair, use 2-3 times a week, for normal hair, 1-2 times a week and for oily hair just once a week and focus the product towards the ends of the hair and avoid the scalp!</p>",
                },
                {
                    title: 'Can I apply the hair mask to dry hair?',
                    text: "<p>Yes! If you’re willing to make a time commitment, apply your mask to dry hair and let it absorb for about 20 minutes or overnight if you feel that your hair is extra thirsty.</p>",
                },
                {
                    title: 'Can I sleep in the hair mask?',
                    text: "<p>Absolutely! If you think your hair is particularly dry, try sleeping in our hair mask. SIMPLY apply the hair mask to damp hair (or apply it to dry hair) and cover with a shower cap or silk scarf that you don’t mind using for this purpose. Rinse out in the morning and you’ll have silky soft hair!</p>",
                },
                {
                    title: 'Is the Hair Masque okay to use with chemically straightened/dyed hair?',
                    text: "<p>Yes! It will really benefit hair that is damaged from dyes, heat, styling and chemicals by repairing, nourishing and strengthening it.</p>",
                },
            ],
        },
        fr: {
            heading: 'Vos questions - réponses',
            items: [
                {
                    title: 'Comment appliquer le masque capillaire ?',
                    text: "<p>1. Shampouine tes cheveux comme d'habitude, en utilisant de préférence un shampoing sans sulfate.<br/>2. Répartis uniformément une quantité généreuse du soin sur tes cheveux préalablement séchés avec une serviette et brosse-les à l'aide de la brosse démêlante.<br/>3. Laisse agir pendant 5 à 10 minutes puis rince tes cheveux à l'eau chaude.<br/>4. Si tes cheveux sont secs, utilise ce soin 2 à 3 fois par semaine, si tes cheveux sont normaux, 1 à 2 fois par semaine et si tes cheveux sont gras, utilise-le seulement une fois par semaine en insistant sur les pointes et en évitant le cuir chevelu !</p>",
                },
                {
                    title: 'Est-ce que je peux appliquer ce masque sur cheveux secs ?',
                    text: "<p>Oui! Si tu veux consacrer un peu plus de temps au soin de tes cheveux, applique ton masque sur cheveux secs et laisse-les l'absorber pendant environ 20 minutes (tu peux le faire le dimanche matin avant de prendre ta douche !) ou pendant une nuit, si tes cheveux sont très secs.</p>",
                },
                {
                    title: 'Est-ce que je peux dormir avec le masque sur les cheveux ?',
                    text: "<p>Tout à fait! Si tu penses que tes cheveux sont particulièrement secs, essaie de dormir avec notre masque capillaire. Applique SIMPLEMENT le masque à la fin de ta douche (ou sur cheveux secs) et recouvre tes cheveux avec un bonnet de douche ou une écharpe en soie qui ne craint rien. Rince le lendemain matin et tu auras des cheveux tout doux !</p>",
                },
                {
                    title: 'Le masque peut-il être utilisé sur des cheveux lissés/teints chimiquement ?',
                    text: "<p>Oui! Ce masque aide à réparer les cheveux abîmés par les teintures, la chaleur, les coiffures et les produits chimiques. Il aura un effet nourrissant et fortifiant.</p>",
                },
            ],
        },
        de: {
            heading: 'Deine Fragen - beantwortet',
            items: [
                {
                    title: 'Wie wende ich die Haarmaske an?',
                    text: '<p>Ganz einfach!<br>1. Wasche deine Haare wie gewohnt, idealerweise mit einem sulfatfreien Shampoo.<br>2. Verteile die Maske gleichmäßig im handtuchtrockenen Haar und bürste es mit dem Tangle Tamer gut durch.<br>3. Lasse die Maske für fünf bis zehn Minuten einwirken und wasche sie dann mit lauwarmen Wasser aus.<br>4. Bei trockenem Haar, benutze die Maske zwei- bis dreimal pro Woche, bei normalem Haar, ein- bis zweimal pro Woche und bei fettigem Haar nur einmal pro Woche. Fokussiere dich beim Auftragen der Maske auf die Spitzen und spare die Kopfhaut aus!</p>',
                },
                {
                    title: 'Kann ich die Maske im trockenen Haar anwenden?',
                    text: '<p>Ja! Wenn du Zeit hast, trage die Maske aufs trockene Haar auf und lasse sie für 20 Minuten einweichen (Tipp: Das ist eine tolle Aktivität für Sonntagmorgens vor dem Duschen) oder über Nacht, wenn dein Haar sich besonders trocken anfühlt.</p>',
                },
                {
                    title: 'Kann ich die Maske im trockenen Haar anwenden?',
                    text: "<p>Auf jeden Fall! Wenn dein Haar besonders trocken ist, kannst du die Maske gerne über Nacht im Haar lassen. Trage die Maske einfach aufs feuchte (oder auch trockene) Haar auf und bedecke die Haare über Nacht dann mit einer Duschhaube oder einem alten Seidenschal. Wasche die Maske am nächsten Morgen aus und freue dich über seidig schöne Haare!</p>",
                },
                {
                    title: 'Wie lange soll die Haarmaske einwirken?',
                    text: "<p>Die Haarmaske sollte fünf bis zehn Minuten einwirken. Für intensivere Ergebnisse kannst du sie gerne etwas länger oder sogar über Nacht einwirken lassen!</p>",
                },
            ],
        },
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
