import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../app/cart/cartSlice.js';
import { Button, TextInput } from 'flowbite-react';
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(state => state.user);
    const cartItems = useSelector(state => state.cart.items);

    if (!currentUser) {
        return navigate('/signin');
    }

    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs ', '')), 0);


    return (
        <div className="w-full mx-auto px-4 py-8 min-h-screen dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-1">
                        {cartItems.length === 0 ? (
                            <p className="mt-4">Your cart is empty.</p>
                        ) : cartItems.map((item) => (
                            <div key={item.id} className="mt-2 w-full flex flex-col sm:flex-row justify-between gap-4 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2">
                                <a href="#">
                                    <img className="rounded-md hidden md:block shadow-md h-10 w-10" src={item.imageSrc} alt="product image" />
                                </a>
                                <div className="">
                                    <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                </div>
                                <div className="">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">{item.price}</span>
                                        <Button onClick={() => dispatch(removeItem(item))} className="ml-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-4xl text-center"><TiDelete /></Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="mt-2 w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Order Summary</h5>
                            </div>
                            <div className="flow-root">
                                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Sub Total</p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{totalPrice}</div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Travelling Cost</p>
                                            </div>
                                            <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">200</div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Other Cost</p>
                                            </div>
                                            <div className="inline-flex items-center text-sm text-gray-900 dark:text-white">0</div>
                                        </div>
                                    </li>
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">Total</p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{totalPrice + 200}</div>
                                        </div>
                                    </li>
                                    {/* <li className="pt-3 pb-0 sm:pt-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4"></div>
                                            <div className="inline-flex items-center">
                                                <Button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-1 py-1 text-center">Continue</Button>
                                            </div>
                                        </div>
                                    </li> */}
                                </ul>
                            </div>
                        </div>



                    </div>
                    <div className="sm:col-span-1">
                        <div className="mt-2 w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Appointment</h5>
                            </div>
                            <div className="flow-root">
                                <form role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                    <div className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="inline-flex w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <TextInput type='text' className='w-full' defaultValue={currentUser.username} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="inline-flex w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <TextInput type='text' className='w-full' defaultValue={currentUser.fullName} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="inline-flex w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <TextInput type='text' className='w-full' placeholder='address' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="inline-flex w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <TextInput type='text' className='w-full' placeholder='contact' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="inline-flex w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <TextInput type='date' className='w-full' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="inline-flex w-full items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <TextInput type='text' className='w-full' placeholder='Enter email' />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="pt-3 pb-0 sm:pt-4">
                                        <div className="flex items-center">
                                            <div className="flex-1 min-w-0 ms-4"></div>
                                            <div className="inline-flex items-center">
                                                <Button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-1 py-1 text-center">Continue</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
