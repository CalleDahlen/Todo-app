import React, { Component } from 'react'
import Todo from "./Todo";
import TodoForm from "./TodoForm";



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
        this.createTodo = this.createTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    };
    updateTodo(id, updatedContent) {
        const updatedTodos = this.state.todos.map(todo => {
            //update the todo keeping the ID but replacing the content
            if (todo.id === id) {
                return { ...todo, content: updatedContent }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            //update the todo keeping the ID but replacing the content
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
    }
    createTodo(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }
    render() {
        const todos = this.state.todos.map(todo => {
            return (

                <Todo
                    key={todo.id}
                    id={todo.id}
                    content={todo.content}
                    completed={todo.completed}
                    removeTodo={this.removeTodo}
                    updateTodo={this.updateTodo}
                    toggleTodo={this.toggleCompletion}
                />

            )

        })
        return (
            <div className="TodoList">
                <h1>Todo List <span>A simple react todo app</span></h1>
                <ul>
                    {todos}
                </ul>
                <TodoForm createTodo={this.createTodo} />
            </div>
        )
    }
}

export default TodoList;