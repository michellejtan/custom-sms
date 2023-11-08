import React, {useEffect, useState } from 'react';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

const MessageTable= () =>{

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

  //do the same thing[const unas, or function]
  //function submit() {}
  const renderTableRows=()=>{
    return sentMessage.map((message) =>{
    return(
      <TableRow key={message.phoneNumber+message.message}>
      <TableCell>{message.phoneNumber}</TableCell>
      <TableCell align='right'>{message.message}</TableCell>
      <TableCell align='right'>{message.createdAt}</TableCell>
      </TableRow>
    );
    });
  };
  const retrieveMessages= () =>{  
    axios.get("http://localhost:3000/customer-texts")
  .then((response)=>{
    // console.log(response.data);
    setSentMessage(response.data);
  })
  .catch((e)=> {console.log(e);})
}
    return(
        <>
        <Button onClick={retrieveMessages}> Refresh </Button>
<TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Phone Number</TableCell>
                  <TableCell align="right">Message</TableCell>
                  <TableCell align="right">Date Sent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTableRows()}</TableBody>
            </Table>
          </TableContainer>
          </>
    );


};

export default MessageTable;