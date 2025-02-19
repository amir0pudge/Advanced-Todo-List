import React, { useContext } from 'react'
import { TodoContext } from '../../component/context/provider'



export default function Remove({ todo }) {

    const { todos, setTodos, doneTodo, setDoneTodo, undoneTodo, setUnDoneTodo } = useContext(TodoContext)

    function removeTodo(e) {
        const updatedTodoAfterDelete = todos.filter((todo) => todo.key !== e)
        setTodos(updatedTodoAfterDelete)
        setDoneTodo(doneTodo.filter((todo) => todo.key !== e))
        setUnDoneTodo(undoneTodo.filter((todo) => todo.key !== e))
    }

    return (
        <button onClick={() => removeTodo(todo.key)} className='xs:px-6 xs:py-6 sm:px-3 sm:py-3 min-w-12 flex-center h-50 rounded-md bg-blue1 text-white  bottom-2/4 border-none outline-none cursor-pointer mx-1 float-right buttonFix2'><i className='min-w-4 h-5 fill-color'><svg className='text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></i></button>
    )
}
