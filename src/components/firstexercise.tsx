function FirstExercise() {
  const language: string = "JavaScript";
  const creationDate: number = 1995;
  const hasLibrary: boolean = true;
  const library: string = "React";

  const checkLibrary = function (lib: string) {
    console.log(lib);
    if (hasLibrary) {
      return "true";
    }
  };

  return (
    <div>
      <h1>Exercise 1: Type Annotations</h1>
      <p>Language: {language}</p>
      <p>Year of Creation: {creationDate}</p>
      <p>Does Javascript have any library? : {checkLibrary(library)}</p>
      <p>Can we say React is JavaScript's Library? {checkLibrary(library)}</p>
    </div>
  );
}

export default FirstExercise;
