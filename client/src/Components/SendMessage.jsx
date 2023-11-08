import { useState } from "react";
import axios from "axios";
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const SendMessage=()=>{

    // Memory Storage
    const [phoneNumberState, setPhoneNumber] =useState("");
    const [messageState, setMessage] =useState("");
    const[error, setError] =useState(null);
    const[successfullResponse, setSuccessfullResponse] =useState(null);
    const[sentMessage,setSentMessage]= useState([]);

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
    setError(null);
    setSuccessfullResponse(null);

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
        setPhoneNumber("");
        setMessage("");
      // console.log(response);
      console.log("MESSAGE RETURNED: ", response.data);

      setSuccessfullResponse(response.data);
      // everytime to click button, send information is gonna reset these 2 fields to an empty value

    //   retrieveMessages();
    })
    .catch((e) =>{
      setError(e.message);
    });
};
    return(
       <> {error && <div>ERROR SENDING THE DATA: {error}</div>}
       {successfullResponse && <div>The message was {successfullResponse}</div>}

          <Grid container display="flex" flexDirection="column" rowGap={2}>
            <Grid display="flex">
              <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={phoneNumberState}
              onChange={updatePhoneNumber}
              fullWidth
              />
            </Grid>
            <Grid display="flex">
              <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              value={messageState}
              onChange={updateMessage}
              multiline
              rows={4}
              fullWidth
              />
            </Grid>
            <Grid display="flex" justifyContent="flex-end">
              <Button variant="contained" onClick={()=>submitText()}>
                Send message
              </Button>
            </Grid>
          </Grid>
          </>
    )
};
export default SendMessage;