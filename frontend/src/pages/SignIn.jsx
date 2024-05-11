import { Label, TextInput, Button, Card, Spinner } from 'flowbite-react';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {signInError, signInStart, signInSuccess} from '../app/user/userSlice'
import AppUrl from '../../ApiUrl';

function SignIn() {
    const navigate = useNavigate()
    const { loading, error: errorMessage } = useSelector((state) => state.user);
    
    const [formData, setFormData] = useState({})
    // const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            return dispatch(signInError('Please fill all the fields'));
        }
        
        try {
            dispatch(signInStart())
            const res = await fetch(`${AppUrl}/api/auth/signin/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
           
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInError(data.message));
            }
            if (res.ok === true) {
                dispatch(signInSuccess(data))
                console.log(data)
                
                navigate('/dashboard');
            }
        } catch (error) {
            dispatch(signInError(error.message))
        }
    };

    return (
        <div className='min-h-screen  dark:bg-gray-900 py-20 dark:text-white' >
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 ">
                <div className="flex-1 font-bold text-blue-500 items-center">
                   <h1 className='text-2xl'>ChanRe Physiotherapy</h1> 
                </div>
                <div className="flex-1">
                    <Card className="w-full mx-auto">

                        <form className='flex flex-col gap-4  w-full justify-center' onSubmit={handleSubmit}>
                            <div>
                                <Label value='Your username' />
                                <TextInput
                                    type='text'
                                    placeholder='username'
                                    id='username'
                                    onChange={handleChange} className='outline-purple-500'
                                />
                            </div>
                            <div>
                                <Label value='Your password' />
                                <TextInput
                                    type='password' autoComplete='off'
                                    placeholder='**********'
                                    id='password'
                                    onChange={handleChange}
                                />
                            </div>
                            <Button
                                gradientMonochrome="purple"
                                type='submit'
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <Spinner size='sm' />
                                        <span className='pl-3'>Loading...</span>
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                    </Card>
                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Dont Have an account?</span>
                        <Link to='/signup' className='text-blue-500'>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn