import React from 'react'
import {  Col , Nav , Row , Tab} from 'react-bootstrap'
import ProfileDetails from '../../Components/Profile/ProfileDetails'
import MessageDirect from '../../Components/Profile/MessageDirect'
import { Chat } from '../../Components/Profile/Chat'



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



            {/*   if user is supplier  , show this item   */}
            <Nav.Item>
                <Nav.Link eventKey="four">  المنتجات </Nav.Link>
            </Nav.Item>

            

            <Nav.Item>
                <Nav.Link eventKey="five"> الشروط و الأحكام</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey={"six"}> الخروج</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={"seven"}> إغلاق الحساب</Nav.Link>
            </Nav.Item>
          </Nav>

         
        </Col>


        {/* Content */}

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first"> <ProfileDetails/> </Tab.Pane>
            <Tab.Pane eventKey="second"><MessageDirect/></Tab.Pane>
            <Tab.Pane eventKey="third">     </Tab.Pane>
            <Tab.Pane eventKey="four">   </Tab.Pane>

         
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>










    </div>
  )
}

export default Profile