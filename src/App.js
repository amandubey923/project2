import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => setAlert(null), 1500);
    };

    const toggleMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        document.body.style.backgroundColor = newMode === 'dark' ? '#042743' : 'white';
        showAlert(`${newMode} mode enabled`, "success");
    };

    return (
        <Router>
            <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <div className="container my-3">
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <TextForm 
                            showAlert={showAlert} 
                            heading="Enter the text to analyze below" 
                            mode={mode}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;