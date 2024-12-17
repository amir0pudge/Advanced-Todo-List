import React, { createRef, useEffect, useState } from 'react'
import './assets/style/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoFilter from './component/dropdown'




export default function TodoList() {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const [addValue, setAddValue] = useState(true)
    const [editkey, setEditkey] = useState(null)
    const [titleValue, setTitleValue] = useState('1')
    const [doneTodo, setDoneTodo] = useState([])
    const [undoneTodo, setUnDoneTodo] = useState([])
    const [Show, setShow] = useState([])


    const inputTextRef = React.createRef()

    function generateTodo() {
        const time = Date.now()
        return {
            name: value,
            key: time,
        }

    }

    function addTodo() {
        if (value !== '') {
            const todo = generateTodo()
            setTodos((todos) => {
                const newTodos = [...todos, todo]
                return newTodos
            })
            setValue('')
        }
        inputTextRef.current.focus()
    }

    function removeTodo(e) {
        const updatedTodoAfterDelete = todos.filter((todo) => todo.key !== e)
        setTodos(updatedTodoAfterDelete)
        setDoneTodo(doneTodo.filter((todo) => todo.key !== e))
        setUnDoneTodo(undoneTodo.filter((todo) => todo.key !== e))
    }

    function editTodo(e) {
        const todoValue = todos.find((todo) => todo.key === e)
        setAddValue(false)
        setEditkey(e)
        setValue(todoValue.name)
        inputTextRef.current.focus()
    }

    function pasteEditTodo() {
        if (editkey !== null) {
            setTodos((todos) =>
                todos.map((todo) =>
                    todo.key === editkey ? { ...todo, name: value } : todo
                )
            );
            setDoneTodo((todos) =>
                todos.map((todo) =>
                    todo.key === editkey ? { ...todo, name: value } : todo
                ))
            setValue('')
            setAddValue(true)
        }
    }

    function checkedTodo(e) {
        const completedTodo = todos.find((todo) => todo.key === e);
        if (completedTodo) {
            setDoneTodo((prev) => [...prev, completedTodo]);
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
        }
    }


    function uncheckedTodo() {
        setUnDoneTodo(todos.filter((item) => !doneTodo.some((done) => done.key === item.key)));
    }

    useEffect(() => {
        uncheckedTodo()
    }, [todos, doneTodo])

    const parentCallback = (childdata) => {
        setTitleValue(childdata)
    }



    function titleGenertator() {
        let finaltitle;
        if (titleValue === '1') {
            finaltitle = "all todos"
        } else if (titleValue === '2') {
            finaltitle = "In process todos"
        } else if (titleValue === '3') {
            finaltitle = "done todos"
        }
        return finaltitle
    }

    function finalShow() {
        if (titleValue === '1') {
            setShow(todos)
        } else if (titleValue === '2') {
            setShow(undoneTodo)
        } else if (titleValue === '3') {
            setShow(doneTodo)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
    };
    useEffect(() => {
        finalShow()
    }, [titleValue, todos, undoneTodo, doneTodo])

    return (
        <>
            <div className='main flex-center'>
                <form onSubmit={handleSubmit}>
                    <h1 className='title flex-center'>todo list</h1>
                    <div>
                        <div className='inputEntry'>
                            <input type="text" placeholder='Enter Your Todo' onChange={(e) => setValue(e.target.value)} value={value} ref={inputTextRef} />
                            <button type='submit' className='flex-center' onClick={addValue ? addTodo : pasteEditTodo}>{addValue ? 'add' : 'edit'}</button>
                        </div>
                        <div className='FilterButton'>
                            <span>{titleGenertator()}</span>
                            <TodoFilter className='FilterButton' parentCallback={parentCallback} />
                        </div>
                        <div className='Todos flex-center'>
                            <ul>
                                {Show.map((todo) => (
                                    <li key={todo.key}>{todo.name}
                                        <button onClick={() => editTodo(todo.key)} className='flex-center'><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" /></svg></i></button>
                                        <button onClick={() => removeTodo(todo.key)} className='flex-center'><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg></i></button>
                                        {!todo.checked && (<button onClick={() => checkedTodo(todo.key)} className='flex-center checkBTN'><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg></i></button>)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}


