import React from 'react';
import {TaskType} from "../App";

type TasksListPropsType = {
    tasks: Array<TaskType>;
    removeTasks: (id: number) => void
}
const TasksList: React.FC<TasksListPropsType> = (
    {
        tasks,
        removeTasks
    }) => {


    const tasksJSXElements = tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/> <span>{t.title}</span>
                <button onClick={()=>removeTasks(t.id)}>x</button>
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