import { TextInput, Button, Label } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import AppUrl from '../../ApiUrl'
import { ToastContainer, toast } from 'react-toastify'

const AddProfilePhoto = () => {
  const { currentUser } = useSelector(state => state.user)
  const [imageFile, setImageFile] = useState(null)
  const [imageFileUrl, setImageFileUrl] = useState(null)
  const filePickerRef = useRef()
  const [formData, setFormData] = useState({})
//   const handleChange = (e) => {
//     setFormData({...formData, [e.target.id]: e.target.value.trim() })
//   }

  const handleSubmit = async (e) => {
   e.preventDefault()
   const formDataToSend = new FormData();
   formDataToSend.append('profilePhoto', imageFile);
    await axios
      .put(`${AppUrl}/api/users/${currentUser._id}`, formDataToSend)
      .then((response) => {
        console.log(response);
        toast(` Profile Picture uploaded!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
        
    }).catch((err) => console.log(err));
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
        <ToastContainer/>
      <h1 className='my-7 text-center font-semibold text-3xl dark:text-white'>Profile Photo</h1>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit} encType='multipart/form-data'>
        <input type="file" accept='image/*' name='profilePhoto' id='profilePhoto' onChange={handleImageFile} ref={filePickerRef} hidden />
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={() => filePickerRef.current.click()} >
          <img src={imageFileUrl ||`${AppUrl}/uploads/`+currentUser.profilePhoto} alt="user" className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />
        </div>
        
        <Button gradientDuoTone='purpleToPink' type='submit'>
          Update
        </Button>
      </form>
      
    </div>
  )
}

export default AddProfilePhoto