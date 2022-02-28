import React from 'react';

 type TodolistHeaderPropsType = {
     title: string
 }
const TodoListHeader = (props: TodolistHeaderPropsType) => {
    return (
        <h3>{props.title}</h3>
    );
};

export default TodoListHeader;