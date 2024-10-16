// import axios from 'axios';
// import  { useEffect, useState } from 'react';
// import './App.css';

// const Api = () => {
//   // State for storing data and filter type
//   let [data, setData] = useState([]);
//   let [filter, setFilter] = useState("all"); // State for tracking selected meal type

//   // Fetch data from API
//   async function call() {
//     try {
//       let apiData = await axios('https://dummyjson.com/recipes');
//       setData(apiData.data.recipes);
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   }

//   useEffect(() => {
//     call();
//   }, []);

//   const filteredData = data.filter((recipe) => {
//     if (filter === "all") return true;
//     return recipe.mealType.includes(filter); 
//   });

//   return (
//     <>
    
//       <div className="button-container">
//         <button onClick={() => setFilter("Breakfast")}>Breakfast</button>
//         <button onClick={() => setFilter("Lunch")}>Lunch</button>
//         <button onClick={() => setFilter("Dinner")}>Dinner</button>
//         <button onClick={() => setFilter("all")}>All</button> {/* Show all */}
//       </div>
  
//       <div className="recipe-container">
//         {
//           filteredData.length > 0 ? (
//             filteredData.map((recipe, index) => (
//               <div id='card' key={index}>
//                 <img src={recipe.image} alt={recipe.name} />
//                 <h3>{recipe.name}</h3>
//                 <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
//                 <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
//                 <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
//                 <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
//                 <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
//                 <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
//                 <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
//                 <p><strong>Instructions:</strong></p>
//                 <ol>
//                   {recipe.instructions.map((instruction, idx) => (
//                     <li key={idx}>{instruction}</li>
//                   ))}
//                 </ol>
//               </div>
//             ))
//           ) : (
//             <p>No recipes found for the selected category.</p>
//           )
//         }
//       </div>
//     </>
//   );
// }

// export default Api;

import axios from 'axios'
import  { useEffect, useState } from 'react'
import './App.css'

const Api = () => {
    let[data,setData] = useState([])
    let[filter,setFilter] = useState("all")

async function call(){
    try {
        let ApiData = await axios('https://dummyjson.com/recipes')
        setData(ApiData.data.recipes)
        
    } catch (error) {
        console.error("Error fetching data",error);
        
    }
}

useEffect(()=>{
    call()
},[])

const filteredData = data.filter((recipe)=>{
    if(filter === "all") return true
    return recipe.mealType.includes(filter);
})

  return (
    <>
    <div className= "button-container">
        <button onClick={()=> setFilter("Breakfast")}>Breakfast</button>
        <button onClick={()=> setFilter("Lunch")}>Lunch</button>
        <button onClick={()=> setFilter("Dinner")}>Dinner</button>
        <button onClick={()=> setFilter("all")}>All</button>
    </div>


    <div className="recipe-container">
                {
          filteredData.length > 0 ? (
            filteredData.map((recipe, index) => (
              <div id='card' key={index}>
                <img src={recipe.image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
                <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing}</p>
                <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
                <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
                <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
                <p><strong>Meal Type:</strong> {recipe.mealType.join(", ")}</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
                <p><strong>Instructions:</strong></p>
                <ol>
                  {recipe.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>
            ))
          ) : (
            <p>No recipes found for the selected category.</p>
          )
        }
       </div>
    </>


    
  );
}

export default Api