import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import card from '../../assets/images/card.png'

const WalletCard = () => {
  return (
   <div className='d-flex pt-5 pb-5 wallet-card' >
    <div>
     <img  className='mx-2' variant='right' src={card}></img>
    </div>
    
    <div className='pt-3'>
        <h5 className='primary-text-color'>محفظة مسانا لإدارة مدفوعاتك</h5>
        <h6 className='primary-text-color'>تعرف علينا و تصفح خدماتنا تعرف علينا و تصفح خدماتناتعرف علينا و تصفح خدماتناتعرف علينا </h6>
    </div>

    <div className='px-5 pt-3'>

        <a className='btn sec-btn px-3'>
        قم بإستخدام محفظتك
        </a>
    </div>

   </div>
  )
}

export default WalletCard



