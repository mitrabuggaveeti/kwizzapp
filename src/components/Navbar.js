import React from 'react'
import Sidebar from './Sidebar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
const Appbar = ({ user, setUser }) => {
	return (
		<div className='appbar'>
			<div className='slider'>
				<Sidebar />
				<Link to='/' className='home'>
					<b>Kwizz</b>app
				</Link>
			</div>
			<div className='appbar-user'>
				<Icon>
					<AccountCircle />
				</Icon>
				<p>{user.name}</p>
			</div>
		</div>
	)
}

export default Appbar
