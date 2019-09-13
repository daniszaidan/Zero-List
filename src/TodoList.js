import React, { Component } from "react";

export default class TodoListt extends Component {
    render() {
        return (
            <div className="card">
                <div className='col-1 col-s-12 d-flex flex-center'>
                    <input type="checkbox" />
                </div>
                <div className='col-10 col-s-12 list-frame'>
                    <div className="title-frame">
                        <p>mengerjakan mengerjakan</p>
                    </div>
                    <div className="tag-frame">
                        <div className="tag">school</div>
                        <div className="tag">school</div>
                        <div className="tag">school</div>
                    </div>
                </div>
                <div className='col-1 col-s-12 d-flex flex-center'>
                    {/* <MaterialIcon icon="dashboard" /> */}
                    {/* <i className="fas fa-user-edit"></i> */}
                    <i className="material-icons delete-button">delete</i>
                </div>
            </div>
        );
    }
}
