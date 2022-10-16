export const getProgressFromLs = () => {
  const data = localStorage.getItem('progress');
  const items = data ? JSON.parse(data) : [];
  return { items };
};
