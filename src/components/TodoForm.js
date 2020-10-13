import {Button, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {v4 as uuid} from "uuid";


function TodoForm({addTodo}){
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo, task: e.target.value});
    }

    function handlesSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuid()});
            // reset task input
            setTodo({...todo, task: ""});
        }
    }

    return (
        <form className="todo-form" onSubmit={handlesSubmit}>
            <TextField
                label="Task"
                name="taks"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">submit</Button>
        </form>
    );
}

export default TodoForm;