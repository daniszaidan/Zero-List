import React, { Component } from "react";
import logo from './logo.png';
import './zero.css';
import './App.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
// import MaterialIcon, { colorPalette } from 'material-icons-react';

class App extends Component {
  render() {
    return (
      <main>
        <div className="col col-5 col-m-12 half-left">
          <div className="todo-frame">
            <div className="logo-frame d-flex flex-center">
              <img src={logo} alt="" className='logo-brand' />
            </div>
            <TodoInput />
          </div>
        </div>
        <div className="col col-7 col-m-12 half-right">

          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />
          <TodoList />

        </div>
      </main>
    )
  }

}

export default App;
