import React, {useState} from 'react';
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
    const [tasks, setTasks] = useState([         // #345
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])



    const removeTasks = (id: number) => {
       const filteredTasks = tasks.filter(t => t.id !== id)   // #456
        setTasks(filteredTasks)   //это другой массив, поэтому Реакт перерисовал setTasks
    }


    //UI:
    return (
        <div className="App">
            <TodoList
                removeTasks={removeTasks}
                title={todoListTitle_1}
                tasks={tasks}/>
        </div>
    );
}

export default App;
