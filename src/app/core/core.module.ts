import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

@NgModule({
    imports: [
        CommonModule,
        NgReduxModule
    ],
    declarations: []
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        /*
            Ensure that the module can only be imported
            once by AppModule
         */
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
