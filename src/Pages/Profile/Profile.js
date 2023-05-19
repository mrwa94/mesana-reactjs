import React from 'react'
import {  Col , Nav , Row , Tab} from 'react-bootstrap'
import ProfileDetails from '../../compontes/Profile/ProfileDetails'
import MessageDirect from '../../compontes/Profile/MessageDirect'
import { Chat } from '../../compontes/Profile/Chat'
import ProductDetails from '../../compontes/Store/ProductDetails'


const Profile = () => {
  return (
    <div>


<Tab.Container id="" defaultActiveKey="first" >
      <Row >

        {/* profile list */}
        <Col sm={2} className = "baseColor">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className='link-hover' eventKey="first">الملف الشخصي</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second">الرسائل</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="third">اللغة</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="four"> الشروط و الأحكام</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey={"five"}> الخروج</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={"six"}> إغلاق الحساب</Nav.Link>
            </Nav.Item>
          </Nav>

         
        </Col>


        {/* Content */}

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"> <ProfileDetails/> </Tab.Pane>
            <Tab.Pane eventKey="second"><MessageDirect/></Tab.Pane>
            <Tab.Pane eventKey="third">   <Chat/>  </Tab.Pane>
            <Tab.Pane eventKey="four">   <   ProductDetails/>  </Tab.Pane>

         
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>










    </div>
  )
}

export default Profile