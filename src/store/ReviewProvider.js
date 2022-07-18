import { useReducer } from "react";
import ReviewContext from "./reviews-context";

const _content = {
    tan: {
        us: {
            heading: 'Customer Reviews',
            asSeenin: 'As seen in',
            reviews: [
                {
                    name: 'Kjersti V. Verified Buyer',
                    shade: 'Shade of Tan: Dark',
                    text: "<p>The BEST sunless tan!!</p><p>Doesn't smell bad like some others, and goes on super smooth. Color is gorgeous, looks natural and doesn't have any orange tint AND makes your skin look soooo healthy. Doesn't leave streaks or blotches and fades perfectly without leaving patches. I love it!!!</p>",
                },
                {
                    name: 'Michelle T. Verified Buyer',
                    shade: 'Shade of Tan: Medium',
                    text: "<p>I'm a huge self tanner</p><p>I'm a huge self tanner user and this is by far the best one I've used. Theres no streaks, leaves you a bronze color and not orange. Smells amazing, easy application obsessed! Can't wait to try the other products.</p>",
                },
                {
                    name: 'Torey M. Verified Buyer',
                    shade: 'Shade of Tan: Dark',
                    text: "<p>Best self tanner I've tried!</p><p>Beautiful natural tan color. Easy to apply although if you have excessively dry skin it will suck up the color in those spots. Applying to feet is a little tricky but nothing you can't get the hang of after a few applications. Smells great too! I love the hair towel and the cute little eye mask!</p>",
                },
                {
                    name: 'Steffanie G. Verified Buyer',
                    shade: 'Shade of Tan: Dark',
                    text: "<p>Wow!</p><p>I have sensitive dry skin and this product changed the way I see my skin now! No dry spots, no Casper white skin! I'm a whole new woman!! I was weary to try it because I haven't had success with other tanning products- but I'm SO happy I did!</p>",
                },
                {
                    name: 'Sadie B. Verified Buyer',
                    shade: 'Shade of Tan: Medium',
                    text: "<p>I am converted!!</p><p>Smell is gorgeous, there's a slight fake tan smell. Colour is perfect. Went for the dark shade and it developed further after a few hours! The first photo was taken immediately after tanning one leg. The second was taken after a few hours and both legs were tanned.</p>",
                },
                {
                    name: 'Alanna P. Verified Buyer',
                    shade: 'Shade of Tan: Dark',
                    text: "<p>Great product!</p><p>It was my first time using any type of self Tanner and I found it super easy to use and smells delicious. The brush is very helpful for the face, hands and feet. It made my cellulite less noticeable and my skin feel moisturized.</p>",
                },
                {
                    name: 'Stef H. Verified Buyer',
                    shade: 'Shade of Tan: Medium',
                    text: "<p>This product is amazing!</p><p>Love the golden glow it gives my skin. Used the medium shade, and I’m at least two shades darker. Such a great way to get the perfect tan without causing skin damage or possible skin cancer. The photo shows the difference between my natural paleness and this amazing product.</p>",
                },
            ],
        },
        fr: {
            heading: 'Commentaires des clients',
            asSeenin: 'Comme on peut le voir dans',
            reviews: [
                {
                    name: 'Kjersti V. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Le MEILLEUR autobronzant !</p><p>Il n'a pas d'odeur désagréable comme d'autres et s'applique très facilement. La teinte est magnifique, naturelle et n'a pas de ton orangé, elle donne à votre peau un bel éclat. Il ne laisse pas de traces ou de marques et s'estompe parfaitement sans laisser de taches. Je l'adore !!!</p>",
                },
                {
                    name: 'Michelle T. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Medium",
                    text: "<p>Je suis une grande fan d'autobronzant</p><p>Je suis une grande adepte de l'autobronzant et celui-ci est de loin le meilleur que j'ai testé. Il ne laisse pas de traces, permet d'obtenir un teint bronzé et non pas orangé. L'odeur est incroyable, l'application est très facile ! J'ai hâte de tester les autres produits.</p>",
                },
                {
                    name: 'Torey M. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Le meilleur autobronzant que j'ai testé !</p><p>Une belle teinte naturelle. Facile à appliquer, mais si vous avez une peau très sèche, la couleur n'adhérera pas aux parties concernées. L'application sur les pieds est un peu plus délicate, mais rien que l'on ne puisse maîtriser après quelques applications. Il sent également très bon ! J'adore la serviette pour les cheveux et le petit masque pour les yeux !</p>",
                },
                {
                    name: 'Steffanie G. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Waouh !</p><p>J'ai une peau sensible et sèche et ce produit a complètement changé ma vision de ma peau ! Pas de zones sèches, pas de peau pâle comme Casper ! Je suis une nouvelle femme ! J'étais réticente à l'idée d'essayer ce produit parce que je n'avais pas eu beaucoup de réussite avec d'autres produits autobronzants, mais je suis tellement heureuse de l'avoir fait !</p>",
                },
                {
                    name: 'Sadie B. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Medium",
                    text: "<p>Je suis convertie !</p><p>L'odeur est géniale, il y a une légère odeur d'autobronzant. La couleur est parfaite. J'ai pris la teinte Dark et elle s'est intensifiée au bout de quelques heures ! La première photo a été prise juste après avoir bronzé une jambe. La seconde a été prise après quelques heures et les deux jambes étaient bronzées.</p>",
                },
                {
                    name: 'Alanna P. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Problèmes de peau : Sécheresse, cellulite</p><p>Super produit !<br/> C'était la première fois que j'utilisais un autobronzant et je l'ai trouvé super facile à appliquer et il sent délicieusement bon. Le pinceau est très utile pour le visage, les mains et les pieds. Ma cellulite est moins visible et ma peau est hydratée.</p>",
                },
                {
                    name: 'Stef H. Acheteur vérifié',
                    shade: "Teinte d'autobronzant: Medium",
                    text: "<p>Ce produit est incroyable !</p><p>J'adore l'éclat doré qu'il donne à mon teint. J'ai utilisé la teinte Medium, et je suis au moins deux nuances plus foncée. C'est une excellente manière d'obtenir un bronzage parfait sans abîmer la peau ou provoquer un éventuel cancer cutané. La photo montre la différence entre ma pâleur naturelle et ce superbe produit.</p>",
                },
            ],
        },
        de: {
            heading: 'Kundenbewertungen',
            asSeenin: 'Empfohlen von',
            reviews: [
                {
                    name: 'Kjersti V. Verifizierter Käufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Die BESTE sonnenlose Bräune!!</p><p>Riecht nicht so übel wie viele andere und macht die Haut super glatt. Die Nuance ist wunderschön, sieht natürlich aus und hat keinen Orangestich UND lässt deine Haut soooo gesund aussehen. Hinterlässt keine Streifen oder Flecken und verblasst perfekt, ohne Flecken zu hinterlassen. Ich liebe es!!!</p>",
                },
                {
                    name: 'Michelle T. Verifizierter Käufer',
                    shade: 'Nuance: Medium',
                    text: "<p>Ich bin ein großer Selbstbräuner-Fan</p><p>Ich habe schon viele Selbstbräuner benutzt und das ist bei weitem der Beste, den ich je verwendet habe. Es gibt keine Streifen, hinterlässt eine bronzene Farbe und macht nicht Orange. Es riecht unglaublich gut und ist einfach anzuwenden. Ich bin besessen von diesem Selbstbräuner! Ich kann es kaum erwarten, die anderen Produkte auszuprobieren.</p>",
                },
                {
                    name: 'Torey M. Verifizierter Käufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Bester Selbstbräuner den ich probiert habe!</p><p>Schöne natürliche Bräunungsfarbe. Einfach aufzutragen, aber wenn du übermäßig trockene Haut hast, wird es die Farbe an diesen Stellen aufsaugen. Das Auftragen auf die Füße ist etwas knifflig, aber nichts, was du nach ein paar Anwendungen nicht beherrschst. Riecht auch toll! Ich liebe das Haartuch und die süße kleine Augenmaske!</p>",
                },
                {
                    name: 'Steffanie G. Verifizierter Käufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Wow!</p><p>Ich habe empfindliche trockene Haut und dieses Produkt hat die Art und Weise verändert, wie ich meine Haut jetzt sehe! Keine trockenen Stellen, keine schneeweiße Haut mehr! Ich bin eine ganz neue Frau!! Ich hatte erst keine Lust den Selbstbräuner auszuprobieren, weil ich mit anderen Bräunungsprodukten keinen Erfolg hatte – aber ich bin SO froh, dass ich es getan habe!</p>",
                },
                {
                    name: 'Sadie B. Verifizierter Käufer',
                    shade: 'Nuance: Medium',
                    text: "<p>Ich bin konvertiert!!</p><p>Der Geruch ist großartig, aber es gibt einen leichten typischen Selbstbräunergeruch. Die Nuance ist perfekt. Ich habe mich für die dunkle Nuance entschieden und die Bräune hat sich schon nach ein paar Stunden entwickelt! Das erste Foto wurde unmittelbar nach dem Bräunen eines meiner Beine aufgenommen. Das Zweite wurde nach ein paar Stunden aufgenommen und beide Beine waren toll gebräunt.</p>",
                },
                {
                    name: 'Alanna P. Verifizierter Käufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Gutes Produkt!</p><p>Es war das erste Mal, dass ich in irgendeiner Art einen Selbstbräuner benutzt habe und ich fand es super einfach anzuwenden und er riecht himmlisch. Der Pinsel ist sehr hilfreich für Gesicht, Hände und Füße. Dadurch war meine Cellulite weniger auffällig und meine Haut fühlte sich mit Feuchtigkeit versorgt an.</p>",
                },
                {
                    name: 'Stef H. Verifizierter Käufer',
                    shade: 'Nuance: Medium',
                    text: "<p>Dieses Produkt ist erstaunlich!</p><p>Ich liebe das goldene Strahlen, das es meiner Haut verleiht. Ich habe den Selbstbräuner in der Nuance Medium verwendet und bin mindestens zwei Nuancen dunkler. Eine großartige Möglichkeit, die perfekte Bräune zu bekommen, ohne Hautschäden oder möglichen Hautkrebs zu verursachen. Das Foto zeigt den Unterschied zwischen meiner natürlichen Blässe und meinem Bräunungsergebniss mit diesem erstaunlichen Produkt.</p>",
                }
            ],
        }
    },
    hair: {
        us: {
            heading: 'Customer Reviews',
            asSeenin: 'As seen in',
            reviews: [
                {
                    name: 'Bianca I. Verified Buyer',
                    shade: '',
                    text: "<p><b>Best!</b></p><p>I love it, my hair really needed some love ! After using it for a few weeks now my hair is now nice and shiny and looks and feels healthy. I now wear my hair down more often ! Also, my order was processed really quickly making this a very good experience :)</p>",
                },
                {
                    name: 'Samantha L. Verified Buyer',
                    shade: '',
                    text: "<p><b>Super soft and smells amazing!</b></p><p>I have very thick, curly hair that has been dyed so as you can imagine that’s the perfect recipe for very dry hair. Since using this hair mask my hair is so much softer and shinier! It smells amazing too! Highly recommended for anyone with dry, thick, curly hair like me!</p>",
                },
                {
                    name: 'Pryncess H. Verified Buyer',
                    shade: '',
                    text: "<p><b>I’m absolutely in love with these products.</b></p><p>Not only does it make my hair look and feel great but the smell is absolutely amazing! I have already re-ordered three times and will continue to do so.</p>",
                },
                {
                    name: 'Yelena A. Verified Buyer',
                    shade: '',
                    text: "<p><b>Smells gorgeous</b></p><p>Smells gorgeous, has made my hair shinier and bouncier. I personally prefer leaving it in after conditioning that way it soaks into my hair and keeps it soft.</p>",
                },
                {
                    name: 'Andy D. Verified Buyer',
                    shade: '',
                    text: "<p><b>In love with this hair masque!</b></p><p>This is the best hair masque I've ever tried. It was so easy to detangle my hair after applying it and my hair has been soft, bouncy, and super hydrated. For the elixir, a little product goes a long way and as described: wonderful for heat protection, hydration, and styling.",
                },
                {
                    name: 'Jeyanthy J. Verified Buyer',
                    shade: '',
                    text: "<p><b>Best ever</b></p><p>Been using this product for past 3 months and there is huge changes. I am pleased to say my hair is shiny and softer. Definitely purchase this product again. Also safe to use as this is a clean product. Such a worth buy to do treatment many times at home.</p>",
                },
                {
                    name: 'Katie D. Verified Buyer',
                    shade: '',
                    text: "<p><b>My hair made a come back</b></p><p>I am obsessed, my frizz is near non-existent and my waves have made a return. I had lost confidence by having damaged hair but since using like a virgin, I have the confidence to let other people touch and admire My hair. I used to think hair masks were just another money making scam and that’s conditioners job anyways, boy was I wrong.</p>",
                },
            ],
        },
        fr: {
            heading: 'Commentaires des clients',
            asSeenin: 'Comme on peut le voir dans',
            reviews: [
                {
                    name: 'Bianca I. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>Le meilleur !</b></p><p>Je l'adore, mes cheveux avaient vraiment besoin d'amour ! Après l'avoir utilisé pendant quelques semaines, mes cheveux sont maintenant beaux et brillants et ont l'air et se sentent en bonne santé. J'ai plus souvent mes cheveux détachés maintenant ! De plus, ma commande a été traitée très rapidement, cela a donc été une très bonne expérience :)</p>",
                },
                {
                    name: 'Samantha L. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>Super doux et sent incroyablement bon !</b></p><p>J'ai des cheveux très épais et bouclés qui ont été colorés, donc comme vous pouvez l'imaginer, le résultat a toujours été des cheveux très secs. Depuis que j'utilise ce masque capillaire, mes cheveux sont tellement plus doux et plus brillants ! Il sent aussi très bon ! Vraiment recommandé pour toute personne ayant des cheveux secs, épais et bouclés comme moi !</p>",
                },
                {
                    name: 'Pryncess H. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>Je suis absolument amoureuse de ces produits.</b></p><p>Non seulement mes cheveux ont l'air et se sentent bien, mais l'odeur est absolument incroyable ! J'ai déjà commandé à nouveau trois fois et je continuerai à le faire.</p>",
                },
                {
                    name: 'Yelena A. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>Odeur super</b></p><p>L'odeur est super, mes cheveux sont plus brillants et plus souples. Personnellement, je préfère le laisser agir après l'après-shampooing, comme ça il pénètre dans mes cheveux et les garde doux.</p>",
                },
                {
                    name: 'Andy D. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>J'adore ce masque capillaire !</b></p><p>C'est le meilleur masque capillaire que j'ai jamais essayé. C’était super facile de démêler mes cheveux après l'avoir appliqué et mes cheveux étaient doux, souples et super hydratés. Pour l'élixir, juste un peu de produit suffit et comme c'est décrit : merveilleux pour la protection contre la chaleur, l'hydratation et le coiffage.",
                },
                {
                    name: 'Jeyanthy J. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>Le meilleur de tous les temps</b></p><p>J'utilise ce produit depuis 3 mois et les changements sont énormes. Je suis heureux de dire que mes cheveux sont brillants et plus doux. Je rachèterai certainement ce produit. Il est également sûr à utiliser car c'est un produit clean. Un achat qui vaut la peine d'être fait pour faire le traitement plusieurs fois à la maison.</p>",
                },
                {
                    name: 'Katie D. Acheteur vérifié',
                    shade: '',
                    text: "<p><b>Mes cheveux sont de retour</b></p><p>Je suis à fond, mes frisottis sont presque inexistants et mes ondulations sont de retour. J'avais perdu confiance en moi en ayant des cheveux abîmés mais depuis que j'utilise la gamme Like A Virgin, j'ai retrouvé la confiance nécessaire pour laisser les autres toucher et admirer mes cheveux. Je pensais que les masques capillaires étaient juste une autre arnaque pour se faire de l'argent et que c'était plutôt le travail des après-shampooings de toute façon, mais j'avais tort.</p>",
                },
            ],
        },
        de: {
            heading: 'Kundenbewertungen',
            asSeenin: 'Empfohlen von',
            reviews: [
                {
                    name: 'Bianca I. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Das beste Produkt!</b></p><p>Ich liebe es, meine Haare brauchten wirklich etwas Liebe! Nachdem ich es ein paar Wochen lang verwendet habe, sind meine Haare jetzt schön und glänzend , sehen gesund aus und fühlen sich auch so an. Ich trage meine Haare jetzt öfter offen! Außerdem wurde meine Bestellung super schnell bearbeitet, also war es eine insgesamt sehr gute Erfahrung :)</p>",
                },
                {
                    name: 'Samantha L. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Super weich und duftet fantastisch!</b></p><p>Ich habe sehr dickes, lockiges Haar, das gefärbt wurde, daher waren meine Ergebnisse, wie du dir vorstellen kannst, immer sehr trocken. Seit ich diese Haarmaske verwende, sind meine Haare so viel weicher und glänzender! Sie riecht auch sehr gut! Definitiv empfehlenswert für alle mit trockenem, dickem und lockigem Haar wie mir!</p>",
                },
                {
                    name: 'Prinzessin H. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Ich bin absolut verliebt in diese Produkte.</b></p><p>Mein Haar sieht nicht nur toll aus und fühlt sich auch so an, es riecht absolut fantastisch! Ich habe bereits dreimal nachbestellt und werde dies auch weiterhin tun.</p>",
                },
                {
                    name: 'Yelena A. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Fantastischer Geruch</b></p><p>Der Duft ist fantastisch, meine Haare sind glänzender und weicher. Ich persönlich lasse die Haarmaske lieber nach der Spülung einwirken, damit es in mein Haar einzieht und es geschmeidig hält.</p>",
                },
                {
                    name: 'Andy D. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Ich liebe diese Haarmaske!</b></p><p>Das ist die beste Haarmaske, die ich je probiert habe. Es war super einfach, mein Haar nach dem Auftragen zu entwirren und mein Haar fühlte sich weich, voluminös und super hydratisiert an. Für das Elixier reicht schon eine kleine Menge Produkt und wie beschrieben: Wunderbar für Hitzeschutz, Feuchtigkeit und Styling. ",
                },
                {
                    name: 'Jeyanthy J. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Das Beste aller Zeiten</b></p><p>Ich benutze dieses Produkt seit 3 Monaten und die Veränderungen sind enorm. Ich freue mich sagen zu können, dass mein Haar glänzender und weicher ist. Ich werde dieses Produkt auf jeden Fall nachkaufen. Es ist auch sicher in der Anwendung, da es sich um ein Produkt ohne ungesunde Chemikalien handelt. Eine Anschaffung die sich lohnt, um deine Haare professionell zu Hause zu pflegen.</p>",
                },
                {
                    name: 'Katie D. Verifizierte Käuferin',
                    shade: '',
                    text: "<p><b>Meine Haare sind wieder nachgewachsen</b></p><p>Ich bin total überzeugt, mein Frizz ist fast nicht mehr vorhanden und meine Wellen sind zurück. Ich hatte mein Selbstvertrauen verloren, weil ich so kaputtes Haar hatte, aber seit ich die Like A Virgin-Reihe verwende und Leute mein Haare bewundern, fühle ich mich wieder stark. Ich dachte, Haarmasken seien nur ein weiterer Betrug und Conditioner wären viel besser, aber ich habe mich geirrt.</p>",
                },
            ],
        }
    }
}

const reviewReducer = (state, action) => {
    return _content[action.range][action.activeStore];
};

const ReviewProvider = props => {
    const [reviewState, dispatchReviewAction] = useReducer(reviewReducer, _content.tan.us);
    const storeChangeHandler = (activeStore, range) => {
        const validStore = ['us', 'de', 'fr'].indexOf(activeStore) !== -1 ? activeStore : 'us';
        dispatchReviewAction({type: 'CHANGESTORE', activeStore: validStore, range})
    };

    const reviewContext = { ...reviewState, storeChange: storeChangeHandler };


    return (
        <ReviewContext.Provider value={reviewContext}>
            {props.children}
        </ReviewContext.Provider>
    );
};

export default ReviewProvider;
