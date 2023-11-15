function FifthExercise() {
  interface iCar {
    make: string;
    model: string;
  }

  interface iBike {
    brand: string;
    type: string;
  }
  const unionCar: iCar | iBike = {
    make: "Honda",
    model: "Accord",
  };

  const unionBike: iCar | iBike = {
    brand: "Canyon",
    type: "Mountain",
  };

  const IntersectionVehicle: iCar & iBike = {
    make: "Audi",
    model: "A8",
    brand: "Cervelo",
    type: "Gravel",
  };

  return (
    <div>
      <h1>Exercise 5: Union and Intersection Types</h1>
      <h2>For Car using Union</h2>
      <p>Make = {unionCar.make}</p>
      <p>Model = {unionCar.model}</p>
      <h2>For Bike using Union</h2>
      <p>Brand = {unionBike.brand}</p>
      <p>Type = {unionBike.type}</p>
      <h2>For Both using Intersection</h2>
      <p>Make = {IntersectionVehicle.make}</p>
      <p>Model = {IntersectionVehicle.model}</p>
      <p>Brand = {IntersectionVehicle.brand}</p>
      <p>Type = {IntersectionVehicle.type}</p>
    </div>
  );
}

export default FifthExercise;
