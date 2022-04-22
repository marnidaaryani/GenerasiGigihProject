import React, { useState } from 'react';
import {
	Container,
	Loading,
	Navbar,
	PlaylistForm,
	Search,
	Tracks,
} from '../../components';
import './home.css';

type playlistData = {
	title: string;
	description: string;
};

const Home = () => {
	const [value, setValue] = useState<string>('');
	const [step, setStep] = useState<number>(1);
	const [loadingMessage, setLoadingMessage] = useState<string>('');
	const [result, setResult] = useState<object[]>([]);
	const [selected, setSelected] = useState<string[]>([]);
	const [playlistData, setPlaylistData] = useState<playlistData>({
		title: '',
		description: '',
	});

	const renderSwitch = () => {
		switch (step) {
			case 1:
				return (
					<>
						<Search
							setResult={setResult}
							setValue={setValue}
							value={value}
							setLoadingMessage={setLoadingMessage}
						/>
						{!result.length ? (
							loadingMessage && <Loading />
						) : (
							<Tracks
								data={result}
								selected={selected}
								setSelected={setSelected}
								setStep={setStep}
							/>
						)}
					</>
				);
			case 2:
				return (
					<PlaylistForm
						playlistData={playlistData}
						setPlaylistData={setPlaylistData}
						selected={selected}
						setSelected={setSelected}
					/>
				);
			default:
				null;
		}
	};

	return (
		<>
			<Navbar />
			<Container>
				<div className="item-container">
					<div className="create-playlist-container">{renderSwitch()}</div>
				</div>
			</Container>
		</>
	);
};

export default Home;
