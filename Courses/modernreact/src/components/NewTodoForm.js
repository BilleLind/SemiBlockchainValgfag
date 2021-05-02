import React, {useState} from 'react';
import { from } from 'webpack-sources/lib/CompatSource';
import { connect } from 'react-redux';
import { createTodo } from './actions';

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="new-todo-form">
            <input className="new-todo-input" 
            type="text"
            placeholder="Type your new todo"
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}/>
            <button 
            onClick={() =>{
                const isDublicateText = todos.some(todo =>todo.text === inputValue);
                if(!isDublicateText){
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}
            className="new-todo-button">
                Create todo
            </button>
        </div>
    );
}

const mapStateToProps = state =>({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);