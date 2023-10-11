import React, { useState } from 'react';

export default function TextForm(props) {
    const handleClick = ()=>{
        console.log("upppercase clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleClClick = ()=>{
        console.log("clear text is clicked")
        let newText = '';
        setText(newText)
    }
    const handleCopy = ()=>{
        console.log("copy text is clicked")
        let txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }
    const handleLoClick = ()=>{
        console.log("Lowercase clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
  const [text, setText] = useState('');
  const wordCount = text.split(" ").length;
  // You can update the 'text' state when needed, e.g., in response to user input
  // Example:
//   const handleInputChange = (event) => {
//     setText(event.target.value);
//   };

  return (
    <>
    <div>
      <h1 style={{backgroundColor: props.mode === 'light'?'white':'#226760', color: props.mode === 'light'?'black':'white'}}>{props.hd}</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#226760', color: props.mode === 'light'?'black':'white'}} value={text} onChange ={handleOnChange} id="myBox" rows="5"></textarea>

      </div>
      <div className='button1' style={{backgroundColor: props.mode === 'light'?'white':'#226760', color: props.mode === 'light'?'black':'white'}}>
      <button className = "btn btn-primary mx-3" style={{backgroundColor: props.mode === 'light'?'#E5F9F7':'#053732', color: props.mode === 'light'?'black':'white'}} onClick={handleClick}>Convert to Uppercase</button>
      <button className = "btn btn-primary mx-3"  style={{backgroundColor: props.mode === 'light'?'#E5F9F7':'#053732', color: props.mode === 'light'?'black':'white'}} onClick={handleLoClick}>Convert to Lowercase</button>
      <button className = "btn btn-primary mx-3"  style={{backgroundColor: props.mode === 'light'?'#E5F9F7':'#053732', color: props.mode === 'light'?'black':'white'}} onClick={handleClClick}>Clear Text</button>
      <button className = "btn btn-primary mx-3"  style={{backgroundColor: props.mode === 'light'?'#E5F9F7':'#053732', color: props.mode === 'light'?'black':'white'}} onClick={handleCopy}>Copy Text</button>
      </div>

    </div>
    <div className = "container my-2" style={{backgroundColor: props.mode === 'light'?'dark':'light', color: props.mode === 'light'?'black':'white'}}>
    <h2>Your Text Summary</h2>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    
    {wordCount === 1 ? (
                    <p>0 Minutes read</p>
                ) : (
                    <p>{0.008 * wordCount} Minutes read</p>
                )}
    <h3>Preview</h3>
    <p> {text.length>0 ? text:"Enter something in Text Area above to preview it"} </p>
    </div>
    </>
  );
}

