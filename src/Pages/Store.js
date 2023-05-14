import React  , {label , Checkbox ,useState} from 'react'
import {Row , Col , Tab    } from 'react-bootstrap'

function Store() {
    const [isChecked, setIsChecked] =  useState();
    const handleOnChange = () => {
        setIsChecked(!isChecked);
      };
  return (

   

      
    <div className='p-3'>

        <Tab.Container>
            <Row>
            <Col sm={2} className = "baseColor">
                <p>تفاصيل أكثر </p>

             {/* <Checkbox {...label} defaultChecked /> */}
                <input
          className='mx-2'    
          type="checkbox"
          id=""
          name=""
          value=""
          checked={isChecked}
          onChange={handleOnChange}
          
        />
        
        {isChecked ? "checked"  // here add logic code to flitter list.
         : "صنف"}.
                </Col>

                <Col>
                col
                </Col>


            </Row>




        </Tab.Container>









    </div>
  )
}

export default Store