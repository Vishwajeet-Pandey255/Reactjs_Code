import { useContext } from "react"
import Context from "./UseContext/Context"


const Home = () => {
    let data= useContext(Context)
  return (
    <div>
        {data}
    </div>
  )
}

export default Home