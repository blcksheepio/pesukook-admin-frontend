import { Action } from 'redux';
import { AppState } from './shared/interfaces/app-state';
import { INITIAL_STATE } from './app.store';

export function appReducer(lastState: AppState = INITIAL_STATE, action: Action): AppState {
    return lastState;
}
