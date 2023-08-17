import React from 'react'
import { Card } from 'react-bootstrap'

const Analys = () => {
  return (
    <div className='container m-3'>

    <div className='row '>
      <div className='col'> 
      <Card className='p-3 m-4'>النشاط المالي </Card>
      
      </div>
      <div className='col'> 
      <Card className='p-3 m-4'>الرصيد المتاح </Card>
      </div>
    </div>


    <div className='row'>
      <div className='col'>
      <Card className='p-3 m-4'>التواصل</Card>
      </div>
      <div className='col'>
      <Card className='p-3 m-4'> نوع المنتجات </Card>
      </div>
      <div className='col'>  
      <Card className='p-3 m-4'>حالة الطلبيات</Card>
      </div>

    </div>










    </div>
  )
}

export default Analys