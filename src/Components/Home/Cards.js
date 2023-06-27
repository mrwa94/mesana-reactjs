import React from 'react';
import { Card } from 'react-bootstrap';

function Cards(props) {


  return (
<div className=''>
   <Card className='item '>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.companyName}</Card.Title>
      <Card.Text>{props.typeProduct}</Card.Text>
      <Card.Text>{props.details}</Card.Text>
      <Card.Text></Card.Text>
      
    </Card.Body>
  </Card>

</div>
  
  )
}

export default Cards