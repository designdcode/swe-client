export const getNumber = (
  index: number,
  dataLength: number,
  currentPage: number
): number => {
  let res: number = 0;
  try {
    if (currentPage === 1) res = dataLength - index;
    else res = dataLength - (currentPage - 1) * 10 - index;
    return res;
  } catch (err) {
    return err.message;
  }
};
