import React, {useContext} from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
        const {state} = useContext(TodoContext)
    return (
        <div>
            <ul
            className='list-none ' >
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
