import React, { Component } from "react";

export default class TodoInput extends Component {
    render() {

        const { item, handleChange, handleSubmit, editStatus } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-input">
                    <input type="text" required=" "
                        value={item}
                        onChange={handleChange}
                    />
                    <label>Enter New Todo </label>
                </div>
                <div className="tag-frame">
                    <div className="tag">School</div>
                    <div className="tag">Work</div>
                    <div className="tag">Home</div>
                    <div className="tag">Sport</div>
                </div>
                <button type="submit" className="btn btn-default">
                    {editStatus ? "Edit Todo" : "Add New Todo"}
                </button>
            </form>
        );
    }
}
