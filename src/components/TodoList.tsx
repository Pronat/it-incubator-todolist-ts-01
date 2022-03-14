import React from 'react';
import {TaskType} from "../App";
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string;
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
}

const TodoList = (props: TodoListPropsType) => {
    return (

        <div>
            <TodoListHeader title={props.title} />
            <div>
                <input/>
                <button>+</button>
                <TasksList
                    tasks={props.tasks}
                    removeTasks={props.removeTasks}
                />

                <Button title={"All"} />
                <Button title={"Active"} />
                <Button title={"Completed"} />
            </div>
        </div>
    )
}

export default TodoList;