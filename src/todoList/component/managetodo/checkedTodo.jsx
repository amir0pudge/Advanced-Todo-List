import React, { useContext } from 'react'
import { TodoContext } from '../../component/context/provider'

export default function Checked({ todo }) {

    const { todos, setTodos, setDoneTodo } = useContext(TodoContext)

    function checkedTodo(e) {
        const completedTodo = todos.find((todo) => todo.key === e);
        if (completedTodo) {
            setTodos((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.key === e ? { ...todo, checked: true } : todo
                )
            );
            setDoneTodo((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.key === e ? { ...todo, checked: true } : todo
                )
            );
            setDoneTodo((prev) => [...prev, completedTodo]);

        }
    }

    return (
        <>
            {!todo.checked && (<button onClick={() => checkedTodo(todo.key)} className='xs:px-6 xs:py-6 sm:px-3 sm:py-3 min-w-14 flex-center h-50 rounded-md bg-blue1 text-white  bottom-2/4 border-none outline-none cursor-pointer mx-1 float-right buttonFix3'><i className='min-w-4 h-5 fill-color'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></i></button>)}
        </>
    )


}
