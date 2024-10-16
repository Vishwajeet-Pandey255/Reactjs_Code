/* eslint-disable no-unused-vars */
//* eslint-disable no-unused-vars */
// //<--------------------------------React-Hooks---------------------------------------->

import Api from "./Api"
import NavBar from "./AddToCart/NavBar1"
import Home from "./ReactHooks/Home1"

//import Home from "./ReactHooks/Home"

//  //import UseRef from "./ReactHooks/UseRef/UseRef"
//  import Usestate from "./ReactHooks/UseState1/Usestate"
// //  import ThemeContext from "./ToggleButton/ThemeContext"
// //  import UseEffect from "./ReactHooks/UseEffect/UseEffect"

// const App = () => {
//   return (
//      <div>
// {/* //       <UseRef/> */}
//        <Usestate/>
// {/* //       {/* <ThemeContext/> */} 
//     {/* <UseEffect/> */}
//     </div>
//   )
// } 

//  export default App

// //<-----------------------------------Routing------------------------------------------>


// // import About from './Routing/About'
// // import Contact from './Routing/Contact'
// // import Home from './Routing/Home'
// // import NavBar from './Routing/NavBar'
// // import {BrowserRouter as Router, Route ,Routes  }   from 'react-router-dom'
  
// //   const App = () => {
// //     return (
// //       <div>
// //           <Router>
// //          <NavBar/>
// //          <Routes>
// //          <Route path='/' element={<Home/>} />
// //          <Route path='/about' element={<About/>}/>
// //          <Route path='/contact' element={<Contact/>}/>
// //          </Routes>
// //          </Router>
// //       </div>
// //     )
// //   }
  
// //   export default App


// //<-------------------------------------Todo app--------------------------------------------->


// // import Tudo from './TudoApp/Tudo'

// // const App = () => {
// //   return (
// //     <div>
// //       <Tudo/>
// //     </div>
// //   )
// // }

// // export default App


// //<----------------------------------------------Bootstrap-------------------------------------->



// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min';
// // import Cat from './Bootstrap/Cat';
// // import Navbar from './Bootstrap/Navbar';


// // const App = () => {
// //   return (
// //     <div>
// //       <Navbar/>
// //       <Cat/>
// //     </div>
// //   )
// // }

// // export default App


// //<------------------------------------------------------------------------------------------------->

//<----------------------------------------Data store in Array---------------------------->


// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput]=useState({
//     classnameclassnamename:"",
//     email:"",
//     password:""

//   })


//   function fun1(e){
//     let {classnameclassnamename,value}=   e.target
//     // console.log(e.target.value);
//     SetInput({...input,[classnameclassnamename]:value})
//     // console.log(input,"dekhoo");
    
    
//   }

//   function done(e){
//     e.preventDefault()
//     console.log('heheheh',input);
    
//   }
//   return (
//     <div>


//     <fieldset>   
//       <legend> Form</legend>
//     <form   onSubmit={done}> 
//       <input  type='text' classnameclassnamename='classnameclassnamename' value={input.classnameclassnamename}   onChange={fun1}  placeholder='Enter your classnameclassnamename'/>
//       <br></br>
//       <br></br>

//       <input  type='email' classnameclassnamename='email' value={input.email}  onChange={fun1}  placeholder='Enter your email'/>
//       <br></br>
//       <br></br>

//       <input  type='password'  classnameclassnamename='password'  value={input.password}  onChange={fun1} placeholder='Enter your passWord'/>
// <button  type='submit'> save</button>
//     </form>
//     </fieldset>
//     </div>
//   )
// }

// export default App


//<------------------------------------------------------------------------->



// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import Login from "./Form/Login";
// import Signup from "./Form/Signup";

// const App = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} /> {/* Added /login route */}
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;



///<------------------------------Use Reducer------------------------------------->


// import UseReducer from './ReactHooks/UseReducer/UseReducer'

// const App = () => {
//   return (
//     <div>
//       <UseReducer/>
//     </div>
//   )
// }

// export default App


//<-----------------------------------USe Context----------------------------------------------->


// const App = () => {
//   return (
//     <div>
//     <Home/>
//     </div>
//   )
// }

// export default App


///<-------------------------------------------------------------------------------------------->

// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import './App.css'

// const App = () => {
//     let [data,setData] = useState([])

//         async function  call() {
//           let ApiData =  await axios('https://dummyjson.com/recipes')
//           setData(ApiData.data.recipes,'isko dekho')

//         }

//         useEffect(()=>{
//             call();
            
//         },[])
            
        
    
//   return (
//     <>
  
//  { 
//  data.map((a)=>{
//     return<>
    
//     <div ClassNameClassNameNameClassNameClassNameName='recipes'>
//     <h2>{a.id}</h2>
//     <img height='200px' src={a.image} alt={a.classnameclassnamename}/>
//     <h3>{a.classnameclassnamename}</h3>

//     </div>
//      </>
//  })
// }

//     </>
//   )

// }

// export default App



// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState([]);

