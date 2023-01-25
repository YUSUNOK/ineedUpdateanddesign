import React, { useEffect, useState } from 'react';
import './App.css';
import TodoTitle from './components/TodoTitle';
import DateToday from './components/DateToday';
import TodoList from './components/TodoList';
import { Todo } from './type/types';
import TodoInsert from './components/TodoInsert';

function App() {
  const savetitle = localStorage['title'] ? JSON.parse(localStorage.getItem('title') || "") : "제목 없는 목록";
  const [title, setTitle] = useState<string>(savetitle);
  const saveTodoList = localStorage['todoList'] ? JSON.parse(localStorage.getItem('todoList') || "") : [];
  const [todoList, setTodoList] = useState<Todo[]>(saveTodoList);
  const saveClearCount = localStorage['cleartodo'] ? JSON.parse(localStorage.getItem('cleartodo') || "") : 0;
  const [clearCount, setClearCount] = useState<number>(saveClearCount);

  useEffect(() => {
    localStorage.setItem('title', JSON.stringify(title));
  }, [title]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList])

  useEffect(() => {
    localStorage.setItem('cleartodo', JSON.stringify(clearCount));
  }, [clearCount])



  return (
    <div>
      <div><TodoTitle title={title} setTitle={setTitle} /></div>
      <div><DateToday /></div>
      <div><TodoList todoList={todoList} setTodoList={setTodoList} clearCount={clearCount} setClearCount={setClearCount} /></div>
      <div><TodoInsert todoList={todoList} setTodoList={setTodoList} /></div>
    </div>
  );
}

export default App;
