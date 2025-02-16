import React, { useState, createContext } from 'react'
import './assets/style/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoFilter from './component/filtertodo/dropdown'
import AddTodo from './component/managetodo/addtodo'
import TitleGen from './component/filtertodo/titleGenertator'
import ShowResult from './component/showtodo/finalShow'


export const TodoContext = createContext('')


export default function TodoList() {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const [addValue, setAddValue] = useState(true)
    const [editkey, setEditkey] = useState(null)
    const [titleValue, setTitleValue] = useState('1')
    const [doneTodo, setDoneTodo] = useState([])
    const [undoneTodo, setUnDoneTodo] = useState([])
    const [Show, setShow] = useState([])
    const [editmode , setEditmode] = useState(false)


    const parentCallback = (childdata) => {
        setTitleValue(childdata)
    }

    const handleSubmit = e => {
        e.preventDefault();
    };

  

    return (
        <TodoContext.Provider value={{ value, setValue, todos, setTodos, addValue, setAddValue, editkey, setEditkey, titleValue, setTitleValue, doneTodo, setDoneTodo, undoneTodo, setUnDoneTodo, Show, setShow , editmode , setEditmode }}>
            <>
                <div className='w-100 h-auto flex-center'>
                    <form onSubmit={handleSubmit} className='xs:w-full sm:container h-auto'>
                        <h1 className='w-100 h-auto p-10 font-extrabold uppercase flex-center'>todo list</h1>
                        <AddTodo />
                        <div>

                            <div className='w-100 mb-5 relative mt-2'>
                                <TitleGen />
                                <TodoFilter parentCallback={parentCallback} />
                            </div>
                            <ShowResult />
                        </div >
                    </form >
                </div >
            </>
        </TodoContext.Provider>
    )
}



