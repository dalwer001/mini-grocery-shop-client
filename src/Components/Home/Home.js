import React from 'react';
import { useEffect, useState } from 'react';

import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://lychee-tart-04103.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="container">
            <div className="row p-5"> 
            {
                products.length ? "" : <img className="mx-auto" src="https://cdn.dribbble.com/users/102916/screenshots/2768410/loading.gif" alt=""/>
            }

                {
                    products.map(product =>
                        <div className="col-md-6 col-sm-12 col-lg-4 ">
                            <Products product={product}></Products>
                        </div>
                    )
                }
            </div>
        </div>
    );

};

export default Home;