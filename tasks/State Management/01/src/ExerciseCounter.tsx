import { useState } from "react";

interface ExerciseCounterProps {
  exerciseName: string;
}

export function ExerciseCounter({ exerciseName }: ExerciseCounterProps) {
  const [count, setCount] = useState(0)

  const increment  = () => setCount(prev => prev += 1)
  const decrement = () => setCount(prev => Math.max(prev - 1, 0))
  const reset = () => setCount(0)

  return (
    <div className="exercise-counter">
      <h3>{exerciseName}</h3>
      <p>Кол-во упражнений:</p>
      <p>{count}</p>
      <button aria-label="Decrement" onClick={decrement}>Decrement</button>
      <button aria-label="Increment" onClick={increment}>Increment</button>
      <button aria-label="Reset" onClick={reset}>Reset</button>
    </div>
  );
}
