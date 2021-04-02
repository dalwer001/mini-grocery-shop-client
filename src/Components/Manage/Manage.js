import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
toast.configure()

const manage = ({ product }) => {


        const handleDelete = (id) => {
        
                fetch(`https://lychee-tart-04103.herokuapp.com/deleteProduct/${id}`, {
                        method: "DELETE"
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data) {
                                toast.error('Product Deleted Successfully', { position: toast.POSITION.TOP_RIGHT });
                                }
                        })
        }

        return (
                <div className="container">
                        <table class="table table-sm table-success text-center table-bordered ">
                                <div class="table-responsive">
                                        <tbody>
                                                <td className="w-25">{product.name}</td>
                                                <td className="w-25">{product.quantity}</td>
                                                <td className="w-25">${product.price}</td>
                                                <td className="w-25"><img src={product.imageURL} style={{ height: "80px" }} alt="" /></td>
                                                <td className="w-25">
                                                        <button className="btn btn-danger btn-sm m-4" 
                                                        onClick={() => handleDelete(product._id)} >Delete</button>
                                                </td>
                                        </tbody>
                                </div>
                        </table>
                </div>
        );
};



export default manage;


