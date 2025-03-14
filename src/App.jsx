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
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log(featuredPup);

  return (
      <div className="app">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}

        {featPupId && (
          <div className="featured-pup">
            <h2>{featuredPup.name}</h2>
            <ul className="pup-info">
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        
        {featPupId && 
        <p>{featPupId}</p>}


      </div>
  );
}

export default App;
