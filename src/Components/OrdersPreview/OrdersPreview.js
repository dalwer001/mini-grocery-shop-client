import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const OrdersPreview = () => {

    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://lychee-tart-04103.herokuapp.com/orderPreview?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <div className="container">
        <div className="row">
            <div className="col-md-12 mx-auto mt-3" style={{  }}>
                <h3 ><span className="text-danger"> {loggedInUser.email}</span> you have<span className="text-success"> {orders.length}</span> product.</h3>
                <Link to="/greetings" style={{ float: 'right'}} className="m-2">
                    <button className="btn btn-success">CheckOut</button>
                </Link>
                <Link to="/" style={{ float: 'right' }} className="m-2">
                    <button className="btn btn-danger">Shop More</button>
                </Link>
            </div>
            <div className="col-md-12">
                {
                    orders.map(order =>
                        
                        <table class="table table-sm table-success text-center table-bordered ">
                                <div class="table-responsive">
                                        <tbody>
                                                <td className="">{order._id}</td>
                                                <td className="w-25">{order.name}</td>
                                                <td className="w-25">{order.quantity}</td>
                                                <td className="w-25">${order.price}</td>
                                                <td className="w-25">
                                                <img className="mb-3 mt-3" style={{ width: '100px', height: '100px' }} src={order.imageURL} alt="" />
                                                </td>
                                                <td className="w-25">{order.buyDate}</td>
                                        </tbody>
                                </div>
                        </table>
                    )
                }
            </div>
        </div>
        </div>
    );
};



export default OrdersPreview;