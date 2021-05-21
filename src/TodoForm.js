import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import "./TodoForm.css";


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { content: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }
    handleSubmit(evt) {
        evt.preventDefault();
        const newTodo = { ...this.state, id: uuid(), completed: false }
        this.props.createTodo(newTodo);
        this.setState({ content: "" });
    }
    render() {
        return (
            <form className="TodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="todo"> Todo: </label>
                <input type="text" name="content" value={this.state.content} id="todo" onChange={this.handleChange} />
                <button >Submit!</button>
            </form>
        )
    };
}

export default TodoForm;