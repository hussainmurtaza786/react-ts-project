import CourseGoal from "./CourseGoal";
import { type CourseGoal as cGoal } from '../App'
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type CourseGoalsListData = {
    goals: cGoal[]
    onDeleteGoal: (id: number) => void

}
export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalsListData) {

    if (goals.length === 0) {
        return <InfoBox mode="hint" >
            You have no course goal yet. Start adding up some!
        </InfoBox>
    }

    let warningBox: ReactNode;
    if (goals.length >= 2) {
        warningBox = (
            <InfoBox mode="warning" severity="low" >
                You are collecting a lot of goals.Don't put too much on your plate
            </InfoBox>)
    }
    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity="medium" >
                You are collecting a lot of goals.Don't put too much on your plate
            </InfoBox>)
    }
    if (goals.length > 6) {
        warningBox = (
            <InfoBox mode="warning" severity="high" >
                You are collecting a lot of goals.Don't put too much on your plate
            </InfoBox>)
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>

                            <p>{goal.description}</p>

                        </CourseGoal>
                    </li>
                ))}

            </ul>
        </>
    )
}