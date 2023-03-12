import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Cards from '../compontes/Cards';


function Home() {
    const title = "تعرف علينا و تصفح خدماتنا";
    const subtitle = " تعرف علينا و تصفح خدماتنا تعرف علينا و تصفح خدماتناتعرف علينا و تصفح خدماتناتعرف علينا و ";
    const [ card , setCard] = useState([]);
  return (
    <Container>
        <div>
            <h2>{title}</h2> 
            <p>{subtitle}</p>
        </div>


        <div className='pt-5'>
            <p>موردينا و تجارنا</p>
            <Cards />
        </div>
    </Container>
  )
}

export default Home