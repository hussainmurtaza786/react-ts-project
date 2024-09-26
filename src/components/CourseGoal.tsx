import { PropsWithChildren } from "react"

// interface Data { title: string, children: ReactNode }
// Both the ways are correct its your choice 
type Data = PropsWithChildren<{id:number; title: string; onDelete: (id: number) => void }>



export default function CourseGoal({ title, children, onDelete,id }: Data) {
    return (
        <article>
            <div>
                <h2>{title} </h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

// const CourseGoal: FC<Data> = ({ title, children }) => {
//     return (
//         <article>
//             <div>
//                 <h2>{title} </h2>
//                 <h2>{children} </h2>
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }
// export default CourseGoal