import React, { Component } from "react";

export default class TodoList extends Component {
    render() {

        const { items, handleDelete, handleEdit, handleComplete } = this.props;

        return (
            items.map(item => {
                return (
                    <div className="card" key={item.id}>
                        <div className='col-1 col-s-12 d-flex flex-center'>
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={() => { handleComplete(item.id) }}
                                    checked={item.completed}
                                />
                                <span className="label-text"></span>
                            </label>
                        </div>
                        <div className='col-9 col-s-12 list-frame'>
                            <div className="title-frame">
                                <p>{item.title}</p>
                            </div>
                            <div className="tag-frame">
                                <div className="tag">school</div>
                                <div className="tag">school</div>
                                <div className="tag">school</div>
                            </div>
                        </div>
                        <div className='col-2 col-s-12 d-flex flex-center'>
                            <i class="fas edit-button fa-pen" onClick={() => handleEdit(item.id)}></i>
                            <i class="fas delete-button fa-trash" onClick={() => handleDelete(item.id)}></i>
                        </div>
                    </div>
                )
            })
        )
    }
}
