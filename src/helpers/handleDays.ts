export const handleDays = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const days = new Date(year, month, 0).getDate();

  return { days, day };
};
