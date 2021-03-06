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
                    text: "<p>This product is amazing!</p><p>Love the golden glow it gives my skin. Used the medium shade, and I???m at least two shades darker. Such a great way to get the perfect tan without causing skin damage or possible skin cancer. The photo shows the difference between my natural paleness and this amazing product.</p>",
                },
            ],
        },
        fr: {
            heading: 'Commentaires des clients',
            asSeenin: 'Comme on peut le voir dans',
            reviews: [
                {
                    name: 'Kjersti V. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Le MEILLEUR autobronzant !</p><p>Il n'a pas d'odeur d??sagr??able comme d'autres et s'applique tr??s facilement. La teinte est magnifique, naturelle et n'a pas de ton orang??, elle donne ?? votre peau un bel ??clat. Il ne laisse pas de traces ou de marques et s'estompe parfaitement sans laisser de taches. Je l'adore !!!</p>",
                },
                {
                    name: 'Michelle T. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Medium",
                    text: "<p>Je suis une grande fan d'autobronzant</p><p>Je suis une grande adepte de l'autobronzant et celui-ci est de loin le meilleur que j'ai test??. Il ne laisse pas de traces, permet d'obtenir un teint bronz?? et non pas orang??. L'odeur est incroyable, l'application est tr??s facile ! J'ai h??te de tester les autres produits.</p>",
                },
                {
                    name: 'Torey M. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Le meilleur autobronzant que j'ai test?? !</p><p>Une belle teinte naturelle. Facile ?? appliquer, mais si vous avez une peau tr??s s??che, la couleur n'adh??rera pas aux parties concern??es. L'application sur les pieds est un peu plus d??licate, mais rien que l'on ne puisse ma??triser apr??s quelques applications. Il sent ??galement tr??s bon ! J'adore la serviette pour les cheveux et le petit masque pour les yeux !</p>",
                },
                {
                    name: 'Steffanie G. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Waouh !</p><p>J'ai une peau sensible et s??che et ce produit a compl??tement chang?? ma vision de ma peau ! Pas de zones s??ches, pas de peau p??le comme Casper ! Je suis une nouvelle femme ! J'??tais r??ticente ?? l'id??e d'essayer ce produit parce que je n'avais pas eu beaucoup de r??ussite avec d'autres produits autobronzants, mais je suis tellement heureuse de l'avoir fait !</p>",
                },
                {
                    name: 'Sadie B. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Medium",
                    text: "<p>Je suis convertie !</p><p>L'odeur est g??niale, il y a une l??g??re odeur d'autobronzant. La couleur est parfaite. J'ai pris la teinte Dark et elle s'est intensifi??e au bout de quelques heures ! La premi??re photo a ??t?? prise juste apr??s avoir bronz?? une jambe. La seconde a ??t?? prise apr??s quelques heures et les deux jambes ??taient bronz??es.</p>",
                },
                {
                    name: 'Alanna P. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Dark",
                    text: "<p>Probl??mes de peau : S??cheresse, cellulite</p><p>Super produit !<br/> C'??tait la premi??re fois que j'utilisais un autobronzant et je l'ai trouv?? super facile ?? appliquer et il sent d??licieusement bon. Le pinceau est tr??s utile pour le visage, les mains et les pieds. Ma cellulite est moins visible et ma peau est hydrat??e.</p>",
                },
                {
                    name: 'Stef H. Acheteur v??rifi??',
                    shade: "Teinte d'autobronzant: Medium",
                    text: "<p>Ce produit est incroyable !</p><p>J'adore l'??clat dor?? qu'il donne ?? mon teint. J'ai utilis?? la teinte Medium, et je suis au moins deux nuances plus fonc??e. C'est une excellente mani??re d'obtenir un bronzage parfait sans ab??mer la peau ou provoquer un ??ventuel cancer cutan??. La photo montre la diff??rence entre ma p??leur naturelle et ce superbe produit.</p>",
                },
            ],
        },
        de: {
            heading: 'Kundenbewertungen',
            asSeenin: 'Empfohlen von',
            reviews: [
                {
                    name: 'Kjersti V. Verifizierter K??ufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Die BESTE sonnenlose Br??une!!</p><p>Riecht nicht so ??bel wie viele andere und macht die Haut super glatt. Die Nuance ist wundersch??n, sieht nat??rlich aus und hat keinen Orangestich UND l??sst deine Haut soooo gesund aussehen. Hinterl??sst keine Streifen oder Flecken und verblasst perfekt, ohne Flecken zu hinterlassen. Ich liebe es!!!</p>",
                },
                {
                    name: 'Michelle T. Verifizierter K??ufer',
                    shade: 'Nuance: Medium',
                    text: "<p>Ich bin ein gro??er Selbstbr??uner-Fan</p><p>Ich habe schon viele Selbstbr??uner benutzt und das ist bei weitem der Beste, den ich je verwendet habe. Es gibt keine Streifen, hinterl??sst eine bronzene Farbe und macht nicht Orange. Es riecht unglaublich gut und ist einfach anzuwenden. Ich bin besessen von diesem Selbstbr??uner! Ich kann es kaum erwarten, die anderen Produkte auszuprobieren.</p>",
                },
                {
                    name: 'Torey M. Verifizierter K??ufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Bester Selbstbr??uner den ich probiert habe!</p><p>Sch??ne nat??rliche Br??unungsfarbe. Einfach aufzutragen, aber wenn du ??berm????ig trockene Haut hast, wird es die Farbe an diesen Stellen aufsaugen. Das Auftragen auf die F????e ist etwas knifflig, aber nichts, was du nach ein paar Anwendungen nicht beherrschst. Riecht auch toll! Ich liebe das Haartuch und die s????e kleine Augenmaske!</p>",
                },
                {
                    name: 'Steffanie G. Verifizierter K??ufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Wow!</p><p>Ich habe empfindliche trockene Haut und dieses Produkt hat die Art und Weise ver??ndert, wie ich meine Haut jetzt sehe! Keine trockenen Stellen, keine schneewei??e Haut mehr! Ich bin eine ganz neue Frau!! Ich hatte erst keine Lust den Selbstbr??uner auszuprobieren, weil ich mit anderen Br??unungsprodukten keinen Erfolg hatte ??? aber ich bin SO froh, dass ich es getan habe!</p>",
                },
                {
                    name: 'Sadie B. Verifizierter K??ufer',
                    shade: 'Nuance: Medium',
                    text: "<p>Ich bin konvertiert!!</p><p>Der Geruch ist gro??artig, aber es gibt einen leichten typischen Selbstbr??unergeruch. Die Nuance ist perfekt. Ich habe mich f??r die dunkle Nuance entschieden und die Br??une hat sich schon nach ein paar Stunden entwickelt! Das erste Foto wurde unmittelbar nach dem Br??unen eines meiner Beine aufgenommen. Das Zweite wurde nach ein paar Stunden aufgenommen und beide Beine waren toll gebr??unt.</p>",
                },
                {
                    name: 'Alanna P. Verifizierter K??ufer',
                    shade: 'Nuance: Dark',
                    text: "<p>Gutes Produkt!</p><p>Es war das erste Mal, dass ich in irgendeiner Art einen Selbstbr??uner benutzt habe und ich fand es super einfach anzuwenden und er riecht himmlisch. Der Pinsel ist sehr hilfreich f??r Gesicht, H??nde und F????e. Dadurch war meine Cellulite weniger auff??llig und meine Haut f??hlte sich mit Feuchtigkeit versorgt an.</p>",
                },
                {
                    name: 'Stef H. Verifizierter K??ufer',
                    shade: 'Nuance: Medium',
                    text: "<p>Dieses Produkt ist erstaunlich!</p><p>Ich liebe das goldene Strahlen, das es meiner Haut verleiht. Ich habe den Selbstbr??uner in der Nuance Medium verwendet und bin mindestens zwei Nuancen dunkler. Eine gro??artige M??glichkeit, die perfekte Br??une zu bekommen, ohne Hautsch??den oder m??glichen Hautkrebs zu verursachen. Das Foto zeigt den Unterschied zwischen meiner nat??rlichen Bl??sse und meinem Br??unungsergebniss mit diesem erstaunlichen Produkt.</p>",
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
                    text: "<p><b>Super soft and smells amazing!</b></p><p>I have very thick, curly hair that has been dyed so as you can imagine that???s the perfect recipe for very dry hair. Since using this hair mask my hair is so much softer and shinier! It smells amazing too! Highly recommended for anyone with dry, thick, curly hair like me!</p>",
                },
                {
                    name: 'Pryncess H. Verified Buyer',
                    shade: '',
                    text: "<p><b>I???m absolutely in love with these products.</b></p><p>Not only does it make my hair look and feel great but the smell is absolutely amazing! I have already re-ordered three times and will continue to do so.</p>",
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
                    text: "<p><b>My hair made a come back</b></p><p>I am obsessed, my frizz is near non-existent and my waves have made a return. I had lost confidence by having damaged hair but since using like a virgin, I have the confidence to let other people touch and admire My hair. I used to think hair masks were just another money making scam and that???s conditioners job anyways, boy was I wrong.</p>",
                },
            ],
        },
        fr: {
            heading: 'Commentaires des clients',
            asSeenin: 'Comme on peut le voir dans',
            reviews: [
                {
                    name: 'Bianca I. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>Le meilleur !</b></p><p>Je l'adore, mes cheveux avaient vraiment besoin d'amour ! Apr??s l'avoir utilis?? pendant quelques semaines, mes cheveux sont maintenant beaux et brillants et ont l'air et se sentent en bonne sant??. J'ai plus souvent mes cheveux d??tach??s maintenant ! De plus, ma commande a ??t?? trait??e tr??s rapidement, cela a donc ??t?? une tr??s bonne exp??rience :)</p>",
                },
                {
                    name: 'Samantha L. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>Super doux et sent incroyablement bon !</b></p><p>J'ai des cheveux tr??s ??pais et boucl??s qui ont ??t?? color??s, donc comme vous pouvez l'imaginer, le r??sultat a toujours ??t?? des cheveux tr??s secs. Depuis que j'utilise ce masque capillaire, mes cheveux sont tellement plus doux et plus brillants ! Il sent aussi tr??s bon ! Vraiment recommand?? pour toute personne ayant des cheveux secs, ??pais et boucl??s comme moi !</p>",
                },
                {
                    name: 'Pryncess H. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>Je suis absolument amoureuse de ces produits.</b></p><p>Non seulement mes cheveux ont l'air et se sentent bien, mais l'odeur est absolument incroyable ! J'ai d??j?? command?? ?? nouveau trois fois et je continuerai ?? le faire.</p>",
                },
                {
                    name: 'Yelena A. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>Odeur super</b></p><p>L'odeur est super, mes cheveux sont plus brillants et plus souples. Personnellement, je pr??f??re le laisser agir apr??s l'apr??s-shampooing, comme ??a il p??n??tre dans mes cheveux et les garde doux.</p>",
                },
                {
                    name: 'Andy D. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>J'adore ce masque capillaire !</b></p><p>C'est le meilleur masque capillaire que j'ai jamais essay??. C?????tait super facile de d??m??ler mes cheveux apr??s l'avoir appliqu?? et mes cheveux ??taient doux, souples et super hydrat??s. Pour l'??lixir, juste un peu de produit suffit et comme c'est d??crit : merveilleux pour la protection contre la chaleur, l'hydratation et le coiffage.",
                },
                {
                    name: 'Jeyanthy J. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>Le meilleur de tous les temps</b></p><p>J'utilise ce produit depuis 3 mois et les changements sont ??normes. Je suis heureux de dire que mes cheveux sont brillants et plus doux. Je rach??terai certainement ce produit. Il est ??galement s??r ?? utiliser car c'est un produit clean. Un achat qui vaut la peine d'??tre fait pour faire le traitement plusieurs fois ?? la maison.</p>",
                },
                {
                    name: 'Katie D. Acheteur v??rifi??',
                    shade: '',
                    text: "<p><b>Mes cheveux sont de retour</b></p><p>Je suis ?? fond, mes frisottis sont presque inexistants et mes ondulations sont de retour. J'avais perdu confiance en moi en ayant des cheveux ab??m??s mais depuis que j'utilise la gamme Like A Virgin, j'ai retrouv?? la confiance n??cessaire pour laisser les autres toucher et admirer mes cheveux. Je pensais que les masques capillaires ??taient juste une autre arnaque pour se faire de l'argent et que c'??tait plut??t le travail des apr??s-shampooings de toute fa??on, mais j'avais tort.</p>",
                },
            ],
        },
        de: {
            heading: 'Kundenbewertungen',
            asSeenin: 'Empfohlen von',
            reviews: [
                {
                    name: 'Bianca I. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Das beste Produkt!</b></p><p>Ich liebe es, meine Haare brauchten wirklich etwas Liebe! Nachdem ich es ein paar Wochen lang verwendet habe, sind meine Haare jetzt sch??n und gl??nzend , sehen gesund aus und f??hlen sich auch so an. Ich trage meine Haare jetzt ??fter offen! Au??erdem wurde meine Bestellung super schnell bearbeitet, also war es eine insgesamt sehr gute Erfahrung :)</p>",
                },
                {
                    name: 'Samantha L. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Super weich und duftet fantastisch!</b></p><p>Ich habe sehr dickes, lockiges Haar, das gef??rbt wurde, daher waren meine Ergebnisse, wie du dir vorstellen kannst, immer sehr trocken. Seit ich diese Haarmaske verwende, sind meine Haare so viel weicher und gl??nzender! Sie riecht auch sehr gut! Definitiv empfehlenswert f??r alle mit trockenem, dickem und lockigem Haar wie mir!</p>",
                },
                {
                    name: 'Prinzessin H. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Ich bin absolut verliebt in diese Produkte.</b></p><p>Mein Haar sieht nicht nur toll aus und f??hlt sich auch so an, es riecht absolut fantastisch! Ich habe bereits dreimal nachbestellt und werde dies auch weiterhin tun.</p>",
                },
                {
                    name: 'Yelena A. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Fantastischer Geruch</b></p><p>Der Duft ist fantastisch, meine Haare sind gl??nzender und weicher. Ich pers??nlich lasse die Haarmaske lieber nach der Sp??lung einwirken, damit es in mein Haar einzieht und es geschmeidig h??lt.</p>",
                },
                {
                    name: 'Andy D. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Ich liebe diese Haarmaske!</b></p><p>Das ist die beste Haarmaske, die ich je probiert habe. Es war super einfach, mein Haar nach dem Auftragen zu entwirren und mein Haar f??hlte sich weich, volumin??s und super hydratisiert an. F??r das Elixier reicht schon eine kleine Menge Produkt und wie beschrieben: Wunderbar f??r Hitzeschutz, Feuchtigkeit und Styling. ",
                },
                {
                    name: 'Jeyanthy J. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Das Beste aller Zeiten</b></p><p>Ich benutze dieses Produkt seit 3 Monaten und die Ver??nderungen sind enorm. Ich freue mich sagen zu k??nnen, dass mein Haar gl??nzender und weicher ist. Ich werde dieses Produkt auf jeden Fall nachkaufen. Es ist auch sicher in der Anwendung, da es sich um ein Produkt ohne ungesunde Chemikalien handelt. Eine Anschaffung die sich lohnt, um deine Haare professionell zu Hause zu pflegen.</p>",
                },
                {
                    name: 'Katie D. Verifizierte K??uferin',
                    shade: '',
                    text: "<p><b>Meine Haare sind wieder nachgewachsen</b></p><p>Ich bin total ??berzeugt, mein Frizz ist fast nicht mehr vorhanden und meine Wellen sind zur??ck. Ich hatte mein Selbstvertrauen verloren, weil ich so kaputtes Haar hatte, aber seit ich die Like A Virgin-Reihe verwende und Leute mein Haare bewundern, f??hle ich mich wieder stark. Ich dachte, Haarmasken seien nur ein weiterer Betrug und Conditioner w??ren viel besser, aber ich habe mich geirrt.</p>",
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
