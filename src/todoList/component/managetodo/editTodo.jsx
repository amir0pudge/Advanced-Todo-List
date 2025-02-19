import React, { useContext } from 'react'
import { TodoContext } from '../../component/context/provider'





export default function Edit({ todo }) {

    const { todos, setEditkey, setEditmode, setEditValue } = useContext(TodoContext)

    function editTodo(e) {
        setEditmode(true)
        const todoValue = todos.find((todo) => todo.key === e)
        setEditValue(todoValue.name)
        setEditkey(e)
    }


    return (
        <button onClick={() => editTodo(todo.key)} className=' xs:px-6 xs:py-6 sm:px-3 sm:py-3 min-w-12 flex-center h-50 rounded-md bg-blue1 text-white  bottom-2/4 border-none outline-none cursor-pointer mx-1 float-right	buttonFix1'><i className='min-w-4 h-5 fill-color'><svg className='text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" /></svg></i></button>
    )
}

