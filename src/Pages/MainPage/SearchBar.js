
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import "./main.css";
import { useState } from 'react';
import FromSearch from "./FromSearch.js"
import ToSearch from "./ToSearch.js";
import DatePicker from 'react-date-picker';
import SelectTextFieldsDate from './DatePicker/Dates';
import SelectTextFieldsMonth from './DatePicker/Month';
import SelectTextFieldsYear from './DatePicker/Year';


export default function SearchBar({setFrom,setTo,setdate,setmon,setyear}) {
 

  // console.log("from",from,TO,"to",date)
  return (
    <div>
       <div className='makeparellel'>
        <Card  sx={{margin:"2rem",minHeight:"8rem"}}>
          <div className='SearchDiv'>
            <Card sx={{minWidth:"26rem"}}>

            <div className='SearchDetails'>
              <p className='paraSearch'>
                From
              </p>
              <h2>
                <FromSearch setFrom={setFrom} />
               
              </h2>
              </div>
            </Card>
            <Card sx={{minWidth:"26rem"}}>

            <div className='SearchDetails'>
              <p className='paraSearch'>
                To
              </p>
              <h2>
              <ToSearch ToFrom={setTo} />
              </h2>
              </div>
            </Card>
            <Card sx={{minWidth:"25rem"}}>
            <div>Date</div>
<div className='setdates'>
<SelectTextFieldsDate Todate={setdate}/>
<SelectTextFieldsMonth Tomon={setmon} />
<SelectTextFieldsYear Toyear={setyear} />
{/* <DatePicker onChange={onChange} value={value} calendarClassName="Toggle calendar" closeCalendar="false"/> */}

{/* <input type="date"  visible="false"/> */}

</div>
            </Card>
          </div>
        </Card>
        
       
       </div>
    </div>
  )
}
