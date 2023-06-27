import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Paying from './Paying'
import PaymentConfirmation from './PaymentConfirmation'
import { Button, Form, FormLabel } from 'react-bootstrap';

const SelectLoction = () => {

    const [step, setStep] = useState(0);

  {/* when clicked the button , show the new location div .. */}
    const [show , setshow] = useState(false);
    const addNewLocation = ()=> (
        <Form className='pt-4 w-75 '>
             
      <Form.Group className="mb-4" controlId="">
        <Form.Label>الاسم </Form.Label>
        <Form.Control type="email" placeholder="اسم الشركة " />
      </Form.Group>

      <Form.Group className="mb-4" controlId="">
        <Form.Label>رقم التواصل </Form.Label>
        <Form.Control type="email" placeholder="+966" />
      </Form.Group>

      <Form.Group className="mb-4 row" controlId="">
        <div className='col'>
        <Form.Label> المنطقة </Form.Label>
        <Form.Control type="email" placeholder="المدينة المنورة" />
        </div>
       
       <div className='col mb-4'>
       <Form.Label>  المدينة</Form.Label>
        <Form.Control type="email" placeholder="ينبع" />
       </div>
       <div className='col'>
       <Form.Label> الرمز البريدي </Form.Label>
        <Form.Control type="email" placeholder="Zip Code" />
       </div>
      </Form.Group>
      </Form>
    );
 

    const stepShow = () => {
        if (step === 0) {
          return (<SelectLoction />);
        }
        else if (step === 1 ){
          return (<Paying />);
        }
        else {
            return (<PaymentConfirmation/>)
        }
      }

    
  return (
    <div className='px-5 pt-5 '>
        {/* <h1>{steps[step]}</h1> */}

        {/* breadcrumb */}
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li > <Link className='breadcrumb-item"' to = {'/location'}>  العنوان</Link></li>
        </ol>
      </nav>


  

          <div className='row'>
            
              <div className='col'>
                  <div>
                      map
                  </div>
                 {/* we need to show and hidden div  */}
                  <Button>أختر موقعك</Button>
              </div>
              <div className='col'>
                  <Button className='primary-btn' onClick={() => { setshow(!show) }} > إضافة عنوان جديد </Button>
                  <div className=''>
                    {/* when clicked the button , show the new location div .. */}
                      {show && <div> {addNewLocation()}</div>}
                  </div>
                  

              </div>
          </div>
    </div>
  )
}

export default SelectLoction