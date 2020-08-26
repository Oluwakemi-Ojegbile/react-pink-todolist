import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../action'

const Todo = ({todo, deleteTodoItem}) => {
    console.log('ddvvv', todo)
    return(
        <div className="card">
        <span>
            <button onClick={() => {deleteTodoItem(todo.id)}} className="delete-btn">X</button>
        </span>
         {/* <span><p>{index + 1}</p></span> */}
         <p className="todo_title"> {todo.title} </p>
         <p className="todo_description">{todo.description}</p>
     </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteTodoItem: id => dispatch(deleteTodo(id))
})

export default connect(null, mapDispatchToProps)(Todo);