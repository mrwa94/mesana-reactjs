import React from 'react'
import { Card, Container } from 'react-bootstrap'

function SupportCards() {
    const supportData = [
        {  image:'',
            title : 'خدمة العملاء',
            data : ' Mesana@gmail.com'
        } ,
        {
            image:'',
            title : 'الدعم للمشاكل التقنية ',
            data : '  Mesana@gmail.com'
        } ,
        {
            image:'',
            title : 'إتصل بنا ',
            data : ' +966 32478904'
        } ,
        
        {   
            image:'',
            title : 'واتس أب' ,
            data : '+966 32478904'
        } ,
        
        {
            image:'',
            title : 'تويتر' ,
            data : ' Mesana@gmail.com'
        }
    ];

  return (
    <Container>
     
         <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={supportData.map((values)=> values.image)} />
           <Card.Body>
               <Card.Title>{supportData.map((values) => values.title )}</Card.Title>
                  <Card.Text>{supportData.map((values)=> values.data)}</Card.Text>
           </Card.Body>
          </Card>
    </Container>
  )
}

export default SupportCards