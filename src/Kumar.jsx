import React, { useEffect, useState } from 'react'

function Kumar() {
    const [use,stUse] = useState("");
    useEffect(()=>{
        console.log("text updated:",use);
    },[use])
    function click(e){
        stUse(e.target.value);
    }
  return (
    <div>
        <h1>text: {use}</h1>
        <input value={use} onChange={click} />
    </div>
  )
}

export default Kumar