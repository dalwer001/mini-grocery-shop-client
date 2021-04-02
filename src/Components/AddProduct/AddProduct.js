import React from 'react';
import axios from 'axios';
import{toast} from 'react-toastify';
import { useState } from 'react';
import { useForm } from "react-hook-form";

toast.configure()

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);


    const onSubmit = (data,e) => {
        const productData = {
            name: data.name,
            quantity: data.quantity,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://lychee-tart-04103.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                if (res) {
                    e.target.reset();
                    toast.success('Add Product Successfully!',{position:toast.POSITION.TOP_RIGHT});
                }
            });
    };
    

    const handleImageUpload = product => {
        console.log(product.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '4295ac4d47b569312bea67b440cdbdbb');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div className="container">
            <h1>Add Product</h1>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)} class="row g-3 bg-warning shadow mt-5 p-5 rounded">
                <div className="col-md-6">
                    <label class="form-label ">Product Name</label>
                    <input type="text" name="name" class="form-control" placeholder="Enter Name" ref={register} />
                </div>
                <div className="col-md-6">
                    <label class="form-label ">Quantity</label>
                    <input type="text" name="quantity" class="form-control" placeholder="Enter Quantity" ref={register} />
                </div>
                <div className="col-md-6">
                    <label class="form-label ">Add Price</label>
                    <input type="double" name="price" class="form-control" placeholder="Enter Price" ref={register} />
                </div>

                <div className="col-md-6">
                    <label class="form-label ">Add Photo</label>
                    <input class="form-control" type="file" onChange={handleImageUpload} />
                </div>

                <div className="col-md-6">
                    <input type="submit" className="mt-3 btn btn-success" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
