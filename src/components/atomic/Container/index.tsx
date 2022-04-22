import React, { ReactChild } from 'react';
import styles from './container.module.css';

type containerProps = {
	children: ReactChild | ReactChild[];
};

const Container = ({ children }: containerProps) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
