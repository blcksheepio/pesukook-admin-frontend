import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { appReducer } from '../app.reducer';
import { INITIAL_STATE } from '../app.store';
import { AppState } from '../shared/interfaces/app-state';

@NgModule({
    imports: [
        CommonModule,
        NgReduxModule
    ],
    declarations: []
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule, ngRedux: NgRedux<AppState>) {
        /*
            Ensure that the module can only be imported
            once by AppModule
         */
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }

        /*
            Initialize NgRedux
         */
        ngRedux.configureStore(appReducer, INITIAL_STATE);
    }
}
