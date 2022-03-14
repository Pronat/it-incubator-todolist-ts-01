import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    // C - create
    // R - read
    // U - update
    // D - delete
    //BLL:
    const todoListTitle_1: string = "What to learn"


    let tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    const removeTasks = (id: number) => {
        tasks = tasks.filter(t => t.id !== id)
        console.log(tasks)
    }


    //UI:
    return (
        <div className="App">
            <TodoList
                removeTasks={removeTasks}
                title={todoListTitle_1} tasks={tasks}/>
                tasks={tasks}

        </div>
    );
}

export default App;
