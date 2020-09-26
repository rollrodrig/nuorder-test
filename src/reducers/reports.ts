import { shuffle } from 'lodash';
import produce from 'immer';
export const initialState = () => ({
	bugs: [],
});
const ACTIONS = {
	GAME_UPDATE_ORIGIN: 'GAME_UPDATE_ORIGIN',
};
export const Game = (
	state = initialState(),
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ACTIONS.GAME_UPDATE_ORIGIN:
			return {
				...state,
				origin: action.payload.origin,
			};
		default:
			return state;
	}
};
