let newApiURL = window.location.origin;
console.log("UAT selected!!!!");
export const environment = {
  production: false,
  environmentName:'uat',
  apiUrl: `${newApiURL}/api/`,
  LocUrl: newApiURL,
  protfolioUrl: './assets/Data/protfolio.Json',
  subPortfolioUrl: './assets/Data/sub-portfolio.json',
  clientId: 'bebdab75-b028-4e68-b938-ac80dd3c63bf',
  tanent: '02aa9fc1-18bc-4798-a020-e01c854dd434',
  redirectUri: 'https://fastlaneuat.lntinfotech.com:8443',
  postLogoutRedirectUri: 'https://fastlaneuat.lntinfotech.com:8443'
};
