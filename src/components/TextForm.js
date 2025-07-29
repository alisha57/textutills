import React, {useState} from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log("Uppercase was clicked"+ text);
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success")
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked"+ text);
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success")
  }
  const handleClearClick=()=>{
    console.log("Text is cleared"+ text);
    let newText= '';
    setText(newText)
    props.showAlert("Text is cleared!", "success")
  }
  const handleCopyClick=()=>{
   navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Text is copied: " + text);
      props.showAlert("Copied to clipboard", "success")
    })
  }
  const handleExtraSpaces = ()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed!", "success")
  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
    // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <buttun className="btn btn-primary mx-1 " onClick={handleUpClick} >Convert to Uppercase</buttun>
      <buttun className="btn btn-primary mx-1 " onClick={handleLoClick} >Convert to Lowercase</buttun>
      <buttun className="btn btn-primary mx-1 " onClick={handleClearClick} >Clear Text</buttun>
      <buttun className="btn btn-primary mx-1 " onClick={handleCopyClick} >Copy Text</buttun>
      <buttun className="btn btn-primary mx-1 " onClick={handleExtraSpaces} >Remove Extra spaces</buttun>
    </div>
    <div className="contaier my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
    <p>{text.split(" ").length} words {text.length} characters</p>
    <p>It will take {0.008 * text.split(" ").length} minutes to  read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
