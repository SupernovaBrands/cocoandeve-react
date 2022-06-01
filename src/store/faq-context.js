import React from "react";

const FaqContext = React.createContext({
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
    storeChange: (activeStore) => {},
});

export default FaqContext;