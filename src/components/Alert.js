import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1); 
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{ capitalize(props.alert.type)}</strong>: { props.alert.message}
</div>
    )
}

export default Alert




// import './App.css';
// import About from './components/About';
// import Alert from './components/Alert';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type)=>{
//       setAlert({
//         message: message,
//         type: type
//       })
//       setTimeout(() => {
//         setAlert(null);
//       }, 500);
//   }
//   const toggleMode = ()=>{
//         if(mode === 'light'){
//           setMode('dark');
//           document.body.style.backgroundColor= 'black';
//           showAlert("Dark mode has been enabled", "success");
//         }
//         else{
//           setMode('light');
//           document.body.style.backgroundColor= 'white';
//           showAlert("Light mode has been enabled", "success");
//         }
//   }
//   return (
//   <>
//   <Router>
// <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
// <Alert alert = {alert}/>
// <div className="container my-3">
//   <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//           <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>
//           </Route>
//         </Switch>

// <About/>
// </div>
// </Router>
//   </>
//   );
// }

// export default App;
