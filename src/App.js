/*import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(12);  // FIX 1 → useState
  const [light, setLight] = useState(false);

  const increase = () => setNum(num + 1);   // FIX 2 → function defined
  const decrease = () => setNum(num - 1);   // FIX 3 → correct spelling + function defined

  return (
    <div>
      {num}
      <br /><br />
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;*/
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(["value1", "value2","value3"]);
  return (
    <div>
      <ul>
        {num.map((e,i)=>{

        return (
          <li key={i}>{e}</li>
        )
        })}
      </ul>
    </div>
  );
}

export default App;