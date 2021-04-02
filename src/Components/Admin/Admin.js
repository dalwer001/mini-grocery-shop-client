import React from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';


const Admin = () => {
    return (
            <div className="row mr-0">
            <Router>
                <div className="col-md-3 col-sm-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 col-sm-12">
                    <Switch>
                        <Route path="/manageProduct">
                            <ManageProduct></ManageProduct>
                        </Route>
                        <Route path="/addProduct">
                            <AddProduct></AddProduct>
                        </Route>
                    </Switch>
                </div>
            </Router>
            </div>
    );
};

export default Admin;