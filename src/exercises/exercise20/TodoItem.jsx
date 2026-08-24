import React, { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);

    return (
        <div className='text-center mx-auto mt-4'>
            <li className="flex items-center justify-between bg-violet-100 mb-2 py-3 px-4 w-[90%] mx-auto rounded-lg shadow-sm">
                <div className="flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() =>
                            dispatch({
                                type: 'toggle',
                                payload: todo.id
                            })
                        }
                        className="w-4 h-4 cursor-pointer"
                    />

                    <span
                        className={`cursor-pointer ${todo.completed
                                ? 'line-through text-gray-400'
                                : 'text-gray-800'
                            }`}
                    >
                        {todo.text}
                    </span>
                </div>


                <button
                    className='text-red-500 font-semibold hover:text-red-700 transition'
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