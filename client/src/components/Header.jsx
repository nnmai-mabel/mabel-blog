import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/theme/themeSlice';
import { signoutSuccess } from '../../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
	const path = useLocation().pathname;
	const location = useLocation()
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const { currentUser } = useSelector((state) => state.user);
	const [searchTerm, setSearchTerm] = useState('')
	const {theme} = useSelector((state) => state.theme)

	useEffect(() => {
		const urlParams = new URLSearchParams(location.search);
		const searchTermFromUrl = urlParams.get('searchTerm');
		if (searchTermFromUrl) {
		  setSearchTerm(searchTermFromUrl);
		}
	  }, [location.search]);

	const handleSignOut = async () => {
		try {
			const res = await fetch('/api/user/signout', {
				method: 'POST',
			})
			const data = await res.json()
			if(!res.ok){
				console.log(data.message)
			} else{
				dispatch(signoutSuccess())
			}
		} catch (error) {
			console.log(error.message)
		}
	  }
	  const handleSubmit = (e) => {
		e.preventDefault();
		const urlParams = new URLSearchParams(location.search);
		urlParams.set('searchTerm', searchTerm);
		const searchQuery = urlParams.toString();
		navigate(`/search?${searchQuery}`);
	  };
	return (
		<Navbar className='border-b-2'>
			<Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
				<span className='px-2 py-1 bg-gradient-to-r from-blue-800 via-cyan-600 to-teal-300 rounded-lg text-white'>Mabel's</span>
				Blog
			</Link>
			<form onSubmit={handleSubmit}>
				<TextInput
					type='text'
					placeholder='Search...'
					rightIcon={AiOutlineSearch}
					className='hidden lg:inline'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</form>
			<Button className='w-12 h-10 lg:hidden' color='gray' pill>
				<AiOutlineSearch />
			</Button>
			<div className='flex gap-2 md:order-2'>
				<Button
					onClick={() => dispatch(toggleTheme())} 
					className='w-12 h-10 hidden sm:inline' 
					color='gray' 
					pill
				>
					{theme === 'light' ? <FaMoon /> : <FaSun />}
				</Button>
				{currentUser ? (
					<Dropdown
						arrowIcon={false}
						inline
						label={
							<Avatar
								alt='user'
								img={currentUser.profilePicture}
								rounded
							/>
						}
					>
						<Dropdown.Header>
							<span className='block text-sm'>@{currentUser.username}</span>
							<span className='block text-sm font-medium truncate'>{currentUser.email}</span>
						</Dropdown.Header>
						<Link to={'/dashboard?tab=profile'}>
							<Dropdown.Item>Profile</Dropdown.Item>
						</Link>
						<Dropdown.Divider />
						<Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
					</Dropdown>
				) : (
					<Link to='signin'>
						<Button gradientMonochrome='info' outline>
							Sign In
						</Button>
					</Link>
				)}
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				{/* as={'div'} avoid errors of 2 links inside each other */}
				<Navbar.Link active={path === "/"} as={'div'}>
					<Link to="/">
						Home
					</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/about"} as={'div'}>
					<Link to="/about">
						About
					</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/projects"} as={'div'}>
					<Link to="/projects">
						Projects
					</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	)
}
