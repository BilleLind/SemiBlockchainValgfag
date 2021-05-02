import React, {useState} from 'react';


const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="new-todo-form">
            <input className="new-todo-input" 
            type="text"
            placeholder="Type your new todo"
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}/>
            <button className="new-todo-button">Create todo</button>
        </div>
    );
}


export default NewTodoForm;