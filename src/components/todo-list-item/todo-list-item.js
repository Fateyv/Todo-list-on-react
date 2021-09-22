import React, {Component} from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  
  render() {
    const { label, onDeleted,
            onToggleImportant,
            onToggleDone, done, 
            important } = this.props;

    let classNames = 'todo-list-item d-flex bd-highlight';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }
  
    return (
      <span className= {classNames}>
        <span
          className="todo-list-item-label p-2 flex-grow-1 bd-highlight"
          onClick= {onToggleDone} >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm p-2 bd-highlight"
                onClick= {onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm p-2 bd-highlight"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
};

