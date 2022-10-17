export const getFavoritesFromLs = () => {
  const data = localStorage.getItem('favorities');
  const items = data ? JSON.parse(data) : [];
  return { items };
};
export const getChoosenTypeFromLs = () => {
  const data = localStorage.getItem('choosenType');
  const type = data ? JSON.parse(data) : 0;
  return { type };
};
export const getProgressFromLs = () => {
  const data = localStorage.getItem('progress');
  const items = data ? JSON.parse(data) : [];
  return { items };
};
export const getTheme = () => {
  const theme = localStorage.getItem('theme');
  const value = theme ? theme : 'light';
  return { value };
};
