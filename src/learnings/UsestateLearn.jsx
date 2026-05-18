import { useState } from "react"

function UsestateLearn () {
  const [count, setCount] = useState(0);
  const start = () => {
    setCount ( count + 1) 
}
const reset = () => {
    setCount(0 )
}
    return (
        <div className="bg-cyan-950 h-fit text-2xl  p-10 font-light font-serif border-b-blue-950 border">
            <h1 className="underline text-center text-3xl text-pink-500">Rendering component to text UseState</h1>
            <p className="text-center">click the button below for the counter increment</p>
            <h1 className="text-center text-white mt-20  mb-20 ">Counts: {count}</h1>
            <div className="flex gap-6 ml-30">
            <button onClick={start }
          className=" block font-bold font-sans font-stretch-50%  w-1/4  font-blue text-center rounded-r-3xl  -top-1.5 rounded-l-3xl  text-10
        
           hover:bg-red-800 p-5 border-2 hover:border-t-green-400 hover:border-r-green-400 hover:border-l-green-400
           hover:border-b-0 hover: text-2xl hover:h-1/3
            "
          >count</button>
                      <button onClick={reset}
          className=" block font-bold font-sans font-stretch-50%  w-1/4  font-blue text-center rounded-r-3xl  -top-1.5 rounded-l-3xl  text-10
          
           hover:bg-red-800 p-5 border-2 hover:border-t-green-400 hover:border-r-green-400 hover:border-l-green-400
           hover:border-b-0 hover: text-2xl hover:h-1/3
            "
          >Reset</button>
          </div>
        </div>
    )
}
export default UsestateLearn