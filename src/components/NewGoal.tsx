import { useRef, type FormEvent } from "react"

type NewGoalProps = {
    onAddGoal: (goal: string, summary: string) => void
}

export default function NewGoal({onAddGoal}:NewGoalProps) {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const enteredGoal = goal.current!.value
        const enteredSummary = summary.current!.value

        event.currentTarget.reset()
        onAddGoal(enteredGoal,enteredSummary)
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal
                    <input ref={goal} id="goal" type="text" name="goal" />
                </label>
            </p>
            <p>
                <label htmlFor="summary"> Short Summary
                    <input ref={summary} id="summary" type="text" name="summary" />
                </label>
            </p>
            <p>
                <button>Add Goal</button>
            </p>

        </form>
    )
}