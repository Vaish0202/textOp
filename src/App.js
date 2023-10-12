import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import About from './components/About';

import { useState } from 'react';
import Alerts from './components/Alerts';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//  Link
// } from "react-router-dom";

// import about from './components/about';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  //alert is object
  const [alert, setAlert] = useState(null);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#226760';
      shwAlert("Dark mode has been enabled", "Success")
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      shwAlert("Light mode has been enabled", "Success")
    }
  }

  const shwAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

  }
  return (

<>
{/* <Router> */}

<div>

<Navbar title="TextOP" mode={mode} toggleMode={toggleMode} />
<strong><Alerts alert={alert} /></strong>
<div className="container my-3">
<TextForm mode={mode} hd="Enter the text to analyze below" />

{/* <Switch>
    <Route path="/About">
      <About />
    </Route>
    <Route path="/">
    <TextForm mode={mode} hd="Enter the text to analyze below" />
    </Route>
    
  </Switch> */}

  
  

</div>


</div>

{/* </Router> */}
</>
  );
}

export default App;
