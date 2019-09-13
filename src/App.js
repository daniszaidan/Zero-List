import React, { Component } from "react";
import logo from './logo.png';
import './zero.css';
import './App.css';
import TodoList from "./TodoList";
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
            <form>
              <div className="form-input">
                <input type="text" required=" " />
                <label>Enter New Todo </label>
              </div>
              <div className="tag-frame">
                <div className="tag">School</div>
                <div className="tag">Work</div>
                <div className="tag">Home</div>
                <div className="tag">Sport</div>
              </div>
              <button type="button" class="btn btn-default">Add New Todo</button>
            </form>
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
