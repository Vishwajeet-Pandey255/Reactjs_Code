// import { useEffect, useRef, useState } from "react";

// const UseRef = () => {
//   const [value, setValue] = useState(0);
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1; // Increment the count
//   });

//   return (
//     <>
//       <button onClick={() => { setValue(prev => prev - 1); }}>-1</button>
//       <h1>Value: {value}</h1>
//       <button onClick={() => { setValue(prev => prev + 1); }}>+1</button>
//       <h1>Render Count: {count.current}</h1> {/* Accessing count.current */}
//     </>
//   );
// };

// export default UseRef;


//<------------------------------------------------------------------------>

// import { useState,useRef} from 'react'
// import './App.css'

// const UseRef = () => {

//   const inpElem = useRef()
//       const data= useState()

// const btnClicked = ()=>{
//   console.log(inpElem.current);
//   inpElem.current.style.background = "blue";
  
// }

//   return (<>
//    <input type='text' ref={inpElem}></input>
//    <button onClick={btnClicked}>Click here</button>
//    <h1>{data}</h1>
//    </>
//   )
// }

// export default UseRef

