import { useState } from 'react'
import { useParams } from 'react-router'

function App() {
  const [count, setCount] = useState(0)
  const route = useParams()
  return (
    <h1 onClick={() => setCount(() => count + 1)}>
     我是{ route.user }
    </h1>
  )
}

export default App
