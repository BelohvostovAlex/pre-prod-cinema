export const createArrOfDaysFromNumber = (num: number) => {
  return Array.from(Array(num).keys()).map((item) => item + 1);
};
