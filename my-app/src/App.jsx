import { useState } from 'react';

function App() {
  // React state example
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello React 🚀</h1>
      <p>You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
