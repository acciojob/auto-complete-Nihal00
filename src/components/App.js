
import React, { useState } from "react";
import './../styles/App.css';

let fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]


const App = () => {

  let [item, setItem] = useState(fruits);

  function update(e) {
    let letter = e.target.value;

    if(letter === ""){
      setItem(fruits);
    } else {
      let newArr = fruits.filter(ele => ele.includes(letter));
      setItem(newArr);
    }
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search Item</h1>
        <input type="text" onChange={ update } />

        <ul>
          {
            item.map((it) => <li>{it}</li>)
          }
        </ul>
    </div>
  )
}

export default App
