import Form from 'react-bootstrap/Form';


function TodoFilter(props) {

    function listName(e) {
        let updatedStatus;
        if (e.target.value === 'all') {
            updatedStatus = '1'
        } else if (e.target.value === 'done') {
            updatedStatus = '2'
        } else if (e.target.value === 'undone') {
            updatedStatus = '3'
        }

        // setListStatus(updatedStatus)
        props.parentCallback(updatedStatus)
    }

    return (
        <Form.Select aria-label="Default select example" onChange={e => listName(e)} >
            <option value="all">All</option>
            <option value="done">In process</option>
            <option value="undone">Done</option>
        </Form.Select>
    );
}

export default TodoFilter


