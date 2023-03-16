import React from "react";

function Alert(props) {
    const capitalize = (word)=>{                                      // ye function kisi bhi word k first alphabet ko capital krne k liye hai
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    // yahan props bana diye jo app.js me initialize honge aur props.alert && kiya hai bcoz initially setAlert null hai
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">    
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}      
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
  );
}

export default Alert;
