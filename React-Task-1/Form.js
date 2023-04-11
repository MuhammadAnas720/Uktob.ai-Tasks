import React, { useState } from 'react';
import './Form.css';

function Form() {
  // Declare state variables for inputText, number, and outputText
  const [inputText, setinputText] = useState('');
  const [number, setNumber] = useState('');
  const [outputText, setOutputText] = useState('');

  // Define a function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Check if both inputText and number are not empty
    if (inputText && number) {
      let output = '';
      // Set the outputText state variable to the generated output
      for (let i = 0; i < number; i++) {
        output += inputText + ' ';
      }
      setOutputText(output);
    } else {
      // If either inputText or number is empty, show an alert
      alert('Please fill out both fields.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        {/* Input Text field */}
        <label>
          <h2>Input Text :</h2>
          <input type="text" placeholder="Input Text" name="Text" value={inputText} onChange={(e) => setinputText(e.target.value)} />
        </label>
        <br />
        {/* Number field */}
        <label>
          <h2>Number :</h2>
          <input type="number" placeholder="Number" name="Number" value={number} onChange={(e) => setNumber(e.target.value)} />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Submit</button>
        <label>
          <h2 class="output-heading">Output :</h2>
        </label>
        {/* Output div */}
        <div class="output">
          {/* If outputText is not empty, display it */}
          {outputText && <p>{outputText}</p>}
        </div>
      </form>
    </div>
  );
}

export default Form;