import React, { FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components';
import { RootState } from '../../redux/store';
import './login.css';

const Login = () => {
	const history = useHistory();
	const token = useSelector((state: RootState) => state.token.token);
	const generateRandomString = (length: number) => {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		var stateKey = 'spotify_auth_state';
		var client_id = String(process.env.REACT_APP_SPOTIFY_CLIENT_ID);
		var redirect_uri = 'http://lagalio.vercel.app/';

		var state = generateRandomString(16);

		localStorage.setItem(stateKey, state);
		var scope =
			'user-read-private user-read-email playlist-modify-private playlist-read-private';

		var url = 'https://accounts.spotify.com/authorize';
		url += '?response_type=token';
		url += '&client_id=' + encodeURIComponent(client_id);
		url += '&scope=' + encodeURIComponent(scope);
		url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
		url += '&state=' + encodeURIComponent(state);

		window.location.href = url;
	};

	if (token) {
		history.push({
			pathname: '/create-playlist',
		});
	}

	return (
		<div className="login-container">
			<Header size="title">Selamat Datang!</Header>
			<Header size="center">
				Sebelum melanjutkan, login terlebih dahulu yuk! 😆
			</Header>
			<div onClick={(e) => handleLogin(e)} className="button">
				Klik disini untuk Login
			</div>
		</div>
	);
};

export default Login;
