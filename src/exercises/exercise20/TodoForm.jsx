import TodoContext from "./TodoContext"
import { useState, useContext, useReducer } from "react"

const TodoForm = () => {

    // state datada actions ka marka la fuliyo kaso labaneyso 
    // dispatch sida actions u wacan laheyn add delete toggle
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
            <h2 className="text-3xl font-bold text-center">Todo App</h2>
            <div className="flex justify-center gap-2 mt-8" >
                <input 
                className="py-2 px-4  rounded shadow w-[65%]"
                 type="text" value={text}
                onChange={(e) => setText(e.target.value)} placeholder='enter new todo ' />
            <button 
            className="bg-violet-700 font-medium  text-white py-3 px-8 rounded"
            onClick={handleAdd} 
             >Add</button>
            </div>
            

        </div>
    );
}

export default TodoForm;