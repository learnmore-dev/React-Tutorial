import React, { useState } from 'react'

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  function info(e){
    setName(e.target.value);
  }
  function kit(j){
    setEmail(j.target.value)
  }
  return (
    <div>
      <h1>registration form:</h1>
      name: <input type="text" value={name}  onChange={info}/>
      email: <input type="email" value={email} onChange={kit} />
      <h2>email : {email}</h2>
      <h2>Name: {name}</h2>
    </div>
  )
}

export default App