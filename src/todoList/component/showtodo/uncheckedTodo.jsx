import { useEffect, useContext, useCallback } from "react";
import { TodoContext } from "../../component/context/provider";

export default function Unchecked() {
  const { todos, doneTodo, setUnDoneTodo } = useContext(TodoContext);

  const uncheckedTodo = useCallback(() => {
    setUnDoneTodo(todos.filter((item) => !doneTodo.some((done) => done.key === item.key)));
  }, [todos, doneTodo, setUnDoneTodo]);

  useEffect(() => {
    uncheckedTodo();
  }, [uncheckedTodo]); 

}
