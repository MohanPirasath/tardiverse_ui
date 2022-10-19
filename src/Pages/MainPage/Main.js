

import React,{useState} from 'react'
import { useEffect } from 'react'
import ShowFlights from './ShowFlights';
import "./main.css";
import SearchBar from './SearchBar';
import Button from '@mui/material/Button';


// export  const Api= "https://flightbooking-applicaton.herokuapp.com"
export  const Api= "https://flightbooking-applicaton.herokuapp.com"

export default function Main() {
    const[Flights,setFlights]=useState([]);
    const[SerachFlights,setSearchFlights]=useState([]);
    const [from,setFrom]=useState("chennai")
    const [TO,setTo]=useState("Goa")
    const name="gh"
    const nae="ghs"
    // const [value, onChange] = useState(new Date());
    const[date,setdate]=useState()
    const[month,setmon]=useState()
    const[year,setyear]=useState()
    useEffect(()=>{
        fetch(`${Api}/getflights`)
        .then((data)=>data.json())
        .then((data)=>setFlights(data))
        console.log(Flights,"to",SerachFlights)
    },[])

    const SearchFlight=()=>{
        fetch(`${Api}/getflights/${from}$${TO}`)
        .then((data)=>data.json())
        .then((data)=>setSearchFlights(data))
    }


  return (
    <div>
        <h3> Booking a Flights is become more easy </h3>
        <div>
            <SearchBar setFrom={setFrom} setTo={setTo} setdate={setdate} setmon={setmon} setyear={setyear} />
        </div>
        <div>
            <Button variant='contained' sx={{marginBottom:".6rem"}} color="success" onClick={()=>SearchFlight()}>
                Search Flight
            </Button>
        </div>{SerachFlights !== [] ? 
        <div className='card'>
        {
        SerachFlights.map((e)=>{
            return(
                <div>
                    <div className='cards'>

                    <ShowFlights id={e._id}name={e.FightName}from={e.From}fromTime={e.FromTime}to={e.To}toTime={e.ToTime}offers={e.Offers}timing={e.Timing}url={e.Url} price={e.Amount} />
                    </div>
                </div>
            )
        })
     }
        </div>:""}
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
