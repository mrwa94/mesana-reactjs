import React from 'react'
import { Container } from 'react-bootstrap';
import ContactCard from '../../compontes/ContactUs/ContactCard';


//icons
import {AiFillTwitterSquare } from 'react-icons/ai'
import {FaInstagramSquare}  from 'react-icons/fa'



function ContactUs() {

  const data = [
    {  image: <AiFillTwitterSquare/>,
        title : 'خدمة العملاء',
        data : ' Mesana@gmail.com',
        Link : 'https://github.com/mrwa94?tab=projects'
    } ,
    {
        image :<FaInstagramSquare/>,
        title : 'الدعم للمشاكل التقنية ',
        data : '  Mesana@gmail.com' ,
        Link: ""
    } ,
    {
        "image":'',
        "title" : 'إتصل بنا ',
        "data" : ' +966 32478904',
        "Link" : ""
    } ,
    { image : <AiFillTwitterSquare/>,
       'title': 'انستقرام',
       'data': '@mesana',
        'Link': ''
    },
    
    {   
        "image":'',
        "title" : 'واتس أب' ,
        "data" : '+966 32478904',
        "Link" : "hello"
    } ,
    
    {
        "image": <AiFillTwitterSquare/>,
        "title" : 'تويتر' ,
        "data" : ' Mesana@gmail.com' ,
        "Link" : "hello"
    }
];



  return (
    
  
    <>
 
    <Container className='pt-5'>
        <h5 className='title'>  تواصل معنا </h5>
        <p className='fs-5'>عندك إستفسار أو شكوى أو إقتراح ، نسعد بذلك</p>

     
          
 
          <div className='row '>
          {data.map ( (item)=> (
          <ContactCard  className=''  image = {item.image} title = {item.title} data= {item.data} link = {item.link}/> 
          ))}
          </div>
        
        
          
    
        </Container>
      
        </>

  )
}

export default ContactUs