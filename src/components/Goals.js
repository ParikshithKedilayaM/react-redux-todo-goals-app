import React from 'react'
import {connect} from 'react-redux'
import {handleAddGoal, handleDeleteGoal} from '../actions/goals'
import List from './List'
 
class Goals extends React.Component {
    addItem = (e) => {
      e.preventDefault()
      this.props.dispatch(handleAddGoal(
        this.input.value,
        () => this.input.value = ''
      ))
    }
    removeItem = (goal) => {
      this.props.dispatch(handleDeleteGoal(goal))
    }
    render() {
      return (
        <div>
          <h1>Goals</h1>
          <input
            type='text'
            placeholder='Add Goal'
            className="form-control todo-list-input"
            ref={(input) => this.input = input}
          />
          <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={this.addItem}>Add Goal</button>

          <List
            items={this.props.goals}
            remove={this.removeItem}
          />
        </div>
      )
    }
  }

export default connect((state) => ({
    goals: state.goals
  }))(Goals)