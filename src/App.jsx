import React, { useEffect, useState } from 'react'

function App() {
    const [use,stUse] = useState(0);
    function increase(){
        stUse(use + 1);
    }
    useEffect(()=>{
        console.log("count updated");
    },[use])
  return (
    <div>
        <h1>Count: {use}</h1>
        <button onClick={increase}>click</button>
    </div>
  )
}

export default App