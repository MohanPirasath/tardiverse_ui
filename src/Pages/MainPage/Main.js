

import React,{useState} from 'react'
import { useEffect } from 'react'
import ShowFlights from './ShowFlights';
import "./main.css"


export  const Api= "http://localhost:5000"

export default function Main() {
    const[Flights,setFlights]=useState([]);
    useEffect(()=>{
        fetch(`${Api}/getflights`)
        .then((data)=>data.json())
        .then((data)=>setFlights(data))
        console.log(Flights)
    },[Flights])
  return (
    <div>
        <h3> Booking a Flights is become more easy </h3>
        <div className='card'>

     {
        Flights.map((e)=>{
            return(
                <div>
                    <div className='cards'>

                    <ShowFlights id={e._id}name={e.FightName}from={e.From}fromTime={e.FromTime}to={e.To}toTime={e.ToTime}offers={e.Offers}timing={e.Timing}url={e.Url} price={e.Amount} />
                    </div>
                </div>
            )
        })
     }
        </div>

    </div>
  )
}
