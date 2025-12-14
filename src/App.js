/*import React, { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [savedTimes, setSavedTimes] = useState([]);
  const [targetTime, setTargetTime] = useState(null);

  const format = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(Math.floor(s % 60)).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  };

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (targetTime !== null && prev + 1 >= targetTime) {
            setRunning(false);
            return targetTime;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running, targetTime]);

  const handleSave = () => {
    setSavedTimes((prev) => [...prev, format(seconds)]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>{format(seconds)}</h1>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
      <button onClick={handleSave}>Save</button>

    
      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          placeholder="Enter stop time (seconds)"
          onChange={(e) => setTargetTime(Number(e.target.value))}
        />
      </div>
      <h3>Saved Times:</h3>
      <ul>
        {savedTimes.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App; 
import React, { useEffect, useState } from 'react'

function App() {
  const [seconds,setSeconds]=useState(0)
  const [Pause,setPause]=useState(false)
  const [timeStamp,setTimeStamp]=useState([])
  const [in_s,setIn_s]=useState('')
  const [t_s,setT_s]=useState(0)
  const format=(s)=>{
    let h=String(Math.floor(s/3600)).padStart(2,"0")
    let m=String(Math.floor((s%3600)/60)).padStart(2,"0")
    let sec=String(Math.floor((s%3600)%60)).padStart(2,"0")
    return `${h}:${m}:${sec}`
  }

  
  useEffect(()=>{
    let interval;
    if(!Pause){
      interval=setInterval(()=>{
      setSeconds(prev=>prev+1)
      
    },1000)

    
    }

    return ()=> clearInterval(interval)
   
  },[Pause])

  const save=(s)=>{
   let s_t= format(s)
   setTimeStamp(prev=>[...prev,s_t])
  }

  const target=(e)=>{
    setIn_s(e.target.value)
    
  }
  useEffect(()=>{
    let t=in_s.split(":")
    let [hr,mi,se]=t
    hr=Number(hr)*3600
    mi=Number(mi)*60
    se=Number(se)
    setT_s(hr+mi+se)
    console.log(t_s)
  },[in_s])
  
  useEffect(()=>{
    if(seconds==t_s){
      setPause(true)
      }
  },[seconds])
  
  return (
    <div>{format(seconds)}
      <button onClick={()=>setPause(!Pause)}>Pause</button>
      <button onClick={()=>save(seconds)}>Save</button>
      

      <input value={in_s} 
      onChange={(e)=>target(e)}
      />
      <div>
        {timeStamp.map((t)=>(
          <h3 key={t}>{t}</h3>
        ))}
      </div>
    </div>
  )
}

export default App 

 import React, { useState } from "react";
import { jsx } from "react/jsx-runtime";

function App() {
  // which screen
  const [showLogin, setShowLogin] = useState(false);

  // register data (saved user)
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // login form inputs
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      alert("Please fill all register fields");
      return;
    }
    alert("Registered successfully!");
    setShowLogin(true); // go to login page
  };

  const handleLogin = (e) => {
    e.preventDefault();
  

    if (
      loginEmail.trim() === regEmail.trim() &&
      loginPassword === regPassword
    ) {
      alert("Login success!");
    } else {
      alert("Login failed: wrong email or password");
    }
  };

  const inputStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    marginBottom: "10px",
    outline: "none",
  };

  const buttonStyle = {
    padding: "8px",
    marginTop: "10px",
    color: "white",
    backgroundColor: "green",
    border: "none",
    cursor: "pointer",
  };

  // ---------- REGISTER PAGE ----------
  if (!showLogin) {
    return (
      <div style={{ maxWidth: "300px", margin: "20px auto" }}>
        <h3>Register</h3>
        <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>
          <label>Name:</label>
          <input
            type="text"
            style={inputStyle}
            value={regName}
            onChange={(e) => setRegName(e.target.value)}
          />


          <label>Email:</label>
          <input
            type="email"
            style={inputStyle}
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            style={inputStyle}
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
          />

          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Already have account?{" "}
          <button type="button" onClick={() => setShowLogin(true)}>
            Go to Login
          </button>
        </p>
      </div>
    );
  }

  // ---------- LOGIN PAGE ----------
  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
      <h3>Login</h3>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
        <label>Email:</label>
        <input
          type="email"
          style={inputStyle}
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          style={inputStyle}
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        New user?{" "}
        <button type="button" onClick={() => setShowLogin(false)}>
          Go to Register
        </button>
      </p>
    </div>
  );
}

export default App;

import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";

function App() {
  return (
    <div>
    
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;*/
import React, { useReducer } from 'react'

let initialstate = 0

const INC_DC = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialstate
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(INC_DC, initialstate)

  return (
    <div>
      {state}
      <button onClick={() => dispatch('increment')}>increment</button>
      <button onClick={() => dispatch('decrement')}>decrement</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  )
}

export default App


