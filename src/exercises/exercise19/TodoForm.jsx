import TodoContext from "./TodoContext"
import { useState, useContext, useReducer } from "react"
import './form.css'
const TodoForm = () => {
    const [text, setText] = useState('')
    const {dispatch} = useContext(TodoContext)

    const handleAdd = () => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false
            }
            dispatch({ type: "add", payload: newTodo });
            setText('')

        }
    }

    return (
        <div >
            <h2 className="title">Todo List</h2>
            <div className="input">
                <input type="text" value={text}
                onChange={(e) => setText(e.target.value)} placeholder='enter new todo ' />
            <button onClick={handleAdd} className="btn" >Add</button>
            </div>
            

        </div>
    );
}

export default TodoForm;