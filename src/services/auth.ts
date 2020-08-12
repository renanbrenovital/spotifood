const isAuthenticated = () => localStorage.SpotiFoodToken;
const logout = () => {
  localStorage.removeItem('SpotiFoodToken');
  window.location.reload();
};
const token = isAuthenticated() ? JSON.parse(localStorage.SpotiFoodToken).data.access_token : '';

export {
  isAuthenticated,
  logout,
  token
}