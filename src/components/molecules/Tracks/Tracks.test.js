import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Tracks from '.';
import store from '../../../redux/store';

describe('Tracks component', () => {
	it('Tracks rendered successfully', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Tracks selected={1} />
				</BrowserRouter>
			</Provider>
		);
	});

	it('Title rendered successfully', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Tracks selected={1} />
				</BrowserRouter>
			</Provider>
		);

		await screen.findByText('List Track');
		await screen.findByText('Pilih track dibawah ini (Max. 10 tracks)');
	});

	it('Button "Next" rendered successfully', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Tracks selected={1} />
				</BrowserRouter>
			</Provider>
		);

		await screen.findByText('Next');
	});
});
