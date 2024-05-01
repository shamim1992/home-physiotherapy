import React, { useState } from 'react'
import AdminSidebar from '../sidebar/AdminSidebar'
import axios from 'axios'
import { Alert } from 'flowbite-react';


const AddService = () => {

    const [formData, setFormData] = useState({
        servicename: '',
        price: '',
        description: '',
        serviceimage: null
    });

    const [resData, setResData] = useState(null)

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState, 
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('servicename', formData.servicename);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('serviceimage', formData.serviceimage);

        try {
            const response = await axios.post('/api/service/addservice', formDataToSend);
            setResData(response.data)
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    // console.log(formData)
    return (
        <div className='flex'>
            <div className=''>
                <AdminSidebar />
            </div>
            <div className='w-full z-0'>
                <div className="relative w-full overflow-x-auto mt-4">
                    
                    <form className="max-w-xl mx-auto px-4 py-8 border-2 shadow-lg rounded-lg " onSubmit={handleSubmit}>
                    {resData? <Alert className='text-center'>{resData}</Alert>:''}
                        <h1 className='text-center font-bold sm:text-lg md:text-2xl'>Add Service</h1>
                        <div className="relative z-0 w-full mb-5 group mt-4">
                            <input type="text" onChange={handleChange} name="servicename" id="servicename" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="servicename" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" onChange={handleChange} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" onChange={handleChange} name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                        
                        <div className="grid md:grid-cols-1 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="file" onChange={handleChange} name="serviceimage" id="serviceimage" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="serviceimage" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Service image</label>
                            </div>
                            
                        </div>
                        <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>



                </div>

            </div>
        </div>
    )
}

export default AddService