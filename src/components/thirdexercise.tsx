function ThirdExercise() {
  const numArray: number[] = [5, 6, 3, 4, 8];
  return (
    <div>
      <h1>Exercise 3: Arrays and Generics</h1>
      <ul>
        {numArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ThirdExercise;
