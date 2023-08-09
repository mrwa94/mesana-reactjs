import React from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { Button, Tab, Tabs, Row, Col, Nav} from 'react-bootstrap';
import { useState } from 'react';
//icons
import { IoIosArrowBack } from "react-icons/io";


//icons 
import { BsArrowLeftRight, BsPlusCircleFill } from "react-icons/bs";
import CardHeader from 'react-bootstrap/esm/CardHeader';

export const Balance = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='container login-form p-3 '>
            <div className='p-2'>
                <h5>الرصيد المتاح </h5>
                <h1>50.000</h1>
            </div>
            <div className='m-3 text-start'>
                <Link className='sec-btn rounded  mx-2' to={''} >
                    تحويل
                    {/* icon */}
                    <BsArrowLeftRight className='mx-1' />
                </Link>







                <Link className='sec-btn rounded mx-2' to={''}  >إيداع </Link>
                {/* Button trigger modal  */}

                <Link className='sec-btn' onClick={handleShow}>  <BsPlusCircleFill className='mx-2' />اضافة مال</Link>

                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className=' gray-color' >
                        <Modal.Title className='container' >اختر طريقة الدفع المناسبة</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className=''>

                        <Tab.Container id="" defaultActiveKey="first">
                            <Row>
                                <Col >
                                    <Nav variant="pills" className="flex-column  ">
                                        <Nav.Item>
                                            <Nav.Link className='' eventKey="first">البطاقات البنكية
                                            <IoIosArrowBack className='text-start'/>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"> Apple Pay  <IoIosArrowBack className='text-start'/> </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"> STC Pay
                                            <IoIosArrowBack className='text-start'/>
                                            </Nav.Link>

                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="four"> التحويل البنكي
                                            <IoIosArrowBack className='text-start'/>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={6}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p>أختر البطاقة </p>
                                            {/* add more card here  */}
                                             
                                                <div className='wallet-card rounded p-2 m-2'>
                                                    <h5>اسم البطاقة</h5>
                                                    <h6>*************444</h6>
                                                </div>

                                                <div className='wallet-card rounded p-2 m-2'>
                                                    <h5>اسم البطاقة</h5>
                                                    <h6>*************444</h6>
                                                </div>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second"> 
                                        {/* pay by Apple pay .. */}
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            {/* pay by STC pay .. */}
                                        </Tab.Pane>

                                        {/* pay by التحويل البنكي  */}
                                        <Tab.Pane eventKey="four">
                                            <div className='container '>
                                               <div>
                                                <h6>اضافة بنك </h6>
                                              

                                                <div className='wallet-card rounded p-2 m-2'>
                                                    <h5>اسم البطاقة</h5>
                                                    <h6>*************444</h6>
                                                </div>
                                                

                                               </div>


                                            </div>

                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>



                    </Modal.Body>

                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer> */}
                </Modal>









            </div>


        </div>
    )
}
