import React, {useState} from 'react';
import {FilterValuesType, TaskType} from './App';
import {Button} from "./components/Button";
import {Input} from "./components/Input";


type PropsType = {
    title: string
    tasks: Array<TaskType>
    todolistId: string
    removeTask: (taskId: string, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const callBackHandlerForAddTask = () => {
        props.addTask(title, props.todolistId)
        setTitle("")
    }
    const onClickHandler = (tId: string) => {
        props.removeTask(tId, props.todolistId)
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
                props.tasks.map(t => {
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
                props.changeFilter('all', props.todolistId)
            }}/>
            <Button name={'active'} callBack={() => {
                props.changeFilter('active', props.todolistId)
            }}/>
            <Button name={'completed'} callBack={() => {
                props.changeFilter('completed', props.todolistId)
            }}/>
        </div>
    </div>
}