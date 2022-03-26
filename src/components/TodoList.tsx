import React from 'react';
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
    const addTask = ()=> props.addTask('Super-Task!!!')
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
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