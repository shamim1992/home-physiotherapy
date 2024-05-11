import { TextInput, Button, Label } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import AppUrl from '../../ApiUrl'
import { Link } from 'react-router-dom'

const DashProfile = () => {
  const { currentUser } = useSelector(state => state.user)
  const [imageFile, setImageFile] = useState(null)
  const [imageFileUrl, setImageFileUrl] = useState(null)
  const filePickerRef = useRef()
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value })
  }


  const handleSubmit = async (e) => {
   e.preventDefault()
   const formDataToSend = new FormData();
   formDataToSend.append('username', formData.username);
   formDataToSend.append('fullName', formData.fullName);
   formDataToSend.append('email', formData.email);
   formDataToSend.append('gender', formData.gender);
   formDataToSend.append('mobile', formData.mobile);
   formDataToSend.append('registrationNumber', formData?.registrationNumber);
   formDataToSend.append('address', formData.address);
   formDataToSend.append('password', formData.password);
  console.log(formDataToSend)

    // await axios
    //   .put(`/api/users/${currentUser._id}`, formDataToSend)
    //   .then((response) => {console.log(response);}).catch((err) => console.log(err));
  };

  const handleImageFile = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImageFile(file)
      setImageFileUrl(URL.createObjectURL(file));
    }
  }
  return (
    <div className='max-w-lg mx-auto p-3 w-full dark:bg-gray-900'>
      <h1 className='my-7 text-center font-semibold text-3xl dark:text-white'>Profile</h1>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit} encType='multipart/form-data'>
        <input type="file" accept='image/*' name='profilePhoto' id='profilePhoto' onChange={handleImageFile} ref={filePickerRef} hidden />
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={() => filePickerRef.current.click()} >
          <img src={imageFileUrl ||`${AppUrl}/uploads/`+currentUser.profilePhoto} alt="user" className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />
          
        </div>
        <TextInput type='text' name='username' id='username' placeholder='username' defaultValue={currentUser.username} onChange={handleChange} />
        <TextInput type='text' name='fullName' id='fullName' placeholder='Full name' defaultValue={currentUser.fullName} onChange={handleChange} />
        <TextInput type='email' name='email' id='email' placeholder='email' defaultValue={currentUser.email} onChange={handleChange} />
        <TextInput type='text' name='gender' id='gender' placeholder='gender' defaultValue={currentUser.gender} onChange={handleChange} />
        <TextInput type='text' name='mobile' id='mobile' placeholder='mobile' defaultValue={currentUser.mobile} onChange={handleChange} />
        <TextInput type='text' name='registrationNumber' id='registrationNumber' placeholder='Registration' defaultValue={currentUser.registrationNumber} onChange={handleChange} />
        <TextInput type='text' name='address' id='address' placeholder='address' defaultValue={currentUser.address} onChange={handleChange} />
        <TextInput type='text' name='password' id='password' placeholder='password' onChange={handleChange} />
        <Button gradientDuoTone='purpleToPink' type='submit'>
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default DashProfile