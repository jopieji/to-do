import React, {useState} from 'react';
import { v4 } from "uuid";
import { Button, TextField } from "@material-ui/core";
import UIfx from 'uifx';
import menuAdd from '../my-sounds/menuAdd.mp3';

const menuSound = new UIfx(menuAdd);

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        menuSound.play(0.3);
        if (todo.task.trim()) {
            addTodo({ ...todo, id: v4() });
            setTodo({ ...todo, task: "" });
        } 
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField 
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;

