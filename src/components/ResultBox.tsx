interface ResultProps {
  res: string,
  waitingValue: string,
  hasErrors: boolean
}

function ResultBox({ res, waitingValue, hasErrors }: ResultProps) {

  return (
    <div className="bg-lime-50 w-72 h-8 border-2 border-black flex items-center">
      <h1 className={`ml-1 ${hasErrors && "text-red-500"}`}>{`${res}${waitingValue}`}</h1>
    </div>
  )
}

export default ResultBox