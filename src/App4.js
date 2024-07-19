//TASK 4
// This code lab's app shows a Gift Card page of the Little Lemon Restaurant web app, where a visitor initially has a Gift Card that they can use to have a dinner for four.
// The starter code shows the following information on the screen:

// Gift Card Page 
// Customer: Jennifer Smith 
// Free dinner for 4 guests 
// To use your coupon, click the button below.  
// Spend Gift Card 

// The "Spend Gift Card" button is set up to execute a function when clicked. However, that event-handling function is empty.

// That means that when serving the app with the starter code, if you click the "Spend Gift Card" button, there will be no change on the screen.

// Your task is to complete the event-handling function for the "Spend Gift Card" button clicks, as detailed in the steps below.

// When the code lab is successfully completed, after the "Spend Gift Card" button is clicked, the UI should update to show the following information on the screen:

// Gift Card Page 
// Customer: Jennifer Smith 
// Your coupon has been used. 
// Please visit our restaurant to renew your gift card. 


import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Shwetha",
    lastName: "Kulal",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard((prevState) => {
      return { 
        ...prevState,
        text: "Your coupon has been used.",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift card."
      };
    });
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>Gift Card Page</h1>
      <h2>Customer: {giftCard.firstName} {giftCard.lastName}</h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      {giftCard.valid && (
        <button onClick={spendGiftCard}>
          Spend Gift Card
        </button>
      )}
    </div>
  );
}
