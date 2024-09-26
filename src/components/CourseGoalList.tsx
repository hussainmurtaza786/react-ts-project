import CourseGoal from "./CourseGoal";
import { type CourseGoal as cGoal } from '../App'

type CourseGoalsListData = {
    goals: cGoal[]
    onDeleteGoal: (id:number) => void

}
export default function CourseGoalList({ goals,onDeleteGoal }: CourseGoalsListData) {
    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>

                        <p>{goal.description}</p>

                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}