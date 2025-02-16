import React, { useEffect, useContext} from 'react'
import { TodoContext } from '../../todoList'
import Remove from '../managetodo/removeTodo';
import Edit from '../managetodo/editTodo';
import Checked from '../managetodo/checkedTodo';

export default function ShowResult() {

    const { todos, titleValue, doneTodo, undoneTodo, Show, setShow , editmode } = useContext(TodoContext)

    function finalShow() {
        if (titleValue === '1') {
            setShow(todos)
        } else if (titleValue === '2') {
            setShow(undoneTodo)
        } else if (titleValue === '3') {
            setShow(doneTodo)
        }
    }

    useEffect(() => {
        finalShow()
    }, [titleValue, todos, undoneTodo, doneTodo])

    return (
        <div className='w-100 h-auto px-25 py-30 flex-wrap flex-center'>
            <ul className='w-97 h-auto border-spacing-1 flex-center px-3 flex-wrap mt-10'>
                {Show.map((todo) => (
                    <li className='w-100 h-100 px-10 py-10 mb-3 list-none bg-whitesmoke relative flex-wrap rounded-md leading-11 xs:flex sm:block justify-center' key={todo.key}>{todo.name}
                        <span className='xs:flex xs:w-full sm:inline justify-center'>
                            <Edit todo={todo} />
                            <Remove todo={todo} />
                            <Checked todo={todo} />
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
