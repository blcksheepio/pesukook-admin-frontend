import { AppState } from './shared/interfaces/app-state';
import { environment } from '../environments/environment';

export const INITIAL_STATE: AppState = environment.app;
