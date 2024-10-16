// import { useState } from "react"

// const Usestate = () => {
//    let [count,SetCount]= useState(0)
//    let [color,setcolor] = useState('red')

//    function fun1() {
//     SetCount(count+1)
//    }
//    function fun2() {
//     return setcolor('green')

//    }
   
//   return (
//     <div style={{backgroundColor:color,height:'100vh',width:"100vw"}}>
//         <p>{count}</p>
//         <button onClick={fun1}>onClick</button>
//         <button onClick={fun2}>ColorGreen</button>
//     </div>
//   )
// }

// export default Usestate



// import { useState } from 'react'

// const Usestate = () => {
//     // eslint-disable-next-line no-unused-vars
//     let [color,setColor]= useState('red')

//     function fun1() {
//       return   setColor('green')
//     }

//   return (
//     <div style={{backgroundColor:'green' , height:'100vh',width:"100vw"}}>
//         <button onClick={fun1}>Color Green</button>
//     </div>
//   )
// }

// export default Usestate




























//<-----------------------------Example 2---------------------------------------->

// import { useState } from 'react'


// const Usestate = () => {
//   let [car,setCar] = useState({
//     brand:'Thar',
//     Model:"Roma",
//     year:"2024",
//     color:"Red"
//   });

// const changeColor = () =>{
//   setCar((prev)=>{
//     return {...prev, color: "Blue"}
//   })
// }


//   return (
//     <>
//     <h1>My {car.brand}</h1>
//     <h2>it is a {car.color} {car.model} from {car.year}</h2>
//     <button onClick={changeColor}>Blue</button>
//     </>
//   )
// }

// export default Usestate

