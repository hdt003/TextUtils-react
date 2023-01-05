// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
//hooks useState
import { useState } from 'react';
//to use Routes
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route
//   } from "react-router-dom";


function App() {
    const [darkMode,setDarkMode]=useState("light");
    const [aalert,setAlert]=useState("Light Mode Enabled")
    //to change mode
    const togglemode=()=>{
        if(darkMode==="dark")
        {
            setDarkMode("light")
            document.body.style.backgroundColor="white";
            document.body.style.color="black"
            setAlert("dark Mode Enabled")
            document.title="TextUtils - Light Mode"
        }
        else
        {
            setDarkMode("dark")
            document.body.style.backgroundColor="rgb(43, 41, 41 )";
            document.body.style.color="white"
            setAlert("Light Mode Enabled")
            document.title="TextUtils - Dark Mode"
        }
    }

    ///////
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    
    function alertfunc() {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert">' + aalert + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      alertPlaceholder.appendChild(wrapper)
    }
    /////
    //to clear alert box every 6 seconds
    function clearBox(elementID)
    {
        document.getElementById(elementID).innerHTML = "";
    }
    setTimeout(() => {
        console.log("hello");
        clearBox('liveAlertPlaceholder')
      }, 6000);

    return (
        //jsx
        //single tag ne <xyz/> vade close karvu
        <>
        {/* --------uncomment below-------- */}
        {/* <Router> */}
        {/* here title is props (argument jevu function nu*/}
        <Navbar title="TextUtils" mode={darkMode} togglemode={togglemode} alert={alertfunc} />
        {/* switch must be nested in Router tag */}
        {/* below used to create single page website */}
     
       
        
        
        <div className="container mt-5 p-2">
            {/* alert place */}
            <div className='mt-5 ' id="liveAlertPlaceholder"></div>
            {/* ---uncomment below--- */}
            {/* <About/> */}
            {/* ------------------uncomment below-------------- */}
            {/* <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/" element={<TextForm mode={darkMode}/>} />
            </Routes>  */}
        </div>
        <br />
        {/* --------uncomment below-------- */}
        {/* </Router> */}
        </>
    );
}

export default App;