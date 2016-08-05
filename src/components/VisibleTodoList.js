import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers/index';
import { fetchTodos } from '../api/index';

class VisibleTodoList extends Component {

  componentDidMount() {
    fetchTodos(this.props.filter).then(todos =>
      window.console.log(this.props.filter, todos)
    );
  }

  componentDidUpdate(prevProps) {
    if(this.props.filter !== prevProps.filter) {
      fetchTodos(this.props.filter).then(todos =>
          window.console.log(this.props.filter, todos)
      );
    }
  }

  render() {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {

    const filter = params.filter || 'all';
    return {
      todos: getVisibleTodos(state, filter),
      filter
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList));

export default VisibleTodoList;
