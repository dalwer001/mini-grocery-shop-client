import React from 'react';
import { useHistory } from 'react-router';
import "./Product.css";

const Products = ({ product }) => {

    const history = useHistory()
    const handleBuy = (_id) => {
        history.push(`/orders/${_id}`);
    }

    return (
        <div>
            <div className="card mb-4 mt-3 shade" style={{ width: "20rem", height: "30rem" }}>
                <img src={product.imageURL} className="card-img-top" style={{ width: "19.9rem", height: "18rem" }} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{product.name} - {product.quantity}</h5>
                    <div className="card-footer d-flex justify-content-between ">
                        <h3>${product.price}</h3>
                        <button onClick={() => handleBuy(product._id)} className="btn btn-success button-up">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Products;