/* eslint-disable no-undef */
import  { useState } from "react";

const Tudo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field after adding item
    }
  };

  function remove(id) {
  
    let newData =  items.filter((x, y) => {
      return y != id;
    });
    setItems(newData);
  };

 

  return (
    <div>
      <h2>Saved Items:</h2>
      <input
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your Name"
      />
      <button onClick={handleButtonClick}>Save</button>
      <ul>
        {items.map((item, index) => (
          
          <li key={index}>
            {item} <button onClick={()=>remove(index)}>Delete </button>
          </li>
          
        ))}
      </ul>
  
    </div>
    
  );
};

export default Tudo;
