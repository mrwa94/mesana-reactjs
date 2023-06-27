import React from 'react'

import { Link } from 'react-router-dom'

//icon
import  {IoMdListBox}  from "react-icons/io";

const Requests = () => {



  return (
    <div className='container  border-color m-5 '>
      <table class=" table table-hover primary-text-color mt-3 ">
     <thead  >
    <tr >
      <th scope="col" >أسم المتجر</th>
      <th scope="col">حالة الشحنة</th>
      <th scope="col">رقم الطلب</th>
      <th scope="col">التاريخ</th>
      <th scope="col">المبلغ المدفوع</th>
      <th scope="col">اسم البطاقة</th>
      <th scope="col">معاينة البطاقة</th>
    </tr>
  </thead>
  <tbody  >
    <tr >
      <th scope="row " >محمصة الرياض</th>
      <td key={'red'}>تم الاستلام</td>
      <td>64563</td>
      <td>12.feb to 15.2023</td>
      <td>500 SR</td>
      <td> visa 545 ****** 55</td>
      <td className='fs-5 text-center ps-5'> <Link  to = {'/preview'}> <IoMdListBox/></Link>
        
      </td>
    </tr>
   
   
  </tbody>
</table>
    


    </div>
    
  )
}

export default Requests