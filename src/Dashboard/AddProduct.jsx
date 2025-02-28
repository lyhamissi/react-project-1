import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './dashboard_styles/login.css';
import { IoClose } from 'react-icons/io5';
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const { productTitle, images, productPrice, productContent } = data;
        const formData = new FormData();
        try {
            formData.append('productTitle', productTitle);
            formData.append('images', images[0]);
            formData.append('productPrice', productPrice);
            formData.append('productContent', productContent);
            const results = axios.post('https://botiga-kvf9.onrender.com/product/createProduct', formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
        }
        catch (error) {
            console(error)
        }
    }
    return (
        <div>
            <div className="icoss">
                    <h3>Add Product</h3>
                </div>
            <div className="productformss">
            <form action="" method="post" className='login-form'onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("productTitle", { required: true})}
                    type="text"
                    placeholder='Product Title'
                    name='productTitle'
                />
                <input
                    {...register("images", { required: true})}
                    type="file"
                    placeholder='Upload image'
                    name='images'
                />
                <input
                    {...register("productPrice", { required: true})}
                    type="text"
                    placeholder='Product Price'
                    name='productPrice'
                />
                <input
                    {...register("productContent", { required: true})}
                    type="text"
                    placeholder='Product Content'
                    name='productContent' />
                <button type="submit" className='login-btns'>Save</button>
            </form>
            </div>
        </div>
    )
}

export default AddProduct
