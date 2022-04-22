import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Expired } from '../pages';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const value = useSelector((state) => state.token);
	return (
		<Route
			{...rest}
			render={(props) =>
				value.token ? (
					value.expiredToken ? (
						<Expired />
					) : (
						<Component {...props} />
					)
				) : (
					<Redirect
						to={{
							pathname: '/',
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
