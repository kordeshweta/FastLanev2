let newApiURL = window.location.origin;
export const environment = {
  production: true,
  apiUrl: `${newApiURL}/api/`,
  LocUrl: newApiURL,
  protfolioUrl: './assets/Data/protfolio.Json',
  subPortfolioUrl: './assets/Data/sub-portfolio.json',

  clientId: 'd93f2512-72df-461c-b49a-8a00619c9c30',
  tanent: '02aa9fc1-18bc-4798-a020-e01c854dd434',
  redirectUri: 'https://fastlane.lntinfotech.com',
  postLogoutRedirectUri: 'https://fastlane.lntinfotech.com'
};
