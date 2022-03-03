import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import UIfx from 'uifx';
import mp3File from '../my-sounds/click1.mp3';

const click = new UIfx(mp3File);

function Todo({ todo, toggleComplete, removeTodo }) {
    
    function handleCheckboxClick() {
        toggleComplete(todo.id);
        click.play(0.5);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

   return (
    <ListItem style={{ display: "flex" }}>
        <Checkbox 
            checked={todo.completed}
            onClick={handleCheckboxClick} 
        />
        <Typography
            variant="body1"
            style={{
                textDecoration: todo.completed ? "line-through" : null
            }}
        >{todo.task}</Typography>
        <IconButton onClick={handleRemoveClick}>
            <CloseIcon />
        </IconButton>
    </ListItem>
    
   ); 
}

export default Todo;