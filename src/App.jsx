import "./App.css";
import { puppyList } from "./data.js";

function App() {
  console.log(puppyList);
  return (
    <>
      <div>{puppyList}</div>
    </>
  );
}

export default App;
