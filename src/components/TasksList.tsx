import React from 'react';
import {TaskType} from "../App";

type TasksListPropsType = {
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
}
const TasksList: React.FC<TasksListPropsType> = (
    {
        tasks,
        removeTasks
    }) => {


    const tasksJSXElements = tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => removeTasks(t.id)}>delete</button>
            </li>
        )
    })

    return (
        <div>
            <ul>
                {tasksJSXElements}
            </ul>
        </div>
    );
};

export default TasksList;