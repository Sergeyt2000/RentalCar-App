export const getLocation = (car) => {
  if (!car.address) return null;
  const address = car.address.split(", ");
  return {
    city: address[1],
    country: address[2],
  };
};
