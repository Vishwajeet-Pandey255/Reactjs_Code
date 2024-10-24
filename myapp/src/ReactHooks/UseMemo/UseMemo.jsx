import { useMemo, useState } from "react"


const UseMemo = () => {
    let [data,setData] = useState(0);

   useMemo(()={
    
    function call() {
     let result = 0;
    for (let i=0;i<100000000;i++) {
        result+=i;
    }
    }
   },[])

  return (
    <div>
      <p>{result}</p>
      <button onClick={call}>Add</button>
    </div>
  )
}

export default UseMemo