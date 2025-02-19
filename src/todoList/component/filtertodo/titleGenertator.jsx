import React, { useContext } from 'react'
import { TodoContext } from '../../component/context/provider'





export default function TitleGen() {

    const { titleValue } = useContext(TodoContext)

    function titleGenertator() {
        let finaltitle;
        if (titleValue === '1') {
            finaltitle = "all "
        } else if (titleValue === '2') {
            finaltitle = "In process "
        } else if (titleValue === '3') {
            finaltitle = "done "
        }
        return finaltitle
    }



    return (
        <span className='w-auto h-auto text-black  uppercase xs:text-xl sm:text-3xl font-semibold text-center bottom-2/4 translate-y-2/4 absolute left-10'>{titleGenertator()}</span>
    )
}
