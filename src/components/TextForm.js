import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);

  }
    const handleLoClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);

  }
  const handleClearClick = () => {
    //console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleCopy = ()=>{
    console.log('I am copy');
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  }


  const [text, setText] = useState('');
  /*setText("New Text")*/
  /*text = "New Text"; // Wrong way to change the state*/
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        {/* <label for="myBox" class="form-label">Enter Your Text</label>*/}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"> 
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").length}  Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
