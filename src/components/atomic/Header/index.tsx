import React, { ReactChild } from 'react';
import './header.css';

type headerProps = {
	children: ReactChild | ReactChild[];
	size: string;
};

const Header = ({ children, size }: headerProps) => {
	return <div className={`${size}`}>{children}</div>;
};

export default Header;
