import React, { Component } from 'react'
import "./Todo.css"
import "./TodoList.css"

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            content: this.props.content
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove() {
        this.props.removeTodo(this.props.id)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleEdit() {
        this.setState({ isEditing: !this.state.isEditing })
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.content);
        this.handleEdit();


    }

    handleToggle() {
        this.props.toggleTodo(this.props.id);
    }
    render() {
        let output;
        if (this.state.isEditing) {
            output = (
                <div className="Todo">
                    <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.content} name="content" onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            output = (
                < div className="Todo">
                    <li className={this.props.completed ? "Todo-task Todo-completed" : "Todo-task"} onClick={this.handleToggle}>
                        {this.props.content}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.handleEdit}><i class="far fa-edit"></i></button>
                        <button onClick={this.handleRemove}><i class="far fa-trash-alt"></i></button>
                    </div>
                </div >
            )
        }
        return output
    }
}

export default Todo;