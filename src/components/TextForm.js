import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("btn uas clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("btn uas clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleclearText = (event) => {
    setText("");
  };
  const handleCreatGmail = (event) => {
    setText(text+"@gmail.com");
  };
  const handleOnChenge = (event) => {
    //console.log("on chenge");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  
  const [text, setText] = useState("");
  //   setText("new Text");
  return (
    <>
      <div className="container" style={{color: props.mode === 'light'? 'black' : 'white'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{background: props.mode === 'light'? 'white' : 'black', color: props.mode === 'light'? 'black' : 'white'}}
            value={text}
            onChange={handleOnChenge}
            placeholder="Enter text "
            id="myBox"
            rows={8}
          />
          <button className="btn btn-primary my-4 mx-2" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={handleLoClick}>
            Lowercase
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={handleclearText}>
            Clear
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={handleCreatGmail}>
            Create Gmail
          </button>
          <button className="btn btn-primary my-4 mx-2" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-6" style={{color: props.mode === 'light'? 'black' : 'white'}}>
        <h1>Text summary</h1>
        <p>
          <b>{text.split(" ").length} words and {text.length} characters</b>
        </p>
        <p><b>{0.008 * text.split("").length} Minites read</b></p>
        <h3>prevew</h3>
        <p>{text}</p>
      </div>
    </>
  );
}