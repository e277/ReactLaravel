import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditProduct from "./products/Edit";
import ProductList from "./products/List";
import CreateProduct from "./products/Create";

const App = () => {
    return (
        <Router>
            <Navbar bg="primary">
                <Container>
                    <Link to={"/"} className="navbar-brand text-white">
                        Basic Crud App
                    </Link>
                </Container>
            </Navbar>

            <Container className="mt-5">
                <Row>
                    <Col md={12}>
                        <Routes>
                            <Route path="/product/create" element={<CreateProduct />} />
                            <Route path="/product/edit/:id" element={<EditProduct />} />
                            <Route exact path='/' element={<ProductList />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default App;