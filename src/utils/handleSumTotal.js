const handleSumTotal = (cart) => {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.attributes.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export default handleSumTotal;
