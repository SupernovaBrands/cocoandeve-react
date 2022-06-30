import { useReducer } from "react";
import IRLContext from "./irl-context";

const irlReviews = {
    tan: {
        us: {
            title: 'Tan Magic IRL',
            on: 'on',
            caption1: 'Bali Bronzing Foam (Dark)',
            review1: 'wearing @cocoandeve sunny honey bali bronzing foam in shade dark. Since not being able to go away and catch a natural tan, this has been a life saver, the smell is incredible (tropical mango and guave scent 🌴😻) it’s 100% vegan, toxin-free and cruelty free',
            caption2: 'Bali Bronzing Foam (Dark)',
            review2: 'Nothing better than a fresh tan to boost your confidence. I have been using @cocoandeve Sunny Honey Bali Bronzing foam in dark to keep a natural glow this winter, it’s super easy to apply and quick so it never feels like a chore. It has an amazing scent of Balinese Mango and Guava, 100% vegan, toxin-free, cruelty free, and gives you an olive colour (no orange vibes over here)!',
            caption3: 'Bali Bronzing Foam (Utra Dark)',
            review3: 'The perfect tan! Free of sulfate, toxins, silicones, parabens and other harmful chemicals. I use the Tanning Goddess Kit is Ultra Dark.',
            caption4: 'Bali Bronzing Foam (Dark)',
            review4: 'Just tried @cocoandeve bronzing foam!!! And I’m obsessed! 🤍',
        },
        fr: {
            title: 'La réelle magie du Bronzage',
            on: 'sur',
            caption1: 'Sunny Honey Mousse de bronzage (Dark)',
            review1: 'J\'utilise la Mousse de bronzage Sunny Honey de @cocoandeve en teinte Dark. Puisque je ne peux pas voyager et obtenir un bronzage naturel, celle-ci m\'a vraiment sauvé, l\'odeur est incroyable (parfum tropical de mangue et de goyave 🌴😻) elle est 100% végan, sans toxines et non testée sur les animaux.',
            caption2: 'Sunny Honey Mousse de bronzage (Dark)',
            review2: 'Rien de tel qu\'un joli bronzage pour reprendre confiance en soi. J\'utilise @cocoandeve  Sunny Honey Mousse de bronzage en teinte Dark pour garder un hâle naturel en hiver, elle est super facile et rapide à appliquer donc ce n\'est jamais une corvée. Elle a un parfum incroyable de mangue et de goyave tropicales, elle est 100% vegan, sans toxines, non testée sur les animaux, et vous donne un teint olive (pas de sous-tons orangés) !',
            caption3: 'Sunny Honey Mousse de bronzage (Utra Dark)',
            review3: 'L\'autobronzant parfait ! Sans sulfates, toxines, silicones, parabènes et autres substances chimiques nocives. J\'utilise le Kit de Bronzage Goddess en teinte Ultra Dark.',
            caption4: 'Sunny Honey Mousse de bronzage (Dark)',
            review4: 'Je viens de tester la Mousse de Bronzage @cocoandeve !!! Et je l\'adore déjà ! 🤍',
        },
        de: {
            title: 'Bräunungs-Magie IRL',
            on: 'auf',
            caption1: 'Selbstbräuner Mousse (Dark)',
            review1: 'Ich trage @cocoandeve Sunny Honey Selbstbräuner Mousse in der Nuance Dark. Da ich nicht in den Urlaub fliegen und eine natürliche Bräune bekommen konnte, war das mein Lebensretter, der Geruch ist unglaublich (tropische Mango und Guave🌴😻), es ist 100% vegan, frei von Toxinen und Tierversuchen',
            caption2: 'Selbstbräuner Mousse (Dark)',
            review2: 'Nichts ist besser als eine frische Bräune, um dein Selbstvertrauen zu stärken. Ich habe die @cocoandeve Sunny Honey Selbstbräuner Mousse in Dark verwendet, um letzten Winter einen natürlichen Glow zu erhalten. Sie lässt sich super einfach und schnell auftragen, sodass sich das bräunen nie wie eine lästige Pflicht anfühlt. Sie hat einen großartigen Duft nach balinesischer Mango und Guave, ist 100% vegan, frei von Toxinen, frei von Tierversuchen und verleiht dir eine olivfarbene Haut (hier gibt es keine orangen Vibes)!',
            caption3: 'Selbstbräuner Mousse (Utra Dark)',
            review3: 'Die perfekte Bräune! Frei von Sulfaten, Toxinen, Silikonen, Parabenen und anderen schädlichen Chemikalien. Ich benutze das Set für himmlische Bräune in Ultra Dark.',
            caption4: 'Selbstbräuner Mousse (Dark)',
            review4: 'Hab gerade die @cocoandeve Selbstbräuner Mousse ausprobiert!!! Und ich bin besessen!',
        }
    },
    hair: {
        us: {
            title: 'Like A Virgin Results IRL',
            on: 'on',
            caption1: 'Like A Virgin Hair Masque',
            review1: 'Tried the Like a Virgin Hair Mask from @cocoandeve and I have to say it`s great for nourishing and deep conditioning, especially during winter! @thatcurlblog',
            caption2: 'Like A Virgin Hair Masque',
            review2: 'My hair is truely like a virgin again! Growing out my hair has caused it to have split ends and this coupled with how it`s prone to frizz has left it looking like unruly in the past. But after using the mask from @cocoandeve just once, my hair has been transformed. It tamed my hair without weighing it down and has left it looking so silky smooth ✨',
            caption3: 'Like A Virgin Hair Masque',
            review3: 'Having really curly and thick hair, it takes alot to keep my curls looking fresh but @cocoandeve nourishing hair mask is able to do it. It not only deeply conditions my locks but keeps my curls looking tight and defined. Definitely a keeper for all my curly hair girls!',
            caption4: 'Like A Virgin Hair Masque',
            review4: "If you're looking to get healthy and silky hair, the @cocoandeve Like a Virgin hair mask is a must-try! After leaving it on for just 10 minutes in the shower, it left my hair super silky and moisturised. I LOVE the shine it gives my hair and it got rid of all the frizz I usually have 💯",
            caption5: 'Super Hydrating Shampoo & Conditioner Set',
            review5: "@cocoandeve shampoo and conditioner set is the perfect combo for my curly hair. It can get dry and frizzy but with just these two products, my scalp feels moisturised and cleansed and my hair hydrated and frizz-free. My new obsession for sure! ",
            caption6: 'Super Hydrating Shampoo & Conditioner Set',
            review6: "These results are second to none! 💞The new shampoo and conditioner is what I’ll be using from now on🙌🏽🥥✨",
            caption7: 'Super Hydrating Shampoo & Conditioner Set',
            review7: "I have straight hair and it can get greasy fast. When I tried the @cocoandeve shampoo and conditioner togther, I was pleasantly surprised by how clean my scalp and hair felt after using it. It didn't strip my scalp of it's natural oils but moistursed it which I really like! The conditioner worked well for my hair too because it provided the perfect amount of hydration without making it look greasy. Overall, I love it 😍",
            caption8: 'Super Hydrating Shampoo & Conditioner Set',
            review8: "With hair as long as mine, washing it regularly can get tedious. So I like products that clean my scalp throughly wiithout drying out my strands. The @cocoandeve hydrating shampoo and conditioner does exactly this and is a new favourite of mine! ",
        },
        fr: {
            title: 'Résultats de la gamme Like A Virgin',
            on: 'sur',
            caption1: 'Masque capillaire Like A Virgin',
            review1: 'J`ai essayé le masque pour cheveux Like a Virgin de @cocoandeve et je dois dire qu`il est génial pour nourrir et revitaliser en profondeur, surtout en hiver !',
            caption2: 'Masque capillaire Like A Virgin',
            review2: 'Mes cheveux sont vraiment comme vierges à nouveau ! En poussant, mes cheveux ont eu des fourches, ce qui, en plus du fait qu`ils sont sujets aux frisottis, leur a donné un aspect indiscipliné. Mais après avoir utilisé le masque de @cocoandeve juste une fois, mes cheveux ont été transformés. Il a apprivoisé mes cheveux sans les alourdir et les a laissés super soyeux ✨.',
            caption3: 'Masque capillaire Like A Virgin',
            review3: 'Ayant des cheveux très bouclés et épais, il n`est pas facile d`avoir des boucles toujours rebondies, mais le masque capillaire nourrissant @cocoandeve y parvient. Non seulement il conditionne mes cheveux en profondeur, mais il garde mes boucles serrées et définies. C`est un must-have pour toutes les filles aux cheveux bouclés !',
            caption4: 'Masque capillaire Like A Virgin',
            review4: "Si vous cherchez à obtenir des cheveux sains et soyeux, le masque capillaire Like a Virgin de @cocoandeve est à essayer absolument ! Après l'avoir laissé agir pendant seulement 10 minutes sous la douche, mes cheveux sont devenus super soyeux et hydratés. J'ADORE la brillance qu'il donne à mes cheveux et il m'a débarrassé de tous les frisottis que j'ai habituellement 💯.",
            caption5: 'Set Shampoing et Après-shampoing Super Hydratants',
            review5: "Le duo shampoing et après-shampoing @cocoandeve est la combinaison parfaite pour mes cheveux bouclés. Ils sont de nature secs et crépus mais avec ces deux produits, mon cuir chevelu est hydraté et nettoyé et mes cheveux sont hydratés et sans frisottis. C'est ma nouvelle obsession !  ",
            caption6: 'Set Shampoing et Après-shampoing Super Hydratants',
            review6: "Ces résultats sont inégalables ! 💞Le nouveau shampoing et après-shampoing est ce que j'utiliserai à partir de maintenant🙌🏽🥥✨",
            caption7: 'Set Shampoing et Après-shampoing Super Hydratants',
            review7: "J'ai les cheveux raides et ils peuvent vite devenir gras. Lorsque j'ai essayé le shampooing et l'après-shampooing @cocoandeve, j'ai été agréablement surprise par la propreté de mon cuir chevelu et de mes cheveux après leur utilisation. Il n'a pas rendu mon cuir chevelu sec du tout, au contraire l'a hydraté, ce que j'aime beaucoup ! L'après-shampooing a également bien fonctionné pour mes cheveux, car il a apporté la quantité parfaite d'hydratation sans les rendre gras. J'adore 😍",
            caption8: 'Set Shampoing et Après-shampoing Super Hydratants',
            review8: "Avec des cheveux aussi longs que les miens, les laver régulièrement peut devenir fastidieux. J'aime donc les produits qui nettoient mon cuir chevelu à fond sans dessécher mes longueurs. Le shampoing et l'après-shampoing hydratants de @cocoandeve font exactement cela et ce sont mes nouveaux favoris ! ",
        },
        de: {
            title: 'Die echten Like A Virgin Ergebnisse ',
            on: 'auf',
            caption1: 'Like A Virgin Haarmaske',
            review1: 'Ich habe die Like a Virgin Haarmaske von @cocoandeve ausprobiert und ich muss sagen, sie ist großartig für tiefenwirksame Pflege, besonders im Winter!',
            caption2: 'Like A Virgin Haarmaske',
            review2: 'Meine Haare sind wie neu! Als ich meine Haare lang wachsen lies, bekam es Spliss, was sie nicht nur anfällig für Frizz machte, sondern mir auch ein widerspenstiges Aussehen verlieh. Aber nachdem ich die Haarmaske von @cocoandeve nur einmal benutzt hatte, waren meine Haare wie verwandelt. Es hat meine Haare gebändigt ohne sie zu beschweren und sie super weich gemacht ✨.',
            caption3: 'Like A Virgin Haarmaske',
            review3: 'Bei sehr lockigem und dickem Haar ist es nicht immer einfach, dass meine Locken frisch und gepflegt aussehen, aber die Haarmaske von @cocoandeve schafft es. Es pflegt nicht nur mein Haar tief, sondern hält meine Locken straff und definiert. Ein Muss für alle curly girls!',
            caption4: 'Like A Virgin Haarmaske',
            review4: "Wenn du gesundes, seidiges Haar erhalten möchtest, ist die Like a Virgin Haarmaske von @cocoandeve Pflicht! Nachdem ich sie nur 10 Minuten unter der Dusche einwirken ließ, fühlten sich meine Haare super seidig und mit Feuchtigkeit versorgt an. Ich LIEBE den Glanz, den es meinem Haar verleiht, und es hat all den Frizz beseitigt, das ich normalerweise habe 💯.",
            caption5: 'Super Pflegendes Shampoo und Conditioner Set',
            review5: "Das @cocoandeve Shampoo und Conditioner Duo ist die perfekte Kombination für mein lockiges Haar. Sie sind von Natur aus trocken und kraus, aber mit diesen beiden Produkten wird meine Kopfhaut mit Feuchtigkeit versorgt und gereinigt und frei von lästigem Frizz. Ich bin total süchtig danach!",
            caption6: 'Super Hydrating Shampoo & Conditioner Set',
            review6: "Diese Ergebnisse sind unübertroffen! 💞Das neue Shampoo und die neue Spülung werde ich ab jetzt immer verwenden🙌🏽🥥✨",
            caption7: 'Super Pflegendes Shampoo und Conditioner Set',
            review7: "Ich habe glattes Haar und es kann schnell fettig werden. Als ich das @cocoandeve Shampoo und Conditioner ausprobierte, war ich angenehm überrascht, wie sauber meine Kopfhaut und mein Haar nach der Anwendung waren. Es hat meine Kopfhaut überhaupt nicht ausgetrocknet, im Gegenteil, es hat sie mit Feuchtigkeit versorgt, was ich sehr mag! Der Conditioner hat auch gut für mein Haar funktioniert, da er die perfekte Menge an Feuchtigkeit spendet, ohne es fettig aussehen zu lassen. Ich liebe es 😍",
            caption8: 'Super Pflegendes Shampoo und Conditioner Set',
            review8: "Bei so langen Haaren wie meinen kann regelmäßiges Waschen anstrengend werden. Deshalb mag ich Produkte, die meine Kopfhaut gründlich reinigen, ohne meine Locken auszutrocknen. Das feuchtigkeitsspendende Shampoo und der Conditioner von @cocoandeve tun genau das und sind deshalb meine neuen Favoriten! ",
        }
    }
};

const irlReducer = (state, action) => {
    return irlReviews[action.range][action.activeStore];
};

const IRLProvider = props => {
    const [irlState, dispatchIRLAction] = useReducer(irlReducer, irlReviews.us);
    const storeChangeHandler = (activeStore, range) => {
		const store = ['us', 'fr', 'de'].includes(activeStore) ? activeStore : 'us';
        dispatchIRLAction({type: 'CHANGESTORE', activeStore: store, range})
    };

    const irlContext = { ...irlState, storeChange: storeChangeHandler };


    return (
        <IRLContext.Provider value={irlContext}>
            {props.children}
        </IRLContext.Provider>
    );
};

export default IRLProvider;
