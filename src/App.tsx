import React, {useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValueType = "all" | "active" | "completed"

function App() {
    // C - create
    // R - read
    // U - update
    // D - delete

    console.log(typeof (v1()))

    //BLL:
    const todoListTitle_1: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([         // #345
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redax", isDone: false},
    ])


    const [filter, setFilter] = useState<FilterValueType>("all")
    const removeTasks = (id: string) => {
        const filteredTasks = tasks.filter(t => t.id !== id)   // #456
        setTasks(filteredTasks)   //это другой массив, поэтому Реакт перерисовал setTasks
    }
    const addTask = (title: string) => {
        const newTask = {
            id: v1(),
            title,
            isDone: false,
        }

        // const copy = [...tasks]
        //   copy.unshift(newTask)
        //   setTasks(copy)
        setTasks([newTask, ...tasks])
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

   let taskForTodolist;
    switch (filter) {
        case "active":
            taskForTodolist=tasks.filter(t=>t.isDone === false)
            break;
        case "completed":
            taskForTodolist=tasks.filter(t=>t.isDone === true)
            break;
        default:
            taskForTodolist=tasks
    }

    //UI:
    return (
        <div className="App">
            <TodoList
                addTask={addTask}
                removeTasks={removeTasks}
                title={todoListTitle_1}
                tasks={taskForTodolist}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
