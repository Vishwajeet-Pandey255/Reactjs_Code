import { useState } from "react"


const CustomHook = () => {
let [count,setCount] = useState(0)
let[color,setColor] = useState('false')
const handleChange = ()=>{
    if(color){
     setColor(false)
}

else{
    setColor(true)
}
}
const increament = ()=> setCount(count+1)
const decreament = ()=> setCount(count-1)


  return  {count,increament,decreament,handleChange,color}
  
}

export default CustomHook