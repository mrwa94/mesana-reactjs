
import React  , {label  ,useState} from 'react'
import {Row , Col , Tab, Card , CardGroup , Pagination  ,Button } from 'react-bootstrap'
import Select from 'react-select';


//icons
import { BsSearch } from "react-icons/bs";
import { AiTwotoneFilter } from "react-icons/ai";




//compontes
import StoreCard from '../compontes/StoreCard';
import ProductDetails from '../Pages/ProductDetails';




function Store() {




  //Pagination
  let active = 1;
  let items = [];
  for (let number = 1; number <= 15; number++) {

    items.push(
      <Pagination.Item className='' key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  






 //select

 const selects = [

 { type : "Chocolate" , id : 1 , label : "Chocolate"} ,
 { type : "strawberry" , id : 2 ,label : "strawberry"} ,
 { type : "clothes" , id : 1 , label : "Vanilla"} ,

 ]

 const [option] = useState(selects);




  //////filter 
  const [first , setFirst] = useState(true);
  const [second , setSecond]= useState(true);
    
  const handelChange = (data) =>{
    if(data == 'first'){
      if(first == true)
      {
      //first filter here
      console.log(data )

      }
      setFirst(!first)
    }
    if(data == 'second'){
      if(second == true) {
        //second filter here
        console.log(data);
      }
      setSecond(!second)
    }
  }


   const test = () => {
 return(
  <ProductDetails/>
 )
   }
  return (
   

   

      
    <div className='p-3'>

        <Tab.Container>
            <Row>
            <Col sm={2} className = "baseColor">
                <p>تفاصيل أكثر </p>

                {/* select type  */}
                <Select options={option}  placeholder = "اختر" />
               
               

 

               {/* filters */}
                <div >
                  {/* First filter */}
                  <div className='d-block ' >
                  <input className='m-2'  type= "checkbox" value={first} onChange = {()=> handelChange('first')}/> 
                <label>صنف</label>
                  </div>
               
               {/* second filter */}
                 <div>
                  <input  className='m-2'  type= "checkbox" value={second} onChange = {()=> handelChange('second')} /> 
                    <label>صنف</label>
                 </div>
                 
                 {/* third filter */}
                 <div>
                  <input  className='m-2'  type= "checkbox" value={second} onChange = {()=> handelChange('second')} /> 
                    <label>صنف</label>
                 </div>
                </div>
       </Col>



            {/* Container */}
                <Col>

                 {/* search div */}
                 <div className='px-5 mx-5'>
                  <a className='px-3 ' > حلويات</a>
                  <a className='px-3'>مخبوزات </a>
                  <a className='px-3'> حلويات</a>



        {/* search bar */}
                  <div className='search-bar d-inline'>


         {/* search input  */}
                  <input className='search-input ' type= 'search'  placeholder='البحث عن ' /> 
                 

        {/* search button */}
                    <button className='search-button'>
                    <BsSearch className='primary-color '/>
                    </button>



                    </div>


         {/* search by  filter */}
                    <div className='d-inline'>
                      <AiTwotoneFilter/>
                    </div>
                  </div>


                  {/************************************ Cards ********************/}
                  <div>

                    {/* فقط للتجربة في الوقت الحالي  */}
             
                     <CardGroup  style={{ width: '70rem' }}>
                     <StoreCard  />
                     <StoreCard />
                     <StoreCard/>
                     <StoreCard/>
                    </CardGroup>

                  </div>

                  

                  
            {/* Pagination */}
            <div className='p-5 '>
       <Pagination className='' size="lg">{items}</Pagination>
     </div>
                  

                
                </Col>


            </Row>







        </Tab.Container>









    </div>
  )
}

export default Store