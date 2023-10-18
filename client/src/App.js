import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


 
function App() {

  //notes
  // Memory Storage
  const [phoneNumberState, setPhoneNumber] =useState("");
  const [messageState, setMessage] =useState("");
  // const[Error, setError] =useState("");

  // get the value that was typed!
  const updatePhoneNumber = (e) => {
    console.log({value:e.target.value});
    // save that value into memory
    setPhoneNumber(e.target.value);
  }
  const updateMessage = (e) => {
    console.log({value:e.target.value});
    setMessage(e.target.value);
  }

  const submitText =()=>{
    // setError(null);
    // setSuccessfullResponse(null);

    console.log("Button was pressed");

    // collect the data from the State
    // send the data to the backend

    axios.post("http://localhost:3001/create-customer-text",{
      // axios.post("http://localhost:3000/create-customer-text",{
      phoneNumber:phoneNumberState,
      message:messageState
    })
    // .then((response)=>{
    //   console.log("MESSAGE RETURNED: ", response.data);
    //   setSuccessfullResponse(response.data);
    // })
    // .catch((e) =>{
    //   setError(e.message);
    // });

    // collect data
  };
  //do the same thing[const unas, or function]
  //function submit() {}
  return (
    <div className="App">
      <header className="App-header">
       <h1>Marketing Campaign</h1>
       <p>Phone number</p>
       <input value={phoneNumberState} placeholder='###-###-#####' onChange={updatePhoneNumber}></input>
       <p>Message</p>
       <input value={messageState} placeholder='Enter a message!' onChange={updateMessage}></input>
      <div>
      <button onClick={()=>submitText()}>Send</button>
      </div>
      
      </header>
    </div>
  );
}

export default App;
