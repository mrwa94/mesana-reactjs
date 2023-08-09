import React from 'react'
import { Link } from 'react-router-dom'

//React-bootstrap
import { Button, Form, InputGroup, Pagination, Tab, Nav, Col, Row } from 'react-bootstrap';
//icons 
import { BsPlusCircleFill } from "react-icons/bs";
import { AiTwotoneFilter, AiOutlineSearch } from "react-icons/ai";
import { ProductsTable } from './ProductsTable';
import AddItem from './AddItem';



//pages ..
let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}

const AddNewProduct = () => {
    return (
        <div className='container mt-4'>


            {/* header */}
            <div className='row'>
                <div className='col'>

                    {/* Searching about a product ..  */}
                    <div className='mt-4 mb-4'>
                        <InputGroup size="sm" className="mb-3 w-25 rounded   ">
                            <Button className='sec-btn rounded '>
                                <AiOutlineSearch />
                            </Button>
                            <Form.Control
                                placeholder='البحث عن المنتجات '
                                aria-label=""
                                aria-describedby=""
                            />
                        </InputGroup>
                    </div>





                    <Tab.Container id="" defaultActiveKey="first" className='' >
                        <Nav variant="pills" className="">
                            <Nav.Link className=' mx-2 p-2 border-color' eventKey="first">  المنتجات </Nav.Link>
                            <Nav.Link className='mx-2 p-2 border-color' eventKey="sec">  اضافة منتج   <BsPlusCircleFill className='mx-2' /></Nav.Link>
                            <Nav.Link className="border-color p-2">فلتر <AiTwotoneFilter className='mx-2' /></Nav.Link>
                        </Nav>


                        {/* Content */}
                        <Tab.Content className=''>
                            <Tab.Pane eventKey="first">
                                {/* Table For products .. */}

                                <div className='container  border-color mt-5 mb-3'>
                                    <ProductsTable />
                                    <div className='container  mt-5'>
                                        <div className='container mt-4 '>
                                            <Pagination>{items}</Pagination>

                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sec">
                                <AddItem />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>

                </div>






            </div>





        </div>
    )
}

export default AddNewProduct