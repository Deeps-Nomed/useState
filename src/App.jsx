import { useState } from 'react'
// import {toast} from 'react-toastify'
// // import 'react-toastify/dist/components';
import './App.css'
// toast.configure();

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  })

function decrementCount() {
  if(count!=0)
    setCount(prevCount => prevCount - 1)
  else
    toast("Bucket is Empty")
}
function incrementCount() {
  setCount(incrCount => incrCount + 1)
}
  return (
    <>
      <button onClick={decrementCount}> - </button>
      <span>  {count}  </span>
      <button onClick={incrementCount}> + </button>
    </>
  )
}

export default App
