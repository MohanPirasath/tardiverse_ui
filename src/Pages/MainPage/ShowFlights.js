

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./main.css";
import { useNavigate } from 'react-router-dom';

export default function ShowFlights({id,name,from,fromTime,to,toTime,offers,timing,url,price}) {
const navigate = useNavigate()

//  const Booking= (id)=>{

//     navigate(id)

    

//  }


  return (
    <div>
      <div className='gaps'>
      <Card >
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
         <div className='makeAlin'>
            <div>
                <p className="Time">{fromTime} &nbsp;</p>
                {/* <p className="Time">{from} &nbsp;</p> */}
            
            </div>
            <div><p className="Timing"> &nbsp;-{timing}-&nbsp; </p></div>
            <div>
                <p className="Time">&nbsp;{toTime}&nbsp;</p>
                {/* <p className="Time">&nbsp;{to}&nbsp;</p> */}
            </div>
         </div>
         <div className='makeAlins'> 
            <div><p className="Tim">FROM: {from} &nbsp;</p></div>
            {/* <div><p className="Timin"> &nbsp;-M T W T F S S-&nbsp; </p></div> */}
            <div><p className="Tim">TO: &nbsp;{to}&nbsp;</p></div>
          </div>
          <h3>Ticket Price : &nbsp; {price}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {offers}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
      </CardActions>
      <Button variant='contained' sx={{marginBottom:"1rem"}} onClick={()=>navigate(id)} >book Ticket</Button>

    </Card>

      </div>
    </div>
  )
}
