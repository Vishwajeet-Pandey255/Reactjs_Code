//* eslint-disable no-unused-vars */
// //<--------------------------------React-Hooks---------------------------------------->


// // import { useState } from "react"

// // import UseRef from "./ReactHooks/UseRef/UseRef"
// // import Usestate from "./ReactHooks/UseState1/Usestate"
// // import ThemeContext from "./ToggleButton/ThemeContext"
// // import UseEffect from "./ReactHooks/UseEffect/UseEffect"

// // const App = () => {
// //   return (
// //     <div>
// //       {/* <UseRef/> */}
// //       {/* <Usestate/> */}
// //       {/* <ThemeContext/> */}
// //       {/* <UseEffect/> */}
// //     </div>
// //   )
// // }

// // export default App


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
//     name:"",
//     email:"",
//     password:""

//   })


//   function fun1(e){
//     let {name,value}=   e.target
//     // console.log(e.target.value);
//     SetInput({...input,[name]:value})
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
//       <input  type='text' name='name' value={input.name}   onChange={fun1}  placeholder='Enter your name'/>
//       <br></br>
//       <br></br>

//       <input  type='email' name='email' value={input.email}  onChange={fun1}  placeholder='Enter your email'/>
//       <br></br>
//       <br></br>

//       <input  type='password'  name='password'  value={input.password}  onChange={fun1} placeholder='Enter your passWord'/>
// <button  type='submit'> save</button>
//     </form>
//     </fieldset>
//     </div>
//   )
// }

// export default App


//<------------------------------------------------------------------------->



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Form/Login';
import Signup from './Form/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Welcome! Please go to /login or /signup</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
