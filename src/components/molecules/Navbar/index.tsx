import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToken } from '../../../redux/slice/token-slice';
import './navbar.css';

const Navbar = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(removeToken());
	};

	return (
		<div className="navbar-container">
			<ul className="navbar">
				<div className="left-item">
					<Link to="/create-playlist" className="navbar-item">
						Home
					</Link>
					<Link to="/playlist" className="navbar-item">
						Playlist
					</Link>
				</div>
				<div onClick={() => handleLogout()} className="navbar-item logout">
					Logout
				</div>
			</ul>
		</div>
	);
};

export default Navbar;
