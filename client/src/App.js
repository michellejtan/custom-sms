import { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


 
function App() {

  //notes
  // Memory Storage
  const [phoneNumberState, setPhoneNumber] =useState("");
  const [messageState, setMessage] =useState("");
  const[error, setError] =useState(null);
  const[successfullResponse, setSuccessfullResponse] =useState(null);
  const[sentMessage,setSentMessage]= useState([]);

  // IF don't put empty array, get call everytime 
  useEffect(()=>{
    // console.log("CALLING USEEFFECT:::");
    axios.get("http://localhost:3000/customer-texts")
    .then((response)=>{
      // console.log(response.data);
      setSentMessage(response.data);
    })
    .catch((e)=> {console.log(e);})
  }, []); //from response into, use setSentMessage

  const retrieveMessages = async()=>{
    // console.log("CALLING USEEFFECT:::");
    await axios.get("http://localhost:3000/customer-texts")
    .then((response)=>{
      setSentMessage(response.data);
    });
  };

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
    // everytime to click button, send information is gonna reset these 2 fields to an empty value
    // setError(null);
    // setSuccessfullResponse(null);

    console.log("Button was pressed");

    // collect the data from the State
    // send the data to the backend

    // main port
    axios.post("http://localhost:3000/create-customer-text", {
      // axios.post("http://localhost:3000/create-customer-text",{
      phoneNumber:phoneNumberState,
      message:messageState
    })
    .then((response)=>{
      // console.log(response);
      console.log("MESSAGE RETURNED: ", response.data);
      setSuccessfullResponse(response.data);
      retrieveMessages();
    })
    .catch((e) =>{
      setError(e.message);
    });

    // collect data
  };

  // get all the messages


  //iteration over the array
  const renderMessage= () =>{
    return sentMessage.map((message, index) =>{
      console.log({message});
      return(
        // empty Fragment, JS doesn't let you return 3 nodes at the same level
        <>
        <div> Record: {index}</div>
        <ol>
      <li> Message: {message.message}</li>
      <li> Phone Number: {message.phoneNumber}</li>
      <li> Sent Date: {message.createdAt}</li>
      </ol>
      </>
      )
    });
  };
  //do the same thing[const unas, or function]
  //function submit() {}
  return (
    <div className="App">
      {error && <div>ERROR SENDING THE DATA: {error}</div>}
      {successfullResponse && <div>The message was {successfullResponse}</div>}
      <header className="App-header">
       <h1>Marketing Campaign</h1>
       <p>Phone number</p>
       <input value={phoneNumberState} placeholder='###-###-#####' onChange={updatePhoneNumber}></input>
       <p>Message</p>
       <input value={messageState} placeholder='Enter a message!' onChange={updateMessage}></input>
      <div>
      <button onClick={()=>submitText()}>Send</button>
      </div>
      <div>

        <h1>Sent Messages:</h1>
        <div>{ /* Show the list of the message */}</div>
        <div>{ renderMessage() }</div>

      </div>
      </header>
    </div>
  );
}

export default App;
