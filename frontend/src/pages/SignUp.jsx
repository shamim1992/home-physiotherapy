import { Label, TextInput, Button, Card, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpError, signUpStart, signUpSuccess } from '../app/user/userSlice';
import physio from '../../src/assets/physiotherapy.png'

function SignUp() {
    const navigate = useNavigate();
    const { loading, error: errorMessage } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.username || !formData.password || !formData.email || !formData.mobile) {
            return dispatch(signUpError('Please fill all the required fields'));
        }

        try {
            dispatch(signUpStart());
            const res = await fetch(`/api/auth/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success === false) {
                dispatch(signUpError(data.message));
            }
            if (res.ok === true) {
                dispatch(signUpSuccess(data));
                console.log(data);
                navigate('/dashboard');
            }
        } catch (error) {
            dispatch(signUpError(error.message));
        }
    };

    return (
        <div className='min-h-screen  dark:bg-gray-900 py-20 dark:text-white'>
            <div className="flex p-3 max-w-3xl mx-auto justify-between flex-col md:flex-row md:items-center gap-5 ">
                <div className="flex-1 font-bold text-blue-500 items-center">
                   <img src={physio} alt="" className='w-[100%]' />
                </div>
                <div className="flex-1">
                    <Card className="w-full mx-auto">
                        <form className='flex flex-col gap-4  w-full justify-center' onSubmit={handleSubmit}>
                            <div>
                                <Label value='Full Name' />
                                <TextInput
                                    type='text'
                                    placeholder='John Doe'
                                    id='fullName'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                    required
                                />
                            </div>
                            <div>
                                <Label value='Your username' />
                                <TextInput
                                    type='text'
                                    placeholder='username'
                                    id='username'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                    required
                                />
                            </div>
                            <div>
                                <Label value='Your email' />
                                <TextInput
                                    type='email'
                                    placeholder='example@email.com'
                                    id='email'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                    required
                                />
                            </div>
                            <div>
                                <Label value='Mobile Number' />
                                <TextInput
                                    type='text'
                                    placeholder='1234567890'
                                    id='mobile'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                    required
                                />
                            </div>
                            <div>
                                <Label value='Your password' />
                                <TextInput
                                    type='password'
                                    autoComplete='off'
                                    placeholder='**********'
                                    id='password'
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label value='Address' />
                                <TextInput
                                    type='text'
                                    placeholder='123 Main St, City'
                                    id='address'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                />
                            </div>
                            <div>
                                <Label value='Age' />
                                <TextInput
                                    type='number'
                                    placeholder='25'
                                    id='age'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                />
                            </div>
                            <div>
                                <Label value='Gender' />
                                <TextInput
                                    type='text'
                                    placeholder='Male/Female/Other'
                                    id='gender'
                                    onChange={handleChange}
                                    className='outline-purple-500'
                                />
                            </div>
                            <div>
                                <Label value='Registration Number (if applicable)' />
                                <TextInput
                                    type='text'
                                    placeholder='123456'
                                    id='registrationNumber'
                                    onChange={handleChange}
                                    className='outline-purple-500'
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
                                    'Sign Up'
                                )}
                            </Button>
                        </form>
                    </Card>
                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Already Have an account?</span>
                        <Link to='/signin' className='text-blue-500'>
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;