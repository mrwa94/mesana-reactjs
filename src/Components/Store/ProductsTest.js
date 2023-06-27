import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import {cardDetails} from '../../Data/CardData'

 const ProductsTest = createSlice ({
     name : 'products' ,
     initialState : {  value : cardDetails } ,
     reducers : {
        showProduct : (state , action) => {
            //write code 
        } ,
     } ,
});
  


export default ProductsTest.reducer;
