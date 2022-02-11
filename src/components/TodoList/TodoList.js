import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css"

const TodoList = (props) => {

/*  let todoList = [{
    id:1,
    title:'abc',
    completed:false
  },
  {
    id:2,
    title:'abc1',
    completed:false
  }]*/
  let todoList=JSON.parse(localStorage.getItem('taskList'))
  
  
  

  return (
    <div className={`${styles.TodoListStyle}`}>
      {todoList.map((d) => {
        return (
          <TodoItem title = {d.title} key={d.id} completed={d.completed} />
        );
      })}
    </div>
  );
};

export default TodoList;
