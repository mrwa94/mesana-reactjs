import React from 'react'

const Reviwes = (props) => {
  return (
    <div className='me-4'>

        {/****** View All comment ********************/}

        <div  className=''>
          مشاهدة جميع التعليقات 
        </div>

 


      {/* To add new comment */}
        <div className='row'>
            <div className='pb-3'>
            <input className='w-100 pb-5 px-2 pt-2 rounded'
                   placeholder='اضافة تعليق جديد '  />
            </div>

              <div className='text-start'>
              <button className='btn btn-dark rounded m-3'>أضافة تعليق</button>
              </div>
         
        </div>




    </div>
  )
}

export default Reviwes