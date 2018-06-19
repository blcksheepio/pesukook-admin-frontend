// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    app: {
        appTitle: 'Tartu Pesuköök',
        owner: {
            name: 'Tartu Pesuköök',
            address: {
                line1: 'Pikk 14',
                state: 'Tartu'
            },
            emailAddress: {
                value: 'info@pesukook.ee'
            },
            phoneNumber: {
                value: '+372 740 2070'
            }
        },
        developer: {
            name: 'BlcksheepIO',
            emailAddress: {
                value: 'baaa@iamalamb.com'
            },
        }
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
