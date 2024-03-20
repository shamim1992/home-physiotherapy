import { Avatar, Button, Navbar, TextInput, Dropdown } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../app/theme/themeSlice';
import { IoCartOutline } from "react-icons/io5";
import { signOut } from '../app/user/userSlice';

const Header = () => {
    const dispatch = useDispatch()
    const { theme } = useSelector(state => state.theme);
    const path = useLocation().pathname;
    const { currentUser } = useSelector(state => state.user);
    const cartItems = useSelector(state => state.cart.items);
    const navigate = useNavigate();

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }
    const handleSignOut = async () => {
        try {
            const res = await fetch(`/api/auth/signout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(res)
            if (res.ok) {
                dispatch(signOut())
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <Navbar className='border-b-2'>
            <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                    ChanRe
                </span>
                Physio
            </Link>
            <div className='flex gap-2 md:order-2'>
                <Link to={'/cart'}>
                    <Button color='gray' pill> <IoCartOutline className='w-6 h-6 sm:inline dark:text-white' ></IoCartOutline><small className='text-red-500 font-semibold'>{cartItems.length || ''}</small> </Button>
                </Link>
                <Button className='w-12 h-10 sm:inline' color='gray' pill onClick={handleToggleTheme}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </Button>
                {currentUser ? 
                    <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                        <Dropdown.Header>
                            <span className="block text-sm capitalize">{currentUser.username}</span>
                            <span className="block truncate text-sm font-medium">{currentUser.email}</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
                    </Dropdown>
                        : <Link to='/signin'><Button gradientDuoTone='purpleToBlue' outline>Sign in</Button></Link>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>

                
                {currentUser ? <Navbar.Link active={path === "/dashboard"} as={'div'}>
                    <Link to='/dashboard'>Dashboard</Link>
                </Navbar.Link> : ''}




            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header