export const getTheme = () => {
  const theme = localStorage.getItem('theme');
  const value = theme ? theme : 'light';
  return { value };
};
