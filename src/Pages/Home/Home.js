import React, { useState } from 'react'
import { Card, Container, Navbar } from 'react-bootstrap'
import Cards from '../../compontes/Home/Cards';
//import Navbar from '../compontes/Navbar';

//import images
import image from '../../assets/images/card.png'
import WalletCard from '../../compontes/Home/WalletCard';





function Home() {
    const title = "تعرف علينا و تصفح خدماتنا";
    const subtitle = " تعرف علينا و تصفح خدماتنا تعرف علينا و تصفح خدماتناتعرف علينا و تصفح خدماتناتعرف علينا و ";
   // const [ card , setCard] = useState([]);
    // company data cards
    //Testing..
    const companydetails = [

      {   image : 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg' ,
          name : 'اسم الشركة' ,
          type : 'نوع المنتج' ,
          sale : ' العروض 20% '
       },
       {   image : {image} ,
       name : 'اسم الشركة' ,
       type : 'نوع المنتج' ,
       sale : '20%'
    },
    {   image : {image} ,
    name : 'اسم الشركة' ,
    type : 'نوع المنتج' ,
    sale : '20%'
 },
 {   image : {image} ,
 name : 'اسم الشركة' ,
 type : 'نوع المنتج' ,
 sale : '20%'
},
{   image : {image} ,
name : 'اسم الشركة' ,
type : 'نوع المنتج' ,
sale : '20%'
},
   
       { image : '' ,
         name : 'اسم الشركة' ,
         type : 'نوع المنتج' ,
         sale : '40%'
       },
   
       {  
         image : '' ,
         name : 'اسم الشركة' ,
         type : 'نوع المنتج' ,
         sale : '20%'
       },
   
       { 
          image : '' ,
          name : 'اسم الشركة' ,
          type : 'نوع المنتج' ,
          sale : '90%'
       },
   
       { 
         image : '' ,
         name : 'اسم الشركة' ,
         type : 'نوع المنتج' ,
         sale : '100% '
       },
   
     ];

  return (
     

    <Container>
   
      
        <div className='pt-5'>
            <h2>{title}</h2> 
            <p>{subtitle}</p>
        </div>


        <div className='pt-5'>
            <h5 className='pb-5'>موردينا و تجارنا</h5>
            <div className='wrapper '>
            {companydetails.map((item) => (
                <Cards image = {item.image} companyName = {item.name} typeProduct = {item.type} details = {item.sale}/>
             ))}

            </div>
              </div>

    
              <WalletCard />
             
    </Container>
  )
}

export default Home