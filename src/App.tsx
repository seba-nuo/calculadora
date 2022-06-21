import { useState } from 'react';
import React from 'react'
import NumberInput from './components/NumberInput'
import ResultBox from './components/ResultBox'
import ComputeResult from './ComputeResult'
import './index.css';

function App() {
  const [displayRes, setDisplayRes] = useState<string>("");
  const [waitingValue, setWaiting] = useState<string>("_");
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [lastResult, setLastResult] = useState<string>("");


  function addElement(element: number | string) {
    setDisplayRes(displayed => {
      switch (displayed) {
        case "Syntax error":
        case "Infinity":
        case "NaN":
          setHasErrors(false)
          setWaiting("_")
          return `${element}`
        default:
          break;
      }

      return `${displayed}${element}`
    })
  }

  function delLastElement() {

    setDisplayRes(displayed => {
      switch (displayed) {
        case "Syntax error":
        case "Infinity":
        case "NaN":
          setHasErrors(false)
          setWaiting("_")
          return "";
        default:
          break;
      }

      return displayed.slice(0, -1)
    })
  }

  function clearDisplay() {
    setDisplayRes("")
    setWaiting("_")
    setHasErrors(false)
  }

  function displayLastResult() {
    setDisplayRes(display => `${display}${lastResult}`)
  }

  function computeResult() {
    const result = new ComputeResult(displayRes)
    try {
      const computedResult = `${result.getResult()}`
      setDisplayRes(computedResult)
      setLastResult(computedResult)

      if (computedResult === "Infinity" || computedResult === "NaN") {
        setWaiting("")
        setHasErrors(true)
      }

    } catch (error) {
      setWaiting("")
      setDisplayRes("Syntax error")
      setHasErrors(true)
    }
  }

  return (
    <main>
      <div className='flex flex-col items-center justify-center mt-4'>
        <ResultBox res={displayRes} waitingValue={waitingValue} hasErrors={hasErrors} />
        <div className='flex mt-2'>
          <div className='grid grid-cols-4 gap-2 place-items-center'>
            <div className='text-white bg-gray-500 rounded-md p-2 grid place-items-center cursor-default w-16 text-xl h-10 hover:bg-gray-600 select-none' onClick={() => addElement("/")}>
              <button className='text-white cursor-default font-bold leading-none'> &#247; </button>
            </div>
            <div className='text-white bg-gray-500 rounded-md p-2 grid place-items-center cursor-default w-16 text-xl h-10 hover:bg-gray-600 select-none' onClick={() => addElement("*")}>
              <button className='text-white cursor-default font-bold leading-none'>&#xd7;</button>
            </div>
            <div className='text-white bg-red-500 rounded-md p-2 grid place-items-center cursor-default w-16 h-10 hover:bg-red-600 select-none' onClick={() => delLastElement()}>
              <button className='text-white cursor-default font-bold'> DEL </button>
            </div>
            <div className='text-white bg-red-500 rounded-md p-2 grid place-items-center cursor-default w-16 h-10 hover:bg-red-600 select-none' onClick={() => clearDisplay()}>
              <button className='text-white cursor-default font-bold'> CLR </button>
            </div>
            <NumberInput num={1} addNumber={addElement} />
            <NumberInput num={2} addNumber={addElement} />
            <NumberInput num={3} addNumber={addElement} />

            <div className='bg-gray-500 rounded-md p-2 w-16 h-10 grid place-items-center select-none hover:bg-gray-600' onClick={() => addElement("+")}>
              <button className='text-white cursor-default font-bold text-2xl leading-none'> + </button>
            </div>
            <NumberInput num={4} addNumber={addElement} />
            <NumberInput num={5} addNumber={addElement} />
            <NumberInput num={6} addNumber={addElement} />
            <div className='bg-gray-500 rounded-md p-2 w-16 h-10 grid place-items-center select-none hover:bg-gray-600' onClick={() => addElement("-")}>
              <button className='text-white cursor-default font-bold text-2xl leading-none'> - </button>
            </div>
            <NumberInput num={7} addNumber={addElement} />
            <NumberInput num={8} addNumber={addElement} />
            <NumberInput num={9} addNumber={addElement} />
            <div className='bg-blue-500 rounded-md p-2 w-16 h-[5.5em] grid place-items-center row-span-2 select-none hover:bg-blue-600' onClick={() => computeResult()}>
              <button className='text-white cursor-default font-bold text-2xl leading-none'> = </button>
            </div>
            <div className='bg-gray-500 rounded-md p-2 w-16 h-10 grid place-items-center select-none hover:bg-gray-600' onClick={() => addElement(".")}>
              <button className='text-white cursor-default font-bold text-2xl leading-none'> . </button>
            </div>
            <NumberInput num={0} addNumber={addElement} />
            <div className='bg-gray-500 rounded-md p-2 w-16 h-10 grid place-items-center select-none hover:bg-gray-600' onClick={() => displayLastResult()}>
              <button className='text-white cursor-default font-bold leading-none'> ANS </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;


