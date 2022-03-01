import React from "react";
import Todo from "./Todo";

const TodoList = ({todoList}) => {
    return (
        <div>
            {todoList.map(todo => {
                return (
                    <div className="spacer">
                    <Todo todo={todo}/>
                    </div>
                );
        })}
        </div>
    );
};

export default TodoList;