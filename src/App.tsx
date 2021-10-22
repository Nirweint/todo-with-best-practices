import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterType = "all" | 'completed' | 'active'

function App() {

    let initialState = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Redux", isDone: false},
    ];

    let [tasks, setTasks ] = useState(initialState)
    let [filter, setFilter] = useState<FilterType>('all')

    function removeTask(taskId: number) {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    function filterTasks(value: FilterType) {
        setFilter(value)
    }

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isDone)
    }

    if (filter === "completed") {
      tasksForTodolist = tasks.filter(t => t.isDone)
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                filterTasks={filterTasks}/>
        </div>
    );
}

export default App;
