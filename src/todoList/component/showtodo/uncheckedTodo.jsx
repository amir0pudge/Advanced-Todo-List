import React, { useEffect, useContext } from 'react'
import { TodoContext } from '../../todoList'


export default function Unchecked() {

    const { todos, doneTodo, setUnDoneTodo } = useContext(TodoContext)

    function uncheckedTodo() {
        setUnDoneTodo(todos.filter((item) => !doneTodo.some((done) => done.key === item.key)));
    }

    useEffect(() => {
        uncheckedTodo()
    }, [todos, doneTodo])


}
