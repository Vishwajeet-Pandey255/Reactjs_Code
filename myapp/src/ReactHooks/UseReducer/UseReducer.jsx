import  { useReducer } from 'react'

const UseReducer = () => {
    function reducer(count,action) {
        if(action.type==='incre'){
            return count+=1
        }
        else if(action.type==='deccc'){
            return count-=1
        }
    }

    let [count,dispatch] = useReducer(reducer,0)
  return (
    <div style={{backgroundColor:'red' ,height:1200,width:800}}>
        <h3>{count}</h3>
        <button onClick={()=>dispatch({type:"incre"})}>++</button>
        <button onClick={()=>dispatch({type:"deccc"})}>--</button>

    </div>
  )
}

export default UseReducer