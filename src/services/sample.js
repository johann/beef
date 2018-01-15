export default (arr, num = 1) => {
  return [...new Array(num)].map(el => {
    return arr[Math.floor(Math.random() * arr.length)];
  });
};
