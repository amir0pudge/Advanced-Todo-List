import React, { useContext } from 'react'
import { TodoContext } from '../../component/context/provider'


function TodoFilter() {

    const { setTitleValue } = useContext(TodoContext)

    function listName(e) {
        let updatedStatus;
        if (e.target.value === 'all') {
            updatedStatus = '1'
        
        } else if (e.target.value === 'done') {
            updatedStatus = '2'
            
        } else if (e.target.value === 'undone') {
            updatedStatus = '3'
        
        }
        setTitleValue(updatedStatus)
    }

    return (
        <select aria-label="Default select example" onChange={e => listName(e)} className='w-auto h-auto border-none outline-none bg-blue1 text-white py-3 xs:px-0 sm:px-2 rounded-md uppercase text-xl cursor-pointer text-center bottom-2/4 translate-y-2/4 absolute right-10 font-semibold'  >
            <option value="all">All</option>
            <option value="done">In process</option>
            <option value="undone">Done</option>
        </select>
    );
}

export default TodoFilter