//   async function call() {
//     const ApiData = await axios('https://dummyjson.com/recipes');
//     setData(ApiData.data.recipes);
//     setFilteredData(ApiData.data.recipes); // Initialize filteredData
//   }

//   useEffect(() => {
//     call();
//   }, []);

//   const handleSearch = () => {
//     const filtered = data.filter(recipe =>
//       recipe.classnameclassnamename.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   return (
//     <>
//     <div ClassNameClassNameNameClassNameClassNameName='input'>
//       <input
//         type="text"
//         placeholder="Search for a recipe..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       </div>

//       {filteredData.map((recipe) => (
//         <div ClassNameClassNameNameClassNameClassNameName='recipes' key={recipe.id}>
//           <h2>{recipe.id}</h2>
//           <img height='200px' src={recipe.image} alt={recipe.classnameclassnamename} />
//           <h3>{recipe.classnameclassnamename}</h3>
//         </div>
//       ))}
//     </>
//   );
// };

// export default App;

// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import './App.css'

// const App = () => {
//   let [data,setData] =useState([])

//  async function call() {
//   let Apidata = await axios('https://dummyjson.com/recipes')
//   setData(Apidata.data.recipes)
//   }

//   useEffect(()=>{
//     call()
//   },[])


//   return (
//     <>
//     {
//       data.map((a)=>{
//         return <>
        
//         <div ClassNameClassNameNameClassNameClassNameName='reci'>
//         <h2>{a.id}</h2>
//         <img height={200} src={a.image} alt='image'/>
//         <h2>{a.classnameclassnamename}</h2>
//         </div>
//         </>
//       })
//     }
//     </>
//   )
// }

// export default App


//<----------------------------------------------------------------------------->

// import Api from './Api'


// const App = () => {
//   return (
//     <div>
//         <Api/>
//     </div>
//   )
// }

// export default App

//<-------------------------------------Custom hook----------------------------------->
// import CustomHook from "./ReactHooks/CustomHook/CustomHook"
// const App = () => {
//    let{count,increament,decreament,color,handleChange}    =        CustomHook()


//   return (
//     <>
//     <div style={color?{backgroundColor:"red"}:{backgroundColor:"green"}}>green/red</div>
//     <h1>Custom Hook</h1>
//     <h2>Count: {count}</h2>
//     <button onClick={increament}>++</button>
//     <button onClick={decreament}>--</button>
//     <div>
//       <button onClick={handleChange}>Green/red</button>
//     </div>
//     </>
//   )
// }

// export default App


//<------------------------------------------------------------------->


// import React, { useState } from 'react'

// const App = () => {
//   let[input,setInput] = useState()
//   let arr= []

//   for(let i =0 ;i<input;i++){
//     arr.push(i) = parseInt
//   }
//   return (
//     <div>
//       <input onChange={(e)=>setInput(e.target.value)}></input>
//       <button>Click</button>


//  {
//   arr.map((a)=>{
//     return <>

//        console.log(arr);
//        </>
       

//   })
//  }


//     </div>
//   )
// }
// export default App



//<-------------------------------------------------------------------------------->

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const App = () => {
//   const [input, setInput] = useState(''); // Initialize with an empty string
//   const [arr, setArr] = useState([]); // State to hold the array of cards

//   const handleClick = () => {
//     const count = parseInt(input); // Convert input to an integer

//     if (input === '') {
//       setArr([]); // Clear the array if input is empty
//     } else if (!isNaN(count) && count > 0) {
//       setArr(Array.from({ length: count }, (_, i) => i + 1)); // Generate an array of numbers
//     } else {
//       alert('Please enter a valid number greater than 0.');   // Error handling
//     }
//   };

//   return (
//     <div className="container">
//       <input
//         type="number"
//         value={input} // Controlled component
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter number of cards"
//         min="1"
//         className="form-control mb-3" // Bootstrap styling
//       />
//       <button onClick={handleClick} className="btn btn-primary mb-3">Generate Cards</button>

//       <div className="row">
//         {arr.map((a) => (
//           <div key={a} className="card col-4 mb-3 "> {/* Bootstrap grid system */}
//           <img src="" height={300} width={100} className="card-img-top"></img>
//             <div className="card-body">
//               <h5 className="card-title">Card {a}</h5>
//               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




//<--------------------------------Redux------------------------------->

import React,{useState} from 'react'
import NavBar1 from "./AddToCart/NavBar1"
import {Routes,Route}   from 'react-router-dom'
import Home1 from "./AddToCart/Home1"
import Cart from './AddToCart/Cart'
const App = () => {
  let [cartData,SetCartData]=useState([])
  // console.log(cartData,"mainnnn");
  
   return (
    <div>
      <NavBar1/>
      <Routes>
<Route   path='/'  element={<Home1  cartData={cartData} SetCartData={SetCartData}   />}/>
<Route   path='/cart'  element={<Cart cartData={cartData} SetCartData={SetCartData} />}/>

      </Routes>
    </div>
  )
}

export default App

//<---------------------------------------------------------------------------------->


