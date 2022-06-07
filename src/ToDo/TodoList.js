import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import {
    TodoBox
} from './component'

function TodoList(props){
    return(
        <TodoBox>
            { props.todos.map((todo , index) => {
                return (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        index={index} 
                        onChange={props.onToggle}
                    />
                )
            }) }
        </TodoBox>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList