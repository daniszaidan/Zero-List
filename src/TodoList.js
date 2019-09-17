import React, { Component } from "react";

export default class TodoList extends Component {
    render() {

        const { items } = this.props;

        return (
            items.map(item => {
                return (
                    <div className="card" key={item.id}>
                        <div className='col-1 col-s-12 d-flex flex-center'>
                            <input type="checkbox" />
                        </div>
                        <div className='col-10 col-s-12 list-frame'>
                            <div className="title-frame">
                                <p>{item.title}</p>
                            </div>
                            <div className="tag-frame">
                                <div className="tag">school</div>
                                <div className="tag">school</div>
                                <div className="tag">school</div>
                            </div>
                        </div>
                        <div className='col-1 col-s-12 d-flex flex-center'>
                            <i className="material-icons delete-button">delete</i>
                        </div>
                    </div>
                )
            })
        )
    }
}
