function FourthExercise() {
  const baseNum: number = 7;
  const powerNum: number = 2;
  const squareValue = (base: number, power: number) => Math.pow(base, power);

  return (
    <div>
      <h1>Exercise 4: Function Types</h1>
      <p>
        The {baseNum} (base) raised to the {powerNum} (power) is{" "}
        {squareValue(baseNum, powerNum)}
      </p>
    </div>
  );
}

export default FourthExercise;
