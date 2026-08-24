import React, {useContext} from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';
import './form.css'

const TodoList = () => {
        const {state} = useContext(TodoContext)
    return (
        <div className='todo-list'>
            <ul >
                {
                    state.map(todo => (
                        <TodoItem key={todo.id}  todo={todo} />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;
