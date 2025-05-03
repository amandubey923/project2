import React, { useState } from 'react';

export default function About({ mode }) {
    const [myStyle, setMyStyle] = useState({
        color: mode === 'dark' ? 'white' : 'black',
        backgroundColor: mode === 'dark' ? '#042743' : 'white'
    });

    const [btnText, setBtnText] = useState(mode === 'dark' ? "Enable Light Mode" : "Enable Dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: '#042743',
                border: '1px solid white'
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div className="container" style={myStyle}>
            {/* Accordion Section */}
            <div className="accordion my-4" id="aboutAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne"
                            style={myStyle}
                        >
                            About TextUtils
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={myStyle}>
                            <strong>TextUtils</strong> is a versatile text processing tool that helps you:
                            <ul>
                                <li>Count words and characters</li>
                                <li>Remove extra spaces</li>
                                <li>Convert text cases (UPPERCASE/lowercase)</li>
                                <li>Analyze reading time</li>
                            </ul>
                            Perfect for writers, students, and developers!
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button 
                            className="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo"
                            style={myStyle}
                        >
                            How To Use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            <ol>
                                <li>Type or paste text into the input box</li>
                                <li>Use the buttons to perform actions</li>
                                <li>Copy results with one click</li>
                                <li>Toggle dark mode for eye comfort</li>
                            </ol>
                            All processing happens in your browser - no data is sent to servers.
                        </div>
                    </div>
                </div>
            </div>

            <button 
                onClick={toggleStyle} 
                type="button" 
                className="btn btn-primary my-3"
            >
                {btnText}
            </button>
        </div>
    );
}