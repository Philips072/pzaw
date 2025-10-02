import { useState } from "react";
import { WorkoutItem } from "./WokroutItem";
import "./App.css";

function App() {
const [workouts, setWorkouts] = useState([
  { id: 1, exercise: "Bieganie", calories: 200, completed: false },
  { id: 2, exercise: "Pompki", calories: 50, completed: true },
  { id: 3, exercise: "Przysiady", calories: 80, completed: false },
  { id: 4, exercise: "Plank", calories: 30, completed: true },
  { id: 5, exercise: "Burpees", calories: 120, completed: false },
  { id: 6, exercise: "Jazda na rowerze", calories: 150, completed: false },
]);

  const onToggleCompleted = (id) => {
    setWorkouts(
      workouts.map((work) => {
       
      })
    )
  }
    // toggleComplete)id)

    // onDelete(id)

    // onUpdateCalories(id)
  
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Exercise</td>
              <td>calories</td>
              <td>completed</td>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <WorkoutItem
                key={workout.id}
                id={workout.id}
                exercise={workout.exercise}
                calories={workout.calories}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
