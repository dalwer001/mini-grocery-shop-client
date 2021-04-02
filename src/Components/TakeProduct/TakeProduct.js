import React from 'react';
import { Link } from 'react-router-dom';

const TakeProduct = () => {
    return (
        <div>
            <div class="container text-center mt-3">
            <h3>Select Product Please!!!</h3>
            <Link to="/home">
            <button class="btn btn-success">Take Product</button>
            </Link>
        </div>
        </div>
    );
};

export default TakeProduct;