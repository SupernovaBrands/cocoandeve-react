import React from "react";

const ReviewContext = React.createContext({
    heading: 'Customer Reviews',
    reviews: [
        {
            name: 'Kjersti V. Verified Buyer',
            shade: 'Shade of Tan: Dark',
            text: "Doesn't smell bad like some others, and goes on super smooth. Color is gorgeous, looks natural and doesn't have any orange tint AND makes your skin look soooo healthy. Doesn't leave streaks or blotches and fades perfectly without leaving patches. I love it!!!",
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
        }
    ],
    storeChange: (activeStore) => {},
});

export default ReviewContext;