import React, { useEffect, useContext } from 'react'
import { TodoContext } from '../../component/context/provider'
import Remove from '../managetodo/removeTodo';
import Edit from '../managetodo/editTodo';
import Checked from '../managetodo/checkedTodo';
import Unchecked from './uncheckedTodo'




export default function ShowResult() {

    const { todos, setTodos, titleValue, doneTodo, setDoneTodo, undoneTodo, Show, setShow, editmode, setEditmode, editvalue, setEditValue, editkey, check, setCheck } = useContext(TodoContext)

    Unchecked()

    function finalShow() {
        setCheck(true)
        if (titleValue === '1') {
            setShow(todos)
        } else if (titleValue === '2') {
            setShow(undoneTodo)
        } else if (titleValue === '3') {
            setShow(doneTodo)
            setCheck(false)
        }
    }

    function pastedEdit() {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.key === editkey ? { ...todo, name: editvalue } : todo
            )
        );

        setDoneTodo(prevDoneTodo =>
            prevDoneTodo.map(task =>
                task.key === editkey ? { ...task, name: editvalue } : task
            )
        );
        setEditmode(false)
    }


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            
            pastedEdit()
          }
      
    };

    useEffect(() => {
        finalShow()
    },)




    return (
        <div className='w-100 h-auto px-25 py-30 flex-wrap flex-center'>
            <ul className='w-97 h-auto border-spacing-1 flex-center px-4 flex-wrap mt-10'>
                {Show.map((todo) => (
                    <li className='w-100 h-100 xs:px-1 sm:px-10 py-10 mb-3 list-none bg-whitesmoke relative flex-wrap rounded-md leading-11 xs:flex sm:block justify-center items-center ' key={todo.key}>
                        {todo.key === editkey && editmode ?
                            (
                                <>
                                    <div className='w-100 h-100 flex xs:flex-wrap sm:flex-nowrap bg-whitesmoke justify-evenly items-center'>
                                        <input className='w-80 h-auto rounded-md border-gray-200 border-2 outline-none bg-white px-2  py-3' type="text" onChange={(e) => setEditValue(e.target.value)} onKeyDown={handleKeyDown} value={editvalue} autoFocus />
                                        <button className='xs:w-80 sm:w-10 xs:mt-2 sm:mt-0 h-auto rounded-md border-none outline-none bg-blue1 text-color flex-center font-bold uppercase text-2xl px-10 py-4 ml-1' type='submit'  onClick={() => pastedEdit()}>edit</button>
                                    </div>
                                </>
                            )
                            : (
                                <>
                                    {todo.name}
                                    <span className='xs:flex xs:w-full sm:inline justify-center'>
                                        <Edit todo={todo} />
                                        <Remove todo={todo} />
                                        {check && <Checked todo={todo} />}
                                    </span>
                                </>
                            )}


                    </li>
                ))}
            </ul>
        </div>
    )
}
