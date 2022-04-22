import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../atomic/Header';
import CustomInput from '../../atomic/CustomInput';
import './playlist-form.css';
import CustomButton from '../../atomic/CustomButton';

const PlaylistForm = ({
	playlistData,
	setPlaylistData,
	selected,
	setSelected,
}) => {
	const [message, setMessage] = useState('');
	const [buttonLoading, setButtonLoading] = useState(false);

	const token = useSelector((state) => state.token.token);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setPlaylistData({
			...playlistData,
			[id]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (playlistData.title.length > 10) {
			if (selected.length) {
				setButtonLoading(true);
				let url = `https://api.spotify.com/v1`;
				const header = {
					Authorization: 'Bearer ' + token,
				};

				const result = fetch(`${url}/me`, {
					headers: header,
				})
					.then((res) => res.json())
					.then((res) => {
						return fetch(`${url}/users/${res.id}/playlists`, {
							method: 'POST',
							headers: header,
							body: JSON.stringify({
								name: playlistData.title,
								description: playlistData.description,
								public: false,
							}),
						});
					})
					.then((response) => response.json());

				result
					.then((res) => {
						return fetch(`${url}/playlists/${res.id}/tracks`, {
							method: 'POST',
							headers: header,
							body: JSON.stringify({
								uris: selected,
							}),
						});
					})
					.then((res) => res.json())
					.then((res) => {
						console.log(res);
						setSelected([]);
						setMessage('Playlist berhasil terbuat!');
						setButtonLoading(false);
					});
			} else {
				setMessage('⚠️ Belum ada lagu yang terpilih');
			}
		} else {
			setMessage('⚠️ Panjang title kurang dari 10 karakter');
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} className="forms">
			<Header size="title">Create Playlist</Header>
			<Header size="center">
				masukkan data playlist yang mau kamu buat dibawah
			</Header>
			<div className="playlist-form">
				<div className="label-input-container">
					<CustomInput
						id="title"
						label="Title"
						className="input-title"
						value={playlistData.title}
						onChange={(e) => handleChange(e)}
						error={message.includes('10 karakter') ? true : false}
					/>
					{message.includes('10 karakter') && (
						<div className="minimum">*Minimal 10 karakter</div>
					)}
					<CustomInput
						id="description"
						label="Description"
						multiline
						rows={4}
						value={playlistData.description}
						onChange={(e) => handleChange(e)}
					/>
					<CustomButton
						type="submit"
						className="submit-playlist"
						disabled={buttonLoading}
					>
						{buttonLoading ? 'Loading...' : 'Submit'}
					</CustomButton>
					{message && (
						<div
							className={
								message === 'Playlist berhasil terbuat!'
									? 'success-message'
									: 'error-message'
							}
						>
							{message}
						</div>
					)}
				</div>
			</div>
		</form>
	);
};

export default PlaylistForm;
