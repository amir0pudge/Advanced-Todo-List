import React from 'react'
import './assets/style/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import TodoFilter from './component/filtertodo/dropdown'
import AddTodo from './component/managetodo/addtodo'
import TitleGen from './component/filtertodo/titleGenertator'
import ShowResult from './component/showtodo/finalShow'
import Provider from './component/context/provider';





export default function TodoList() {

  
    const handleSubmit = e => {
        e.preventDefault();
    };



    return (
        <Provider>
            <>
                <div className='w-100 h-auto flex-center'>
                    <form onSubmit={handleSubmit} className='xs:w-full sm:container h-auto'>
                        <h1 className='w-100 h-auto p-10 font-extrabold uppercase flex-center'>todo list</h1>
                        <AddTodo />
                        <div>
                            <div className='w-100 mb-5 relative mt-2'>
                                <TitleGen />
                                <TodoFilter />
                            </div>
                            <ShowResult />
                        </div >
                    </form >
                </div >
            </>
        </Provider>
    )
}



