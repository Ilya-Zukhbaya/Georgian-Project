export const getChoosenTypeFromLs = () => {
  const data = localStorage.getItem('choosenType');
  const type = data ? JSON.parse(data) : 0;
  return { type };
};
