import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import UIfx from 'uifx';
import mp3File from '../my-sounds/click1.mp3';
import modClick from '../my-sounds/modernclick.wav';

const click = new UIfx(mp3File);
const modClick = new UIfx(modClick);

function Todo({ todo, toggleComplete, removeTodo }) {
    
    function handleCheckboxClick() {
        modClick.play(0.5);
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        click.play(0.5);
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