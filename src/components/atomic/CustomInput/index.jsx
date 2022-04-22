import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
	'&.MuiOutlinedInput-root.Mui-error': {
		color: 'red',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#dadada',
		},
		'&:hover fieldset': {
			borderColor: '#dadada',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#dadada',
		},
	},
});

const inputProps = {
	variant: 'outlined',
	margin: 'normal',
	InputLabelProps: {
		style: {
			color: 'white',
		},
	},
	InputProps: {
		style: {
			color: 'white',
		},
	},
};

const CustomInput = ({ ...props }) => {
	return <CustomTextField {...props} {...inputProps} />;
};

export default CustomInput;
