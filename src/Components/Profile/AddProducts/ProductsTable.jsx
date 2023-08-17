import React from 'react'
import { Link } from 'react-router-dom'

export const ProductsTable = (props) => {
  return (
    <div>
         <table class=" table table-hover primary-text-color mt-3 ">
     <thead  >
    <tr className='sec-btn' >
      <th scope="col" > الصورة</th>
      <th scope="col"> اسم المنتج </th>
      <th scope="col"> السعر </th>
      <th scope="col">SKU</th>
      <th scope="col"> النوع </th>
      <th scope="col"> مخزون </th>
      <th scope="col"> الحالة</th>
      <th scope="col"> الشركة</th>
    </tr>
  </thead>
  <tbody  >
    <tr >
      <th scope="row " > 
      <img src= {props.image} />ss
      </th>
      <td key={'red'}> {props.productName} ss</td>
      <td>{props.productPrice} ss</td>
      <td>12.f</td>
      <td>500 SR</td>
      <td> visa 545 </td>
      <td> visa</td>
      <td> visa </td>
  </tr>
   
   
  </tbody>
</table>





    </div>
  )
}
