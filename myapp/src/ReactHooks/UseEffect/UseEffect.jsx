// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 2000);

//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   return (
//     <>
//       <p>I have rendered {count} times</p>
      
//     </>
//   );
// };

// export default UseEffect;





// import { useEffect, useState } from 'react'

// const UseEffect = () => {

//     let[count ,setCount] = useState(0)

//     useEffect(()=>{
//         setTimeout(()=>{    // useEffect(cb,[])
//             setCount((count) => count+1)
//         },2000)

//     },[count])
//   return (
//     <div>
//         <p>I have randered {count} Times</p>
//     </div>
//   )
// }

// export default UseEffect






























//<--------------------------------------------------------------------------------->

// ////<-----------------------Fetching Data using UseEffect Hook>

// import { useEffect, useState } from 'react'

// const UseEffect = () => {
//   let [count,setCount] = useState(0)
//   let [city,setCity] = useState('Bhopal')
//   let [data,setData] = useState([])

//   useEffect(()=>{
//  fetch('https://dummyjson.com/recipes').then((res)=>{
//   return res.json()
//  }).then((data)=>{
//   console.log(data.recipes);
//   setData(data.recipes)
  
//  })

// },[data])

// function fun1() {
//   setCount(count+1)
// }


// function changeCity(){
// setCity("Banglore")
// }

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={fun1}>Click</button>
//       <p>City: {city}</p>
//       <button onClick={changeCity}>City</button>

      
//         {

//         data.map((a)=>{
//           return (<>    
//           <li>{a.id}</li>
//           < li>{a.name}</li>
//           <img src={a.image} height='100px' width='100px'></img>
//           </>)
//         })

//        }
       
  

//     </div>
//   )
// }

// export default UseEffect



