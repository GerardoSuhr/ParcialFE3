import { useState } from 'react'
import './App.css'
import Form from "../src/components/form";
import Tarjeta from "../src/components/tarjeta";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
{/* <Form/> */}
<Tarjeta/>

    </div>
  )
}

export default App
