import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  // text = "new text" //Wrong way to update the state
  // setText("new text") //Correct way to update the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange = {handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Conver to Uppercase</button>
    </div>
  );
}
