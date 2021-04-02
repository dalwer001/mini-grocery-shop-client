import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import{toast} from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button, Grid } from '@material-ui/core';

toast.configure()


const Order = () => {

    const [orders, setOrders] = useState({});
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        buyDate: new Date()
    });

    const handleBuyDate = (date) => {
        const newDates = { ...selectedDate }
        newDates.buyDate = date;
        setSelectedDate(newDates);
    };

    const { name, price, quantity, imageURL } = orders;

    const handleCheckOut = () => {

        const buyProduct = { ...loggedInUser, ...selectedDate, name, quantity, price, imageURL };
        fetch('https://lychee-tart-04103.herokuapp.com/buyProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(buyProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data)
                {
                    toast.success('Product added successfully',{position:toast.POSITION.TOP_CENTER});
                }
                
            })
    }


    useEffect(() => {
        fetch(`https://lychee-tart-04103.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [id])



    return (
        <div style={{ textAlign: 'center' }} className="container">
            <h1>Order Review</h1>

            <div style={{ textAlign: 'center' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Product add Date"
                            value={selectedDate.buyDate}
                            onChange={handleBuyDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>

                </MuiPickersUtilsProvider>
            </div>

            <table class="table border rounded mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{name}</td>
                        <td><img src={imageURL} style={{ width: '70px', height: '70px' }} alt="" /></td>
                        <td>${price}</td>
                        <td>{quantity}</td>
                    </tr>
                </tbody>
            </table>
            
            

            <div style={{ float: 'right' }} >
            <button onClick={handleCheckOut} className="btn btn-primary">Add to Cart</button>
                <Link to="/" className="m-3">
                    <button className="btn btn-danger">Shop More</button>
                </Link>
                <Link to="/cart">
                    <button className="btn btn-success">View Cart</button>
                </Link>
            </div>

        </div>
    );

};

export default Order;