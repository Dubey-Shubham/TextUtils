import React, { useState } from "react"; //imported hook here

export default function TextForm(props) {
  const handleUpClick = () => {
    // ye wo func hai jo button click hone par fire hua hai
    console.log("Uppercase was clicked"); //ye console me likh k a jayega, ye sirf pta karne k liye hai ki fun working or not
    let newText = text.toUpperCase(); //yahan text ko upper case me kar dia
    setText(newText); //jaise hi user button click karega state change ho jayegi aur uppercase converted text likh k a jayega
    props.showAlert("Converted to upper case! ", "success");
  };
  const handleloClick = () => {
    // ye wo func hai jo button click hone par fire hua hai
    console.log("Uppercase was clicked"); //ye console me likh k a jayega, ye sirf pta karne k liye hai ki fun working or not
    let newText = text.toLowerCase(); //yahan text ko lower case me kar dia
    setText(newText); //jaise hi user button click karega state change ho jayegi aur uppercase converted text likh k a jayega
    props.showAlert("Converted to lower case! ", "success");   //yahan bhi prop use kiya to change state
  };

  const handleOnChange = (event) => {
    //text box me kuch bhi change hone par ye fire hoga, isme event bhi pass kiya hua hai
    console.log("On Change");
    setText(event.target.value); //is se settext ki state user change kr payega, mtlb wo bhi likh payega
  };
  const [text, setText] = useState(""); //usestate hook ki help se text aur settext state set kar diye
  // text= "new text";   //wrong way to change state
  // setText("new text"); //correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="floatingTextarea">Leave a Comment here</label> */}
          {
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
              style={{background: props.mode ==='dark' ? 'grey' : 'white', color: props.mode ==='dark' ? 'white' : 'black'}} //here color is color of words we will write and bg is color of box
            ></textarea> /*kuch bhi change krne par function call ho jayega handleonchange wala*/
          }
        </div>
        {
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Upper Case
          </button> /*onclick function call ho jayega jaise button pe click karenge*/
        }
        {
          <button className="btn btn-primary mx-2" onClick={handleloClick}>
            Convert to Lower Case
          </button> /*onclick function call ho jayega jaise button pe click karenge*/
        }
      </div>

      {/* neeche bhi co nditional statement lagayi hai so that below div ka mode bhi change kr sake */}
      <div className="container my-3" style={{color: props.mode ==='dark' ? 'white' : 'black'}}>    
        <h1>your text summary</h1>
        {
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p> /*words aur alphabet calculate krne k liye*/
        }
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter Some Text in the box" }
        </p>
      </div>
    </>
  );
}
