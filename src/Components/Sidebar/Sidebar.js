import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Side = props => {


    return (
        <div>
            <Nav className="col-md-3  d-md-block bg-secondary sidebar ">
                <div className="sidebar-sticky"></div>
                <Nav.Item className="p-3  m-4 ">
                    <Link to="/manageProduct" className="text-white  text-decoration-none ">Manage Product</Link>
                </Nav.Item>
                <Nav.Item className="p-3  m-4 ">
                    <Link to="/addProduct"  className="text-white  text-decoration-none ">Add Product</Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar