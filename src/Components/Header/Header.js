import React, { useContext } from 'react';
import './Header.css'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
    }
    
    return (
        <div>
            <Navbar className="bg-dark" expand="lg">
                <Link to="/home"><h2 className="text-danger text-decoration-none">MINI GROCERY SHOP</h2></Link>
                <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end ">
                    <Link to="/home" className="nav-link text-white">Home</Link>
                    <Link to="/orders" className="nav-link text-white">Orders</Link>
                    <Link to="/orderPreview" className="nav-link text-white">Cart</Link>
                    <Link to="/admin" className="nav-link text-white">Admin</Link>
                    <Link to="/login" className="nav-link text-white btn btn-success"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>
                    <Link to="#" className="nav-link active text-danger">{loggedInUser.name||loggedInUser.email}</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;