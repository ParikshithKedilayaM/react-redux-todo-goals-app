import React from 'react'
import {connect} from 'react-redux'
import {
    handleAddTodo, handleDeleteTodo, handleToggle
} from '../actions/todos'
import List from './List'

class Todos extends React.Component {
    addItem = (e) => {
      e.preventDefault()

      this.props.dispatch(handleAddTodo(
        this.input.value,
        () => this.input.value = ''
      ))
    }
    removeItem = (todo) => {
      this.props.dispatch(handleDeleteTodo(todo))
    }
    toggleItem = (id) => {
      this.props.dispatch(handleToggle(id))
    }
    render() {
      return (
        <div>
          <h1>Todo List</h1>
          <input
            type='text'
            placeholder='Add Todo'
            className="form-control todo-list-input"
            ref={(input) => this.input = input}
          />
          <button onClick={this.addItem} className="add btn btn-primary font-weight-bold todo-list-add-btn">Add Todo</button>

          <List
            toggle={this.toggleItem}
            items={this.props.todos}
            remove={this.removeItem}
          />
        </div>
      )
    }
}
export default connect((state) => ({
    todos: state.todos
  }))(Todos)
