import React, {useState} from 'react';
import {TaskType} from "../App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
}


const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const addTask = ()=> props.addTask(title)
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={(e)=>setTitle(e.currentTarget.value)}/>
                <button onClick={
                    addTask
                }>+
                </button>
                <TasksList
                    tasks={props.tasks}
                    removeTasks={props.removeTasks}
                />

                <Button title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    )
}

export default TodoList;