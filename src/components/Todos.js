import React from 'react';
import TodolistItem from './TodoListItem.js';
import NewTodoForm from './NewTodoForm';
import './Todo.css';


const TodoList = ({todos = []}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo=><TodoListItem todo ={todo}/> )}
    </div>
);


export default TodoList;