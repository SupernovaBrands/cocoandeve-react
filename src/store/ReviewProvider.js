import { useReducer } from "react";
import ReviewContext from "./reviews-context";

const _content = {
    us: {
        heading: 'Customer Reviews',
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
    uk: {
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
    ca: {
        heading: 'Customer Reviews',
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
    au: {
        heading: 'Customer Reviews',
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
    eu: {
        heading: 'Customer Reviews',
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
    int: {
        heading: 'Customer Reviews',
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
}

const reviewReducer = (state, action) => {
    return _content[action.activeStore];
};

const ReviewProvider = props => {
    const [reviewState, dispatchReviewAction] = useReducer(reviewReducer, _content.us);
    const storeChangeHandler = (activeStore) => {
        const validStore = ['us', 'au', 'ca', 'uk', 'eu', 'int', 'de', 'fr'].indexOf(activeStore) !== -1 ? activeStore : 'us';
        dispatchReviewAction({type: 'CHANGESTORE', activeStore: validStore})
    };

    const reviewContext = { ...reviewState, storeChange: storeChangeHandler };


    return (
        <ReviewContext.Provider value={reviewContext}>
            {props.children}
        </ReviewContext.Provider>
    );
};

export default ReviewProvider;
