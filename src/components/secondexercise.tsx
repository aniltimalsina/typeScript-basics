function SecondExercise() {
  interface iPerson {
    name: string;
    age: number;
  }

  const person: iPerson = {
    name: "Eric",
    age: 28,
  };

  const printAge = (human: iPerson) => {
    return human.age;
  };

  const printName = (human: iPerson) => {
    return human.name;
  };
  return (
    <div>
      <h1>Exercise 2: Interfaces</h1>
      <p>Name: {printName(person)}</p>
      <p>Age: {printAge(person)}</p>
    </div>
  );
}

export default SecondExercise;
