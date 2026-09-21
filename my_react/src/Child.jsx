import { useState } from "react";

function App() {
  const [name, setName] = useState("kumar");

  return (
    <div>
      <h1>Hello {name}</h1>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default App;