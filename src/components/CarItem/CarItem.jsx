export default function CarItem({ car }) {
  return (
    <div>
      <img src={car.img} alt="car" width="300" />
      <h2>{car.brand}</h2>
      <p>{car.rentalPrice }</p>
      <button>Read more</button>
    </div>
  );
}
