import React from 'react'
import { Container, Form } from 'react-bootstrap'

const ProfileDetails = () => {
  return (
    <Container className='p-5  mt-3'>

      {/* personal info */}

      <div className='border-color mb-4 p-5'>
        <p className='primary-text-color fs-3'>المعلومات الشخصية</p>
        <div className=''>
          <Form className='d-flex '>

            <Form.Group className="mb-3 " controlId="">
              <Form.Label>الاسم كامل</Form.Label>
              <Form.Control className='p-3 ' type="name" placeholder="مثال: الإسم الرسمي للمؤسسة" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>رقم الهاتف</Form.Label>
              <Form.Control type="phoneNumber" placeholder="+966  098234583" />
            </Form.Group>
          </Form>
        </div>

        <div className=''>
          <Form className='d-flex  '>
            <Form.Group className="mb-3  " controlId="">
              <Form.Label> البريد الالكتروني</Form.Label>
              <Form.Control type="name" placeholder="مثال: الإسم الرسمي للمؤسسة" />
            </Form.Group>

            <Form.Group className="mb-3 mx-5 " controlId="">
              <Form.Label> كلمة المرور  </Form.Label>
              <Form.Control type="phoneNumber" placeholder="*********" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>تأكيد كلمة المرور </Form.Label>
              <Form.Control type="phoneNumber" placeholder="*********" />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* business info */}

      <div className='border-color p-5 '>
        <p className='primary-text-color fs-3'> معلومات تجارية</p>
        <div className=''>
          <Form className='d-flex '>
            <Form.Group className="mb-3 mx-5 " controlId="">
              <Form.Label> اسم المتجر</Form.Label>
              <Form.Control type="name" placeholder="اسم المتجر" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label> رقم السجل</Form.Label>
              <Form.Control type="" placeholder="رقم السجل" />
            </Form.Group>
          </Form>
        </div>
        <div className=''>
          <Form className='d-flex  '>
            <Form.Group className="mb-3 mx-5 " controlId="">
              <Form.Label>  الرقم الضريبي</Form.Label>
              <Form.Control type="date" placeholder=": البداية" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 " controlId="">
              <Form.Label>  الرقم الضريبي  </Form.Label>
              <Form.Control type="phoneNumber" placeholder="الرقم الضريبي" />
            </Form.Group>
            <Form.Group className="mb-3 mx-5 " controlId="">
              <Form.Label>  الموقع الالكتروني  </Form.Label>
              <Form.Control type="phoneNumber" placeholder="https://example" />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Address info  */}
      <div className='border-color p-5  mt-4'>
        <p className='primary-text-color fs-3'>  العنوان</p>
        <div className=''>
          <Form className='d-flex  '>
            <Form.Group className="mb-3 mx-5 " controlId="">
              <Form.Label>  المنطقة</Form.Label>
              <Form.Control type="name" placeholder=" اسم المنطقة" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>  المدينة</Form.Label>
              <Form.Control type="" placeholder=" اسم المدينة" />
            </Form.Group>

            <Form.Group className="mb-3 mx-5" controlId="">
              <Form.Label>  الرمز البديدي</Form.Label>
              <Form.Control type="" placeholder="  zip code" />
            </Form.Group>
          </Form>
        </div>


      </div>
    </Container>
  )
}

export default ProfileDetails