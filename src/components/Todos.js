import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

const Todos = ({ todos }) => {
    const todoList = todos.length > 0 ? (
        todos.map(todo => {
            return(
                <Todo todo={todo} key={todo.id} />
            )
        })
    ) : (
        <p> You have no Todo!</p>
    )
    return (
        <div className="todo_list">
            {todoList}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps)(Todos);