import React, { useState } from 'react';
import Header from '../../atomic/Header';
import Card from '../../atomic/Card';
import styles from './card-container.module.css';
import CustomButton from '../../atomic/CustomButton';

type trackProps = {
	data: object[];
	selected: string[];
	setSelected: Function;
	setStep: Function;
};

const Tracks = ({ data, selected, setSelected, setStep }: trackProps) => {
	const [message, setMessage] = useState<string>('');
	const handleSelect = (uri: string) => {
		setSelected([...selected, uri]);
	};

	const handleDelete = (uri: string) => {
		setSelected(selected.filter((item) => item !== uri));
	};

	const handleNextStep = () => {
		if (selected.length) {
			if (selected.length <= 10) {
				setStep(2);
			} else {
				setMessage('Jumlah Track yang dipilih lebih dari 10');
			}
		} else {
			setMessage('Pilih minimal 1 track untuk melanjutkan');
		}
	};

	return (
		<div className={styles.cardContainer}>
			<Header size="title">List Track</Header>
			<Header size="center">Pilih track dibawah ini (Max. 10 tracks)</Header>
			<div className={styles.cardGrid}>
				{data?.map((data, id) => (
					<Card
						data={data}
						key={id}
						handleSelect={handleSelect}
						handleDelete={handleDelete}
						selected={selected}
					/>
				))}
			</div>
			<div className={styles.bottomSection}>
				<div className={styles.buttonContainer}>
					<CustomButton
						onClick={() => handleNextStep()}
						className={styles.buttonNext}
					>
						Next
					</CustomButton>
				</div>
				<div className={styles.buttonContainer}>
					{(!selected.length || selected.length > 10) && (
						<div className={styles.errorMessage}>{message}</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tracks;
