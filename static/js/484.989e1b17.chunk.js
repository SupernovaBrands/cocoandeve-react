(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[484],{3324:function(e,o,n){"use strict";n.d(o,{_y:function(){return v},a$:function(){return f},d8:function(){return h},ej:function(){return m},iP:function(){return g},jm:function(){return y},oH:function(){return p}});var r=n(885),t=n(7313),i=n(2984),s=n.n(i),a=n(6666),u=n.n(a),c="2ab3fc92f6f75b39f96d2964d5ba92da",l="I8zyA4lVhMCaJ5Kg",d=function(e){var o={},n=s().AES.encrypt(e,s().enc.Utf8.parse(c),{iv:s().enc.Utf8.parse(l),mode:s().mode.CBC,padding:s().pad.Pkcs7});return o.data=n.ciphertext.toString(s().enc.Base64),o.data},p=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},h=function(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",t=arguments.length>4?arguments[4]:void 0,i="";if(n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3),i="; expires=".concat(s.toUTCString())}document.cookie="".concat(e,"=").concat(o||"").concat(i,"; path=").concat(r).concat(t?";domain=".concat(t):"")},m=function(e){for(var o="".concat(e,"="),n=document.cookie.split(";"),r=0;r<n.length;r+=1){for(var t=n[r];" "===t.charAt(0);)t=t.substring(1,t.length);if(0===t.indexOf(o))return t.substring(o.length,t.length)}return null},g=function(){var e=(0,t.useState)([0,0]),o=(0,r.Z)(e,2),n=o[0],i=o[1];return(0,t.useLayoutEffect)((function(){function e(){i([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},y=function(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"registration",t=new Date,i=t.getTime(),s="{email:'".concat(e,"',time:").concat(i,"}"),a=d(s),c={email:e,country:n,brand:"cocoandeve",domain:window.location.hostname,phone:o||"",reg_source:r,signature:a};return u().post("https://api.cocoandeve.com/bluecore/registrations.json",c)},v=function(e,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=n,t=JSON.stringify({country:r,phone:e,email:"",form_id:o});return u().ajax({url:"https://api.smsbump.com/v2/formsPublic/subscribe",method:"POST",cache:!1,data:t,contentType:"application/json; charset=utf-8",headers:{"X-SMSBump-Platform":"shopify"},success:function(e){e.message?console.log(e.message):console.log("smsbumperror")}})},f=function(e){return/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(e)}},3040:function(e,o,n){"use strict";var r,t=n(4942),i=(r={en:{heading:"Find your perfect tan \nin 90 seconds!",subheading:"Take the Tan matching quiz to find your perfect shade of gorgeous glow. It only takes 90 seconds to find your true colour match.",caption:"Your perfect shade is just a few clicks away",btn:{start:"Take the Quiz",next:"Next",prev:"Previous Question",result:"See results!",skip:"Skip this step",view:"View my results"},loading:"Analysing your answers",formEmail:{title:"We found your perfect match!",caption:"Enter your email to view your results!<br/>Plus, get a promo code for <strong>10% OFF</strong> your first purchase.",email:"Email",button:"Submit",term:'I agree to <a target="_blank" href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a> & <a target="_blank" href="https://www.cocoandeve.com/pages/terms-and-conditions">ToS</a>',condition:"By signing up, you agree to receive exclusive offers via email.\nSign up not required for purchase. Opt out any time."},result:{title:"Thanks! Here is your promo code:",code:"QUIZ10",note:"Promo code applies only for first purchases."}},fr:{heading:"Trouvez votre teinte d'autobronzant parfaite \nen 90 secondes !",subheading:"Faites le quiz de compatibilit\xe9 d'autobronzant pour trouver la teinte qui vous correspond le mieux. 90 secondes suffisent pour trouver la nuance parfaite.",caption:"Votre teinte parfaite n'est plus qu'\xe0 quelques clics.",btn:{start:"Faire le quiz",next:"Suivant",prev:"Question pr\xe9c\xe9dente",result:"Voir les r\xe9sultats !",skip:"Skip this step",view:"View my results"},loading:"Analyse de vos r\xe9ponses",formEmail:{title:"We found your perfect match!",caption:"Enter your email to view your results!<br/>Plus, get a promo code for <strong>10% OFF</strong> your first purchase.",email:"Email",button:"Submit",term:'I agree to <a target="_blank" href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a> & <a target="_blank" href="https://www.cocoandeve.com/pages/terms-and-conditions">ToS</a>',condition:"By signing up, you agree to receive exclusive offers via email.\nSign up not required for purchase. Opt out any time."},result:{title:"Thanks!\nHere is your promo code:",code:"QUIZ10",note:"Promo code applies only for first purchases."},sweepstakes:{heading:"Acc\xe8de en avant-premi\xe8re aux plus grosses promotions de l\u2019ann\xe9e !",subHeading:"Pr\xe9inscris-toi maintenant, et obtiens en plus une chance de gagner 1000$ de service de soins capillaires et ta wishlist Coco & Eve",emailPh:"Email",phonePh:"Phone number",toc:"En t'inscrivant, tu acceptes de recevoir des offres exclusives par e-mail/SMS. Pour plus d'informations, consulte notre <a href='https://www.cocoandeve.com/pages/privacy-policy'>Politique de confidentialit\xe9</a>.",ty_heading:"Tu es inscrit !",ty_subHeading:"Reste \xe0 l'\xe9coute pour recevoir ton code en avant-premi\xe8re le 14 novembre, et pour savoir si tu as gagn\xe9 par e-mail ou sms",ty_note:" *Les clients qui s'inscrivent \xe0 notre pr\xe9vente par SMS ou par e-mail auront la possibilit\xe9 de gagner des produits d'une valeur de 500 USD ainsi que des services de salon d'une valeur de 1000 USD. Les gagnants du concours seront inform\xe9s par SMS ou par e-mail. L'inscription \xe0 la pr\xe9vente et le concours se d\xe9rouleront jusqu'au 13 novembre 2022 \xe0 21h00 EST. Les prix ne peuvent \xeatre utilis\xe9s conjointement avec un autre code, une autre offre ou une autre promotion. Coco & Eve se r\xe9serve le droit d'annuler ou de modifier toute promotion sans pr\xe9avis. En cas de litige, la d\xe9cision de Coco & Eve est d\xe9finitive. Aucun achat n'est n\xe9cessaire pour participer ou gagner. Chaque participant n'a droit qu'\xe0 une seule participation.",submit:"Inscris-toi maintenant !",timerLabel:"La pr\xe9inscription se termine dans",days:"jours",hours:"heures",minutes:"minutes",seconds:"secondes",shopAll:"Shop Coco &amp; Eve"}},de:{heading:"Finde deine perfekte Br\xe4une \nin 90 Sekunden!",subheading:"Nimm am Selbstbr\xe4uner-Quiz teil, um deine perfekte Br\xe4unungs-Nuance f\xfcr einen wundersch\xf6nen Glow zu finden. Es dauert nur 90 Sekunden, um deine wahre Farb\xfcbereinstimmung zu finden.",caption:"Deine perfekte Nuance ist nur ein paar Klicks entfernt",btn:{start:"Nimm an unserem Quiz teil",next:"Weiter",prev:"Vorherige Frage",result:"Siehe Ergebnisse!",skip:"Skip this step",view:"View my results"},loading:"Analyse deiner Antworten",formEmail:{title:"We found your perfect match!",caption:"Enter your email to view your results!<br/>Plus, get a promo code for <strong>10% OFF</strong> your first purchase.",email:"Email",button:"Submit",term:'I agree to <a target="_blank" href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a> & <a target="_blank" href="https://www.cocoandeve.com/pages/terms-and-conditions">ToS</a>',condition:"By signing up, you agree to receive exclusive offers via email.\nSign up not required for purchase. Opt out any time."},result:{title:"Thanks! Here is your promo code:",code:"QUIZ10",note:"Promo code applies only for first purchases."},sweepstakes:{heading:"Sichere dir fr\xfchzeitig Zugang zum gr\xf6\xdften Verkauf des Jahres!",subHeading:"Melde dich jetzt an und sichere dir die Chance, einen Friseurbesuch im Wert von 1000$ zusammen mit deiner Coco & Eve Wunschliste zu gewinnen!",emailPh:"Email-Adresse eingeben",phonePh:"Handynummer",toc:"Durch die Anmeldung stimmst du zu, exklusive Angebote per E-Mail/SMS zu erhalten. Weitere Informationen findest du in unserer <a href='https://www.cocoandeve.com/pages/privacy-policy'>Datenschutzerkl\xe4rung</a>",ty_heading:"Du bist registriert!",ty_subHeading:"Bleib dran, um deinen Code f\xfcr den vorzeitigen Zugang am 14. November zu erhalten und erfahre per E-Mail oder SMS, ob du zu den Gewinnern geh\xf6rst!",ty_note:"*Kunden, die sich per SMS oder E-Mail-Adresse f\xfcr unseren Vorverkauf anmelden, haben die Chance, Produkte im Wert von bis zu 500 USD, sowie Salondienstleistungen im Wert von 1000 USD zu gewinnen. Die Gewinner des Wettbewerbs werden per SMS oder E-Mail benachrichtigt. Die Vorverkaufsregistrierung und der Wettbewerb laufen bis zum 13. November 2022, 21:00 Uhr EST. Preise k\xf6nnen nicht in Verbindung mit anderen Codes, Angeboten oder Werbeaktionen verwendet werden. Coco & Eve beh\xe4lt sich das Recht vor, Werbeaktionen ohne vorherige Ank\xfcndigung zu stornieren oder zu \xe4ndern. Im Streitfall ist die Entscheidung von Coco & Eve endg\xfcltig. Kein Kauf erforderlich, um teilzunehmen oder zu gewinnen. Jeder Teilnehmer darf nur einmal teilnehmen.",submit:"Registriere dich jetzt!",timerLabel:"Die Vorregistrierung endet in",days:"Tagen",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden",shopAll:"Shop Coco &amp; Eve"}},ca:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Register to be part of our pre-sale and get early access to our Black Friday deals! ",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email/SMS, for more information see our <a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a>',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14!",ty_note:"*Pre sale registration will run until November 13, 2022 21:00 EST. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}},us:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email or recurring automated marketing messages. For more info see our <a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a>. Message frequency varies. Msg & data rates may apply. Sign up not required for purchase.',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}},au:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email or recurring automated marketing messages. For more info see our <a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a>. Message frequency varies. Msg & data rates may apply. Sign up not required for purchase.',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}},eu:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email or recurring automated marketing messages. For more info see our <a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a>. Message frequency varies. Msg & data rates may apply. Sign up not required for purchase.',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}},uk:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email or recurring automated marketing messages. For more info see our <a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a>. Message frequency varies. Msg & data rates may apply. Sign up not required for purchase.',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}}},(0,t.Z)(r,"ca",{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Register to be part of our pre-sale and get early access to our Black Friday deals! ",emailPh:"Email",phonePh:"Phone number",toc:"By signing up you agree to receive exclusive offers via email/SMS, for more information see our <a href='/pages/privacy-policy'>Privacy Policy</a> ",ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14!",ty_note:"*Pre sale registration will run until November 13, 2022 21:00 EST. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}}),(0,t.Z)(r,"int",{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:"By signing up you agree to receive exclusive offers via email/SMS, for more information see our <a href='/pages/privacy-policy-new'>Privacy Policy</a> ",ty_heading:"You're registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.  ",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}}),(0,t.Z)(r,"my",{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email or recurring automated marketing messages. For more info see our <a href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a>. Message frequency varies. Msg & data rates may apply. Sign up not required for purchase.',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.",submit:"Register now!",timerLabel:"PRE REGISTRATION ENDS IN:",days:"Hours",hours:"Minutes",minutes:"Minutes",seconds:"Seconds",shopAll:"Shop Coco &amp; Eve"}}),r);o.Z=i},2480:function(){}}]);