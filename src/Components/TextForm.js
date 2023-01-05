import React ,{useState}from 'react'
//useState is a hook

export default function TextForm(props) {

    const handleOnClickUpper = ()=>{
        console.log("button pressed and Changed to upper case ")
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnClickLower = ()=>{
        console.log("button pressed and Changed to lower case ")
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleOnClickClear = ()=>{
        console.log("button pressed and cleared text ")
        let newText="";
        setText(newText);
    }

    //to type in textarea
    const handleOnChange=(event)=>{
        console.log("On change")
        setText(event.target.value)
    }

    const copyHandler=()=>{
      const txt=document.getElementById("exampleFormControlTextarea1")
      txt.select();
      navigator.clipboard.writeText(txt.value);
    }

    const [text,setText]=useState("This is default text")

  return (
    <div>
        <div className="container mt-4">
      <div className="mb-3">
        {/* replace for with htmlFor */}
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter String in area given below</label>
        <textarea className={`form-control border-3 rounded-1 bg-${props.mode==="light"?"light":"secondary"} text-${props.mode==="light"?"dark":"white"}`} id="exampleFormControlTextarea1" rows="4" value={text} onChange={handleOnChange}></textarea>
        <br />
        <button className="btn btn-primary mx-3" onClick={handleOnClickUpper}>UpperCase</button>

        <button className="btn btn-primary mx-3" onClick={handleOnClickLower}>LowerCase</button>
        <button className="btn btn-primary mx-3" onClick={handleOnClickClear}>Clear</button>

        <button className="btn btn-primary mx-3" onClick={copyHandler}>Copy To clipboard</button>



      </div>
        <h2>Your Text summary:</h2>
        <div className="container mx-2">
      <h5>length of text is {text.length}</h5>
      <h5>no of words in text is {text.split(" ").length}</h5>
        <h5>Time required to read the text string is {0.008*text.split(" ").length} minutes</h5>
        </div>

        <h3>preview</h3>
        <div className="container mx-2">
        <h6>{text.length>0?text:"Enter Some text to preview here"}</h6>
        </div>
    </div>
    </div>

  )
}
