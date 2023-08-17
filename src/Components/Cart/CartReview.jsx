import React from 'react'

export const CartReview = () => {
    return (
        <div className='container'>
            <label className='p-3 me-3 fs-5'> مراجعة الفاتورة</label>
            <div className='w-75  boarded me-3  p-3 border-color base-color shadow row'>

                <div className='col'>
                    <p className=''> عدد العناصر </p>
                    <p className=' '>  المجموع الجزئي </p>
                    <p className=' '>  التوصيل </p>
                    <p className=' '>  المجموع </p>
                </div>

                <div className='col'>
                    <p className='me-5 pe-5 '> 10 </p>
                    <p className='me-5 pe-5'>  20,0000 SR   </p>
                    <p className='me-5 pe-5'>  80 SR   </p>
                    <p className='me-5 pe-5 '>  21,0000 SR   </p>
                </div>


            </div>
        </div>
    )
}
