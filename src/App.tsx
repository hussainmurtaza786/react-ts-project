import Header from "./components/Header";
import goalsImg from './assets/goals.jpg'
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {

  const handleDeletGoal = (id: number) => {
    setGoals(prevGoal => prevGoal.filter((goal) => goal.id !== id))
  }

  const [goals, setGoals] = useState<CourseGoal[]>([])
  
  const addGoalHandler = (goal:string,summary:string) => {
    setGoals(prevGoal => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...prevGoal, newGoal]
    })
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }} >
        <h1>Your Course Goal</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoalList onDeleteGoal={handleDeletGoal} goals={goals} />

    </main>
  )
}
