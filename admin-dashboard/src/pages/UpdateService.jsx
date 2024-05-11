import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
// import { updateService } from '../redux/service/serviceSlice';
import AdminSidebar from '../components/sidebar/AdminSidebar';
import { Button, TextInput, Toast } from 'flowbite-react';
import axios from 'axios';
import AppUrl from '../../ApiUrl';
import { toast } from 'react-toastify';

const UpdateService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const service = useSelector((state) => state.serviceReducer.service);
  const [formData, setFormData] = useState({
    servicename: '',
    price: '',
    description: '',
    serviceimage: null
  });

  const [resData, setResData] = useState(null)
  console.log(resData)

  useEffect(() => {
    const serviceToUpdate = service.find((s) => s._id === id);
    if (serviceToUpdate) {
        setFormData(serviceToUpdate);
    }
  }, [service, id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
  
    const newValue = type === 'file' ? e.target.files[0] : value;
    setFormData(prevState => ({
        ...prevState, 
        [name]: newValue
    }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceToUpdate = service.find((s) => s._id === id);
    if (!serviceToUpdate) {
      console.log('Service not found');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('servicename', formData.servicename);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('description', formData.description);
    // Check if serviceimage is a file and append it
    if (formData.serviceimage instanceof File) {
      formDataToSend.append('serviceimage', formData.serviceimage);
    }

    // Merging formData into the existing service object
    const updatedService = { ...serviceToUpdate, ...formData };
  
    try {
      const response = await axios.put(`${AppUrl}/api/service/${id}`, formDataToSend);
      setResData(response.data);
      navigate('/services');
      toast("Updated successfully !");
     
  } catch (error) {
      console.error('Error submitting form:', error);
  }             
  };

  return (
    <div className="flex flex-col md:flex-row">
      <AdminSidebar />
      <div className="flex-grow justify-center px-4 md:px-24 md:w-[50%]">
        <h1 className="text-center text-2xl py-8 font-bold">Update Service</h1>
        <form
          onSubmit={handleSubmit}
          className="self-center justify-center mx-auto flex max-w-md flex-col" encType='multipart/form-data'
        >
          <TextInput
            type="text"
            name="servicename"
            value={formData.servicename}
            onChange={handleChange}
            placeholder="Service Name"
            className="mt-2"
          />
          <TextInput
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="mt-2"
          />
          <TextInput
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="mt-2"
          />
          <input
            type="file"
            name="serviceimage"
            onChange={handleChange}
            className="mt-2"
          />
          <Button type="submit" className="btn btn-blue-500 mt-4">
            Update Service
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
