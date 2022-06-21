interface NumberProps {
  num: number,
  addNumber: (n: number) => void
}

function NumberInput({ num, addNumber }: NumberProps) {
  

  return (
    <button className="text-white bg-gray-500 rounded-md p-2 grid place-items-center cursor-default w-16 text-xl h-10 hover:bg-gray-600 select-none"
      onClick={() => addNumber(num)}
      onKeyUp={(e) => console.log(e.key)}
    >
      <h1>{`${num}`}</h1>
    </button>
  )
}

export default NumberInput