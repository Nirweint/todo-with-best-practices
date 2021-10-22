import React from 'react';
import {FilterType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    filterTasks: (value: FilterType) => void
}

export function Todolist(props: PropsType) {

    let liElement = props.tasks.map(t =>
        <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={() => {props.removeTask(t.id)}}>x</button>
        </li>)

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {liElement}
        </ul>
        <div>
            <button >All</button>
            <button >Active</button>
            <button >Completed</button>
        </div>
    </div>
}
