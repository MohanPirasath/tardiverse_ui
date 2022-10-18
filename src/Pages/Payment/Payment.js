
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Payment.css'
import { Button } from '@mui/material';

export  const Api= "http://localhost:5000"

export default function Payment() {
    const {id} = useParams() 
    const [Flight,setFlights]=useState([])
 useEffect(() => {
    fetch(`${Api}/getflight/${id}`)
    .then((data)=>data.json())
    .then((data)=>setFlights(data))
    console.log(Flight)
 
 }, [id,Flight]);



 const handleSubmit1 =async (e)=>{
  try{
  e.preventDefault();
  if(Flight.Amount<1){
  alert("please enter valid amount");
  }else{
  // alert("please enter valid amount");


      var options = {
          key: "rzp_test_QnLDWaA7vOt7FJ",
          key_secret:"sD2Opg2yi6kajAPr52o2Zk9W",
          amount: Flight.Amount*100,
          // amount: Flight.Amount*100,
          currency:"INR",
          name:"Fly-HiG",
          description:"for testing purpose",
          handler: function(response){
            alert(response.razorpay_payment_id);
          },
      prefill: {
        name:"Mohan10",
        email:"mohan32rc@gmail.com",
        contact:"790489543"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#3399cc"
      }

    };
    const pay = new window.Razorpay(options);
  //   const pay = new window.Razorpay(        alert("please enter valid amountjj"));
    pay.open();
  }
}catch{
  console.log("error da",Error)
}
}







  return (
    <div>
        <h3>
      Payment page

        </h3>
       <div className='makeFirst'>

  <h4 className='gray'>

      <u> Booking Ticket</u>
  </h4>
  <h3 className='gray'>
    Name of the Flight:<span className='ans'> &nbsp; {Flight.FightName}</span>
  </h3>
  <h3 className='gray'>
    Departure From:<span className='ans'> &nbsp; {Flight.From}</span>
  </h3>
  <h3 className='gray'>
    Departure Timing :<span className='ans'> &nbsp; {Flight.FromTime}</span>
  </h3>
  <h3 className='gray'>
    Arriving To :<span className='ans'> &nbsp; {Flight.To}</span>
  </h3>
  <h3 className='gray'>
    Arrival Timing :<span className='ans'> &nbsp; {Flight.ToTime}</span>
  </h3>
  <h3 className='gray'>
    Total Travelling hours :<span className='ans'> &nbsp; {Flight.Timing}</span>
  </h3>
  <h3 className='gray'>
    Offers :<span className='ans'> &nbsp; {Flight.Offers}</span>
  </h3>
  <h3 className='gray'>
    Total Amount :<span className='ans'> &nbsp; {Flight.Amount}</span>
  </h3>
  <Button variant='contained' color="success" onClick={handleSubmit1}>
    Pay Bill
  </Button>
       </div>
     
        
       
    </div>
  )
}
