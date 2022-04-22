import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Search from '.';
import store from '../../../redux/store';

describe('Search component', () => {
	it('Search rendered successfully', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Search />
				</BrowserRouter>
			</Provider>
		);
	});
});
