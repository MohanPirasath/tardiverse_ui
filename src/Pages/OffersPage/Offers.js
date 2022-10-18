import React,{useState} from 'react';

import "./offer.css";
import { useEffect } from 'react';
import ShowOffer from './ShowOffer';


export default function Offers() {
  const Api= "http://localhost:5000"


  const[Flights,setFlights]=useState([]);
  useEffect(()=>{
      fetch(`${Api}/getflights`)
      .then((data)=>data.json())
      .then((data)=>setFlights(data))
      console.log(Flights)
  },[Flights])

  return (
    <div>
     <div className='OfferCard'>
     {Flights.map((e)=>{
      return(
        <div>
          <ShowOffer Name={e.FightName}offer={e.Offers}price={e.Amount} />
        </div>
      )
     })}
     </div>
    </div>
  )
}
