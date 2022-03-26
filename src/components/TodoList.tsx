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
                <Button title={"+"} onClickHandler={addTask} />
                {/*<button onClick={addTask}>+</button>*/}
                <TasksList
                    tasks={props.tasks}
                    removeTasks={props.removeTasks}
                />

                <Button
                    onClickHandler={()=>props.changeFilter("all")}
                    title={"All"}/>
                <Button
                    onClickHandler={()=>props.changeFilter("active")}
                    title={"Active"}/>
                <Button
                    onClickHandler={()=>props.changeFilter("completed")}
                    title={"Completed"}/>
            </div>
        </div>
    )
}

export default TodoList;