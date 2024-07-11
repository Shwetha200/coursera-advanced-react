// import react from 'react';
import { useState } from 'react';

function App() {

 const [score, setScore]= useState("10");
 //initialized to 10
 const [comment,setComment] =useState("");
 //initialized to an empty string
const handleSubmit=(e)=>{
  e.preventDefault();
  if(Number(score)<=5 && comment.length<=10){
    alert("Please a comment explaining why the experience was poor");
    return;
  }
  console.log("Form Submitted Successfully!");
  setScore("10"); //reseting the form values after submitting to the initial value
  setComment("");//same

}


  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Feedback form</h1>
        <div className='field'>
        <label>Score: {score}</label>
        <input type="range" min="0" max="10" 
        value={score}
        onChange={e=> setScore(e.target.value)}/>   
        </div>
        <div className='field'>
          <label>Comment</label>
          <textarea value={comment} onChange={e=>setComment(e.target.value)}/>
        </div>
        <button type="submit">Submit</button>
      </fieldset>
     </form>
    </div>
  );
}

export default App;

//What are the two props you need to add when creating a controlled range component?   
// That's correct. The value prop is used to hook the local state up and onChange prop is used to receive the changes and update the state accordingly  