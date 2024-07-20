//TASK 5
// You've learned how to fetch data in React.
// In this code lab, you'll practice fetching some data from the 
// randomuser.me
//  website's API
// This code lab's app, once completed, is supposed to show a single customer's data for the Little Lemon Restaurant.
// The starter code shows only an h1 heading, with the following text: "Data pending..."
// Your task is to complete the data fetching using the fetch() function and to handle the returned Promise object using the then() methods.
// In the return statement of the App component, you also need to add an h2 heading showing the customer's name and the customer's image from the data fetched from the random user API.
import React from "react";

function App() {
  const [user, setUser] = React.useState({});

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")   //https://randomuser.me  this website will generate random photo
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{padding: "40px"}}>
      <h1>Customer data</h1>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=""/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
