import React from 'react';
import styles from './card.module.css';

const Card = ({ data, handleSelect, selected, handleDelete }) => {
	return (
		<div className={styles.card}>
			<img src={data.album.images[0].url} alt="" className={styles.cardImage} />
			<div className={styles.flex}>
				<div>
					<div className={styles.title}>{data.name}</div>
					<div className={styles.description}>{data.artists[0].name}</div>
					<div className={styles.description}>{data.album.name}</div>
				</div>
				<div>
					{selected.includes(data.uri) ? (
						<button
							className={`${styles.cardbutton} ${styles.deselect}`}
							onClick={() => handleDelete(data.uri)}
						>
							Deselect
						</button>
					) : (
						<button
							className={`${styles.cardbutton} ${styles.select}`}
							onClick={() => handleSelect(data.uri)}
						>
							Select
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Card;
