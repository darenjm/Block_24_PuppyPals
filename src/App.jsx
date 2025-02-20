import "./App.css";
import { useState } from "react";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);

  function handleClick() {
    //
  }

  return (
    <>
      <div className="app">
        {puppies.map((puppy) => {
          return <p onClick={()=>{console.log("puppy id: ", puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })}
      </div>
    </>
  );
}

export default App;
