import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const Buttons = styled(Button)(() => ({
	backgroundColor: 'none',
	border: '1px solid #dadada',
	color: 'white',
	marginTop: '8px',
	fontFamily: 'Poppins, sans-serif',
	':disabled': {
		backgroundColor: '#dadada',
	},
	'&:hover': {
		backgroundColor: '#dadada',
	},
}));

const CustomButton = ({ children, ...props }) => {
	return <Buttons {...props}>{children}</Buttons>;
};

export default CustomButton;
