export const handleReviewText = (initialStr: string, limit: number) => {
  let sliceTo = limit;

  if (initialStr.length < sliceTo) {
    sliceTo = initialStr.length;
    return initialStr.slice(0, sliceTo);
  }
  return initialStr.slice(0, sliceTo) + "...";
};
