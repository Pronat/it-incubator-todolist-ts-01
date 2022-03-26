import React, {useState} from 'react';
import {FilterValueType, TaskType} from "../App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValueType) => void
}


const TodoList = (props: TodoListPropsType) => {
    const [title, setTitle] = useState<string>("")
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            addTask()
                        }}}
                />
                <button onClick={
                    addTask
                }>+
                </button>
                <TasksList
                    tasks={props.tasks}
                    removeTasks={props.removeTasks}
                />

                <Button changeFilter={} title={"All"}/>
                <Button title={"Active"}/>
                <Button title={"Completed"}/>
            </div>
        </div>
    )
}

export default TodoList;