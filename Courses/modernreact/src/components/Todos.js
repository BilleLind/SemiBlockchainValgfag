import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './Todo.css';


const TodoList = ({todos = [{text: 'hello'}]  }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo}/> )}
    </div>
);


export default TodoList;