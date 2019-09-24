import React, { Component } from "react";
import logo from './logo.png';
import './zero.css';
import './App.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

class App extends Component {

  state = {
    items: [],
    id: 0,
    item: "",
    editStatus: false,
    showCompleted: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      title: this.state.item,
      completed: false,
    };

    const updatedItems = [newItem, ...this.state.items];

    this.setState({
      items: updatedItems,
      item: "",
      id: 0,
      editStatus: false
    });

  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editStatus: true,
      id: id
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: filteredItems
    });
  };

  handleComplete = id => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === id) { item.completed = !item.completed }
      return item;
    })

    this.setState({
      items: updatedItems
    })
  };

  render() {

    const completedTodos = [];
    const unCompletedTodos = [];
    this.state.items.map(item => {
      (item.completed) ? completedTodos.push(item) : unCompletedTodos.push(item)
    })

    const isAllCompleted = (todos) => {
      return todos.every((todo) => todo.completed);
    };

    const isSomeCompleted = (todos) => {
      return todos.some((todo) => todo.completed);
    };

    return (
      <main>
        <div className="col col-5 col-m-12 half-left">
          <div className="todo-frame">
            <div className="logo-frame d-flex flex-center">
              <img src={logo} alt="" className='logo-brand' />
            </div>

            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editStatus={this.state.editStatus}
            />

          </div>
        </div>
        <div className="col col-7 col-m-12 half-right">

          {isAllCompleted(this.state.items) && (
            <p className='todo-empty'>Todo is Empty</p>
          )}

          <TodoList
            items={unCompletedTodos}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}
          />

          {isSomeCompleted(this.state.items) && (
            <p className='todo-completed'>Completed Todos</p>
          )}

          <TodoList
            items={completedTodos}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}
          />

        </div>
      </main>
    )
  }

}

export default App;
