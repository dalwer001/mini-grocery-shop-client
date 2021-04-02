import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Manage from '../Manage/Manage';

const ManageProduct = () => {
    

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://lychee-tart-04103.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">

        <h1>Manage Product</h1>
            <hr />
            <div className="col-md-12">
                <h3 className="mb-3 text-primary">Total Product: {products.length}</h3>

                <table className=" table table-success table-striped  text-center " >
                    <thead>
                        <tr>
                            <th  className="w-25">Product Name</th>
                            <th  className="w-25">Quantity</th>
                            <th  className="w-25">Price</th>
                            <th  className="w-25">Image</th>
                            <th  className="w-25">Action</th>
                        </tr>
                    </thead>
                </table>
            </div>

            <div className="row">
                
                {
                    products.map(product =>
                        <div className="col-md-12">
                            <Manage product={product}></Manage>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageProduct;