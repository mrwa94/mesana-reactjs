import React from 'react';
import '../styles/App.css'
import { Card } from 'react-bootstrap';

function Cards(props) {

  return (

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.companyName}</Card.Title>
      <Card.Text>{props.typeProduct}</Card.Text>
      <Card.Text>{props.details}</Card.Text>
      <Card.Text></Card.Text>
      
    </Card.Body>
  </Card>
  )
}

export default Cards