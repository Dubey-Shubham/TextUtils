import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  //yahan functions me props le liya
  return (
    // yahan pe template literal use kiya hai jis se ham props use kar sake isme
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {
          <a className="navbar-brand" href="/">
            {props.title}
          </a> /*aise prop ko title me use kar diya*/
        }
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                 {props.aboutText}    {/*title kya dalna hai iski jagah uska prop hai app.js me navbar me prop pass hoga*/}
              </a>
            </li>
          </ul>
             <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark' : 'light'}`}>  
             {/* upar bhi hamne template literal use kiya aur ternary operator laga diya which is saying ki agar props.mode light to dark ho jaye nhi to light ho jaye */}
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}            //yahan ek prop pass kiya hai click krne par toggleMode call ho jayega
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode ==='light' ? "Enable Dark Mode": "Enable light Mode"}
              </label>
            </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  //object sa bana dete hai jisme premention hota type of prop we will use jaise string number etc
  title: PropTypes.string.isRequired, //iska main purpose is to avoid any mistake
  aboutText: PropTypes.string.isRequired, //iska mtlb isme value daalna compulsary hai, agar default value hai to error will not show
};

Navbar.defaultProps = {
  //by default value ye rahegi title me agar prop daala nhi ya phir bhool gye
  title: "set title here",
  aboutText: "About text here",
};
