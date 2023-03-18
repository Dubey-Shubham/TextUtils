import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,                 // here we imported router so that we can use it
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');       //whether dark mode is enabled or not iski state bana di aur state ko switch kr payenge, dark light mode k beech me
  const [alert, setAlert] = useState(null);     // alert naam ka jo state variable hai usko set krne k liye setAlert use hoga
  
  const showAlert = (message, type, greeting)=>{        //function bnaya jo initial alert ko set karega 
    setAlert({                                // is function me setalert state alert ki initial state set kr degi 
      msg:message,
      type: type,
      greet:greeting
    })
    setTimeout(()=>{                //alert ko apne app vanish karane k liye timeout lagaya
      setAlert(null);
    },1500);
  }
                                               
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = 'black';   //page ka bg bhi black ho jayega
      showAlert("dark mode has been enabled", "success", "congrats")
      document.title = 'TextUtils - Dark Mode';       // component change hone par title change ho jayega
    }
    else{
      setMode('light');
      document.body.style.background = 'white';    //page ka bg white ho jayega
      showAlert("light mode has been enabled ", "success", "congrats")
      document.title = 'TextUtils - Light Mode';           // component change hone par title change ho jayega
    }
  }
  return (
    //ye poora jsx hai
    <>
      <Router>
      {/* toggle mode call hote hi togglemode function bhi call ho jayega */}
    <Navbar title="TextUtils211" aboutText="About site" mode={mode} toggleMode={toggleMode} /> {/*yahan navbar components me dal rha hoon, aur yahan prop use kara hai title wala*/} 
      <Alert alert={alert}/>             {/*yahan bhi props use kiya hai aur isme alert state ko initialize kiya*/}
      <div className="container my-3">
      <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} > </Route>             {/*Routing k liye enclose kar diya about aur text form ko, iske alawa exact match karna hai to avoid partiall matching*/}
          <Route exact path="/" element={<TextForm heading="Enter the text to get it Analyzed" showAlert={showAlert} mode={mode}/>}> </Route>   
          {/* <TextForm heading="Enter the text to get it Analyzed" showAlert={showAlert} mode={mode}/>    jo prop alert page pe banaya tha usme object bana diya showalert naam ka */}
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
