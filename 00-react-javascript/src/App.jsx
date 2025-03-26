import axios from "./util/axios.customize"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const fetchhelloworld = async () => {
      const res = await axios.get(`/v1/api/`)
      console.log(">>>> check res!: ", res)
  }
  fetchhelloworld()
}, [])







  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default App
