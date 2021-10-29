import React, {useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = props.tasks;

    if (filter === "active") {
        tasksForTodolist = props.tasks.filter(t => !t.isDone);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const callBackHandlerForAddTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onClickHandler = (tId: string) => {
        props.removeTask(tId)
    }

    return <div>
        <h3>{props.title}</h3>
        <Input
            setTitle={setTitle}
            title={title}
            callBack={callBackHandlerForAddTask}
        />
        <Button callBack={callBackHandlerForAddTask} name={"+"}/>
        <ul>
            {
                tasksForTodolist.map(t => {
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'x'} callBack={() => {
                            onClickHandler(t.id)
                        }}/>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'all'} callBack={() => {
                changeFilter('all')
            }}/>
            <Button name={'active'} callBack={() => {
                changeFilter('active')
            }}/>
            <Button name={'completed'} callBack={() => {
                changeFilter('completed')
            }}/>
        </div>
    </div>
}