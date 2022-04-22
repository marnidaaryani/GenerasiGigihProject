import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Loading, Navbar } from '../../components';
import { resetToken } from '../../redux/slice/token-slice';
import styles from './list-playlist.module.css';

const ListPlaylist = () => {
	const [playlist, setPlaylist] = useState([]);
	// const [loading, setLoading] = useState('');
	const dispatch = useDispatch();
	const token = useSelector((state) => state.token.token);

	useEffect(() => {
		const url = `https://api.spotify.com/v1`;
		const header = {
			Authorization: 'Bearer ' + token,
		};
		fetch(`${url}/me/playlists`, {
			headers: header,
		})
			.then((res) => res.json())
			.then((res) => {
				if (typeof res.error === 'object') {
					dispatch(resetToken(true));
				} else {
					setPlaylist(res);
				}
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<>
			<Navbar />
			<Container>
				<div className={styles.listPlaylistContainer}>
					<Header size="center">
						Lihat daftar playlist yang telah kamu buat
					</Header>
					<Header size="title">List Playlist</Header>
					{typeof playlist.items !== 'undefined' ? (
						<div className={styles.gridContainer}>
							{playlist.items.map((data) => (
								<div key={data.id} className={styles.cardContainer}>
									<div className={styles.playlistCard}>
										<img
											src={data.images[0].url}
											alt=""
											className={styles.cardImage}
										/>
										<div className={styles.cardBody}>
											<div className={styles.cardHeader}>Playlist</div>
											<div
												className={styles.cardTitle}
												data-testid="custom-element"
											>
												{data.name}
											</div>
											<div className={styles.cardContent}>
												{data.description}
											</div>
											<div className={styles.flex}>
												<div className={styles.author}>
													{data.owner.display_name}
												</div>
												<div className={styles.dot}>•</div>
												<div className={styles.tracks}>
													{data.tracks.total} Tracks
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className={styles.loadingContainer}>
							<Loading />
						</div>
					)}
				</div>
			</Container>
		</>
	);
};

export default ListPlaylist;
