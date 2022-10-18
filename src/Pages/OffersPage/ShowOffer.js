
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./offer.css"

export default function ShowOffer({Name,offer,price}) {
  return (
    <div>
      <div className='cardsss'>
      <Card  >
        <CardContent>
        <Typography gutterBottom variant="body2" component="div">
                Flight Name: {Name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {offer}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
        Price : {price}
        </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}
