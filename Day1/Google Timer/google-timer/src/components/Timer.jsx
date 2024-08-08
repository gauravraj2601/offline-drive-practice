import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [input, setInput] = useState({ sec: "", min: "", hr: "" });
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [show, setShow] = useState(false);
  const hrRef = useRef(null);
  const minRef = useRef(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d{0,2}$/.test(value)) { // Only allow up to 2 digits
        setInput({
          ...input,
          [name]: value,
        });
      }
  };

 const startTimer = () => {
  if (!isActive) {
    if (time === 0) {  // Only set time if it hasn't been set yet
      const totalSeconds = 
        parseInt(input.sec || 0) +
        parseInt(input.min || 0) * 60 +
        parseInt(input.hr || 0) * 3600;

      setTime(totalSeconds);
    }
    setIsActive(true);
    setShow(true)
  }
};



  const resetTimer = () =>{
    setIsActive(false);
    setTime(0);
    setInput({ sec: "", min: "", hr: "" })
    setShow(false)
  }

  const formatTime = (sec) =>{
    const showSec = `0${sec % 60}`.slice(-2);
    const minutes = Math.floor(sec / 60);
    const showMin= `0${minutes % 60}`.slice(-2);
    const showHr = `0${Math.floor(sec /3600)}`.slice(-2);

    return `${showHr}h  ${showMin}m  ${showSec}s`;
  }

  useEffect(() => {
    if (input.sec.length === 2 && input.min === "") {
      minRef.current.focus();
    }
  }, [input.sec]);

  useEffect(() => {
    if (input.min.length === 2 && input.hr === "") {
      hrRef.current.focus();
    }
  }, [input.min]);


  useEffect(()=>{
    let interval = null;
    if(isActive && time >0){
        interval = setInterval(()=>{
            setTime((pre)=> pre - 1);
        }, 1000);
    }
    else if (!isActive && time !== 0){
        clearInterval(interval);
    }

    return () => clearInterval(interval)
  },[isActive, time])

  console.log(input);
  console.log(time)
  return (
    <div
      style={{
        width: "40%",
        height: "200px",
        border: "1px solid gray",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "20px"
      }}
    >
      <h2>Timer</h2>
      <div></div>
      {(show && time > 0) ? (
        <div style={{fontSize:"20px", textAlign:"start"}}>{formatTime(time)} </div>
      ):(
        <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={{
            width: "30px",
            border: "none",
            borderBottom: "2px solid gray",
            outline: "none",
            fontSize:"20px",
            textAlign:"center"

          }}
          type="number"
          name="hr"
          value={input.hr}
          onChange={handleChange}
          placeholder="00"
          disabled={input.min.length !== 2}
          ref={hrRef}
        />
        <span>h</span>
        <input
          style={{
            width: "30px",
            border: "none",
            borderBottom: "2px solid gray",
            outline: "none",
            fontSize:"20px",
            textAlign:"center"

          }}
          type="number"
          name="min"
          value={input.min}
          onChange={handleChange}
          placeholder="00"
          disabled={input.sec.length !== 2}
          ref={minRef}
        />
        <span>m</span>
        <input
          style={{
            width: "30px",
            border: "none",
            borderBottom: "2px solid gray",
            outline: "none",
            appearance: "none",
            fontSize:"20px",
            textAlign:"center"
           
          }}
          type="number"
          name="sec"
          value={input.sec}
          onChange={handleChange}
          placeholder="00"
          disabled={input.hr !== "" || input.min !== ""}
        />
         <span>s</span>
      </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          gap: "10px",
          marginTop: "25px",
          padding: "20px",
        }}
      >
        {(isActive && time > 0)? (
            <button onClick={()=>setIsActive(false)}>STOP</button>
        ):(
        <button onClick={startTimer}>START</button>
        )}
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
};

export default Timer;
