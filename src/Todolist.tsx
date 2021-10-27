import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    // const changeFilterOnAll = () => {
    //     props.changeFilter("all")
    // }
    // const changeFilterOnActive = () => {
    //     props.changeFilter("active")
    // }
    // const changeFilterOnCompleted = () => {
    //     props.changeFilter("completed")
    // }

    const changeFilter = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const onClickHandler = (tId: string) => {
        props.removeTask(tId)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
            />
            <Button callBack={addTask} name={'+'}/>
            {/*<button onClick={addTask}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    // const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'x'} callBack={() => {onClickHandler(t.id)}}/>
                        {/*<button onClick={ onClickHandler }>x</button>*/}
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'all'} callBack={() =>{changeFilter('all')}}/>
            <Button name={'active'} callBack={() =>{changeFilter('active')}}/>
            <Button name={'completed'} callBack={() =>{changeFilter('completed')}}/>

            {/*<button onClick={ () => changeFilter('all') }>All</button>*/}
            {/*<button onClick={ () => changeFilter('active') }>Active</button>*/}
            {/*<button onClick={ () => changeFilter('completed') }>Completed</button>*/}
        </div>
    </div>
}