import React from 'react'
import { Container } from 'react-bootstrap';
import ContactCard from '../compontes/ContactCard';
import Navbar from "../compontes/Navbar";
import Footer from "../compontes/Footer"

function ContactUs() {

  const data = [
    {  image:'',
        title : 'خدمة العملاء',
        data : ' Mesana@gmail.com',
        Link : 'https://github.com/mrwa94?tab=projects'
    } ,
    {
        "image":'',
        "title" : 'الدعم للمشاكل التقنية ',
        "data" : '  Mesana@gmail.com' ,
        "Link": ""
    } ,
    {
        "image":'',
        "title" : 'إتصل بنا ',
        "data" : ' +966 32478904',
        "Link" : ""
    } ,
    
    {   
        "image":'',
        "title" : 'واتس أب' ,
        "data" : '+966 32478904',
        "Link" : "hello"
    } ,
    
    {
        "image":'',
        "title" : 'تويتر' ,
        "data" : ' Mesana@gmail.com' ,
        "Link" : "hello"
    }
];



  return (
    
  
    <>
    <Navbar/>
    <Container className='pt-5'>
        <h5 className='title'>  تواصل معنا </h5>
        <p className='fs-5'>عندك إستفسار أو شكوى أو إقتراح ، نسعد بذلك</p>

     
          
          {data.map ( (item)=> (
          <ContactCard image = {item.image} title = {item.title} data= {item.data} link = {item.link}/> 
          ))}
    
        </Container>
        <Footer/>
        </>

  )
}

export default ContactUs