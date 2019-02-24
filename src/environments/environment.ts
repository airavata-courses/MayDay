// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    'purple': 'http://localhost:3000',
    'blue': 'http://localhost:7000',
    'red': 'http://localhost:8080/rest/customers',
    'geocode': 'https://www.mapquestapi.com/geocoding/v1/reverse?key=EvAFDNlMGI6PeGpkR33PAUfF61AvIliz'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
