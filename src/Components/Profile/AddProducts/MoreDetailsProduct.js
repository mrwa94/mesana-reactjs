import React from 'react'
import { Form   , Button} from 'react-bootstrap'

const MoreDetailsProduct = () => {
  return (
    <div className='container  login-form rounded p-4 mt-5'>

<p className='nav-link'> معلومات اضافية  </p>
<Form className='p-2'>
                {/* product name  */}
                <Form.Group>
                    <Form.Label  >العلامة التجارية    </Form.Label>
                    <Form.Control type='text'
                        placeholder=' ماركة المنتج '
                        className='input'
                        value={''}
                        id=''>
                    </Form.Control>
                    </Form.Group>
                    </Form>

                    <div className='text-center m-3'>
       <Button className='text-center primary-btn px-5' onClick={''}>حفظ المنتج </Button>
       </div>
    </div>
  )
}

export default MoreDetailsProduct