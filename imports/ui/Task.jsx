import React, { Component, PropTypes } from 'react';

// Task Component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.PropTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate is required.
  task: PropTypes.object.isRequired,
};
