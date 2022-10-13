export const getFavoritesFromLs = () => {
  const data = localStorage.getItem('favorities');
  const items = data ? JSON.parse(data) : [];
  return { items };
};
