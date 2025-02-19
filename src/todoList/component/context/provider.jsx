import React, { useState, createContext } from 'react'

export const TodoContext = createContext('')

export default function Provider({ children }) {

    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const [addValue, setAddValue] = useState(true)
    const [editkey, setEditkey] = useState(null)
    const [titleValue, setTitleValue] = useState('1')
    const [doneTodo, setDoneTodo] = useState([])
    const [undoneTodo, setUnDoneTodo] = useState([])
    const [Show, setShow] = useState([])
    const [editmode, setEditmode] = useState(false)
    const [editvalue, setEditValue] = useState("")
    const [check , setCheck] = useState(true)
    

    return (
        <TodoContext.Provider value={{ value, setValue, todos, setTodos, addValue, setAddValue, editkey, setEditkey, titleValue, setTitleValue, doneTodo, setDoneTodo, undoneTodo, setUnDoneTodo, Show, setShow, editmode, setEditmode, editvalue, setEditValue , check , setCheck }}>
            {children}
        </TodoContext.Provider>
    )
}
