import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ListPlaylist from '.';
import store from '../../redux/store';

describe('Playlist component', () => {
	it('List playlist rendered successfully', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ListPlaylist />
				</BrowserRouter>
			</Provider>
		);
	});

	it('Check loading component', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<ListPlaylist />
				</BrowserRouter>
			</Provider>
		);

		await waitFor(() => screen.getByText(/Loading.../i));
	});
});
