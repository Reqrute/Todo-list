import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../Constant/context';
import {
    TodoIt,
    Remove
} from './component'

function TodoItem({todo , index, onChange}){
    const { removeTodo } = useContext(Context);
    const style ={};

    todo.completed ? style.textDecoration = 'line-through' : style.textDecoration = null;
    

    return (    
    <TodoIt>
        <span style={style}>
            <input 
                type="checkbox" 
                checked={todo.completed}
                style={{marginRight: '1rem'}} 
                onChange={() => onChange(todo.id)}
                />
            <strong>{index + 1}</strong>
            &nbsp;
            {todo.title}
        </span>

       {todo.completed ? (<Remove onClick={() => removeTodo(todo.id)}>&times;</Remove>) : null} 
    </TodoIt>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem 