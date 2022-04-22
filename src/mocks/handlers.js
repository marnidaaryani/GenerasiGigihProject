import { rest } from 'msw';
import { playlistResult } from './json/playlistResult';

export const handlers = [
	rest.get('https://api.spotify.com/v1/me/playlists', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json(playlistResult));
	}),
];
