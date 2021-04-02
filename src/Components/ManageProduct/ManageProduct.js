import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';
toast.configure()

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://lychee-tart-04103.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const deleted = () => {
        fetch('https://lychee-tart-04103.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const handleDelete = (id) => {

        fetch(`https://lychee-tart-04103.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.error('Product Deleted Successfully', { position: toast.POSITION.TOP_RIGHT });
                    deleted();
                }
            })
    }

    return (
        <div className="container">

            <h1>Manage Product</h1>
            <hr />
            <div className="col-md-12">
                <h3 className="mb-3 text-primary">Total Product: {products.length}</h3>

                <table className=" table table-success table-striped  text-center " >
                    <thead>
                        <tr>
                            <th className="w-25">Product Name</th>
                            <th className="w-25">Quantity</th>
                            <th className="w-25">Price</th>
                            <th className="w-25">Image</th>
                            <th className="w-25">Action</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="row">

                {
                    products.map(product =>
                        <div className="container">
                            <div className="col-md-12">
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
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;