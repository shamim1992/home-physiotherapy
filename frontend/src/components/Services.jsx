import { Button, Card, Toast } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/cart/cartSlice'
import { HiCheck } from 'react-icons/hi'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import AppUrl from '../../ApiUrl';

const Services = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.user)
    const [cartItems, setCartItems] = useState([]);
    const [products, setProduct] = useState([]);
    const handleAddToCart = (product) => {
        if (currentUser == null) {
            toast.error("Please login to add to cart", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });

        }
        else {
            dispatch(addToCart({
                _id: product._id,
                servicename: product.servicename,
                price: product.price,
                serviceimage: product.serviceimage,
                quantity: 1,
                userId: currentUser._id
            }));
            toast(`${product.servicename} Added to the cart!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
    };


    const getService = () => {
        
          axios.get(`${AppUrl}/api/service/services`).then(res => setProduct(res.data)).catch(err => console(err))
    }

    useEffect(() => {
        getService()
    }, [])


    return (
        <div className='bg-white dark:bg-gray-900 py-8 '>
            <ToastContainer />
            <div className=" mb-8 lg:mb-16 mx-auto">
                <h2 className="mb-4 text-center text-4xl tracking-tight  font-extrabold text-blue-500 dark:text-white">Services</h2>
                <p className='text-center dark:text-white'>We provide the best physiotherapy services in Bangalore</p>
            </div>

            <div className="">
                <div className="mx-auto max-w-4xl sm:px-2 lg:max-w-7xl lg:px-2">

                    <div className="mx-auto mt-6 grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
                        {products.map((product) => (
                            <Card
                                className="max-w-sm mx-auto"
                                imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                                imgSrc={`${AppUrl}/uploads/${product.serviceimage}`}
                                key={product._id}>
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {product.servicename}
                                    </h5>
                                </a>
                                <div className="mb-5 mt-2.5 flex items-center">
                                    <svg
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg
                                        className="h-5 w-5 text-yellow-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                        5.0
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-md font-base text-gray-900 dark:text-white">&#8377; {product.price}</span>
                                    <Button
                                        outline
                                        gradientDuoTone="purpleToBlue"
                                        className="inline-flex items-center justify-center   text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 "
                                        onClick={() => handleAddToCart(product)} // Add to cart onClick event
                                    >
                                        Add to Cart
                                    </Button>

                                </div>
                            </Card>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services