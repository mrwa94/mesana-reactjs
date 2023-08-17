import React from 'react'

const OrderStatue = () => {
    return (

        <div className='p-3 container'>
            <label className='p-3 me-3 fs-5 primary-text-color'> حالة الطلب </label>
            <div className='w-75  boarded me-3 pt-2 px-3  pb-4 primary-text-color border-color base-color shadow '>
                <div className='p-2'>
                    progress
                </div>
            <hr/>

                <div>
                    <label className=' fw-bold'>هل تواجة مشكلة في طلبك و تريد التواصل معنا</label>
                    <div className='p-4' >
                        <a className='d-block fw-bold text-decoration-underline' href='#'>التواصل مع خدمة العملاء</a>
                        <a className='d-block fw-bold text-decoration-underline' href='#'>المشاكل التقتنية</a>
                        <a className='d-block fw-bold text-decoration-underline' href='#'>إلغاء الطلب</a>
                        
                    </div>
                </div>
                
                </div>
        </div>
    )
}

export default OrderStatue