import React, { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <div className="item">
            <li>
                <div className="todo-content">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() =>
                            dispatch({
                                type: 'toggle',
                                payload: todo.id
                            })
                        }
                    />

                    <span
                        style={{
                            textDecoration: todo.completed
                                ? 'line-through'
                                : 'none',
                            color: todo.completed
                                ? '#999'
                                : '#333',
                            cursor: 'pointer',
                        }}
                    >
                        {todo.text}
                    </span>
                </div>


                <button
                className='delete-btn'
                    onClick={() =>
                        dispatch({
                            type: 'delete',
                            payload: todo.id
                        })
                    }
                >
                    Delete
                </button>
            </li>
        </div>
    );
};

export default TodoItem;