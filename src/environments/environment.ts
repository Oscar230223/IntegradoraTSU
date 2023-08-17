// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Configuracion de firebase ya determinada al momento de crear un nuevo proyecto (identificadores y claves)
export const environment = {
  production: false,
  firebaseConfig : {

    apiKey: "AIzaSyCSYwpvw6ON9X4KCy4CgprVh0VIcBYRiw8",
  
    authDomain: "logines-535eb.firebaseapp.com",
  
    projectId: "logines-535eb",
  
    storageBucket: "logines-535eb.appspot.com",
  
    messagingSenderId: "162435966724",
  
    appId: "1:162435966724:web:cb900f5ed8aa34745b1251",
  
    measurementId: "G-L53JJRFSEG"
  
  }
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
