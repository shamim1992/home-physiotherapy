import { TextInput, Button, Label } from 'flowbite-react'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const DashProfile = () => {
    const { currentUser } = useSelector(state => state.user)
    const [imageFile, setImageFile] = useState(null)
    const [imageFileUrl, setImageFileUrl] = useState(null)
    const filePickerRef = useRef()
console.log(currentUser)
    const handleImageFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageFileUrl(URL.createObjectURL(file));
        }
    }
    useEffect(() => {
        if (imageFile) {
            uploadImage()
        }
    }, [imageFile]);

    const uploadImage = async () => {

        console.log('Uploading image...');
    }
    return (
        <div className='max-w-lg mx-auto p-3 w-full dark:bg-gray-900'>
            <h1 className='my-7 text-center font-semibold text-3xl dark:text-white'>Profile</h1>
            <form className='flex flex-col gap-2'>
                <input type="file" accept='image/*' onChange={handleImageFile} ref={filePickerRef} hidden />
                <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={() => filePickerRef.current.click()} >
                    <img src={imageFileUrl || currentUser.profilePicture} alt="user" className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' />
                </div>
                {/* <Label>Username</Label> */}
                <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
                {/* <Label>Full Name</Label> */}
                <TextInput type='text' id='fullname' placeholder='Full name' defaultValue={currentUser.fullName} />
                {/* <Label>Email</Label> */}
                <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} />
                {/* <Label>Gender</Label> */}
                <TextInput type='text' id='gender' placeholder='gender' defaultValue={currentUser.gender} />
                {/* <Label>Mobile</Label> */}
                <TextInput type='text' id='mobile' placeholder='mobile' defaultValue={currentUser.mobile} />
                {/* <Label>Registration</Label> */}
                <TextInput type='text' id='registration' placeholder='Registration' defaultValue={currentUser.registrationNumber} />
                {/* <Label>Address</Label> */}
                <TextInput type='text' id='address' placeholder='address' defaultValue={currentUser.address} />

                {/* <Label>Password</Label> */}
                <TextInput type='text' id='password' placeholder='password' />
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