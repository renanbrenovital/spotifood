const token = localStorage.getItem('@Spotifood:token') || '';
const { access_token } = token ? JSON.parse(token) : { access_token : '' };

export const isAuthenticated = () => access_token;
