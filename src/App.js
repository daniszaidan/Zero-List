import React, { Component } from "react";
import logo from './logo.png';
import './zero.css';
import './App.css';
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
// import MaterialIcon, { colorPalette } from 'material-icons-react';

class App extends Component {

  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false
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
      title: this.state.item
    };

    const updatedItems = [newItem, ...this.state.items];

    this.setState({
      items: updatedItems,
      item: "",
      id: 0,
      editItem: false
    });

  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleEdit = id => {
    console.log(id);
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  render() {
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
            />
          </div>
        </div>
        <div className="col col-7 col-m-12 half-right">

          <TodoList
            items={this.state.items}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />

        </div>
      </main>
    )
  }

}

export default App;
