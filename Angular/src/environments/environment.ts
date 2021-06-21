// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// let newApiURL = window.location.origin;
export const environment = {
    production: false,
    protfolioUrl: './assets/Data/protfolio.Json',
    subPortfolioUrl: './assets/Data/sub-portfolio.json',
    apiUrl: 'http://localhost:3000/api/',
    LocUrl: 'http://localhost:3000',
    clientId: '6a09f0e8-559b-4189-ab90-b8c75059fa2b',
    tanent: '02aa9fc1-18bc-4798-a020-e01c854dd434',
    redirectUri: 'http://localhost:4300/home',
    postLogoutRedirectUri: 'http://localhost:4300/'
};
