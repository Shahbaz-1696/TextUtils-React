import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');


  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  // text = "new text" //Wrong way to update the state
  // setText("new text") //Correct way to update the state
  return (
    <>
    <div className="container"
    style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange = {handleOnChange}
          style={{
            backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'
          }}
          ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Conver to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3"
    style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter the text in the textbox above to preview it here."}</p>
    </div>
  </>
  );
}
