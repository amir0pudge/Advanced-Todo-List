import React, { useContext } from 'react'
import { TodoContext } from '../../component/context/provider'




export default function AddTodo() {


    const { value, setValue, setTodos  } = useContext(TodoContext)

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
 

    return (
        <>
            <div className='w-100 h-auto flex justify-evenly items-center py-10 xs:flex-wrap sm:flex-nowrap'>
                <div className='w-100 h-auto flex justify-evenly items-center p-10 xs:flex-wrap sm:flex-nowrap'>
                    <input className='xs:w-full sm:w-90 h-auto rounded-md border-none outline-none bg-whitesmoke pr-20 pl-[20px] py-10' type="text" placeholder='Enter Your Todo' onChange={(e) => setValue(e.target.value)} value={value} ref={inputTextRef} />
                    <button className="xs:w-full sm:w-10 h-auto rounded-md border-none outline-none bg-blue1 text-color flex-center font-bold uppercase text-2xl px-20 py-9 xs:ml-0 xs:mt-3 sm:ml-5 sm:mt-0" type='submit' onClick={addTodo}>add</button>
                </div>
            </div>
        </>
    )
}
