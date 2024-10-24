import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")


  return (
    <>
      <div className='container'>
        <input type='number' value={inputValue} onChange={e => setInputValue(Number(e.target.value))}/>
        <PlusBtn setCount={setCount} inputValue={inputValue} />
        <MinusBtn setCount={setCount} inputValue={inputValue} />
        <MultiplyBtn setCount={setCount} inputValue={inputValue} />
        <DivideBtn setCount={setCount} inputValue={inputValue} />
        <ModBtn setCount={setCount} inputValue={inputValue} />
      </div>
      <div>Result: {count}</div>
    </>
  )
}

// function CountInput({inputValue}) {
//   return (
//     <input type='number' value={inputValue} />
//   )
// }

function PlusBtn ({setCount, inputValue}) {
  return(
    <button onClick={()=> setCount(prev => prev + inputValue)}>+</button>
  )
}

function MinusBtn ({setCount, inputValue}) {
  return(
    <button onClick={()=> setCount(prev => prev - inputValue)}>-</button>
  )
}

function MultiplyBtn ({setCount, inputValue}) {
  return(
    <button onClick={()=> setCount(prev => prev * inputValue)}>*</button>
  )
}

function DivideBtn ({setCount, inputValue}) {
  return(
    <button onClick={()=> setCount(prev => prev / inputValue)}>/</button>
  )
}

function ModBtn ({setCount, inputValue}) {
  return(
    <button onClick={()=> setCount(prev => prev % inputValue)}>%</button>
  )
}

export default App
