import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <div className='w-full flex justify-center align-middle items-center '>
            <img src={props.image} alt='' className=' h-36'/>
        </div>
        {/* <CardMedia
          component="img"
          height="100"
          image={props.image}
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
            <br />
            ₹{props.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>
              {props.desc}
          </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}