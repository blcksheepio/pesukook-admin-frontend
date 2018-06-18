import { Organization } from './company/organization';

export interface AppState {
    appTitle: string;
    owner: Organization;
    developer: Organization;
}
