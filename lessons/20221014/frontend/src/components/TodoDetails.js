import { useTodosContext } from "../hooks/useTodosContext"
import { useAuthContext } from "../hooks/useAuthContext"

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const TodoDetails = ({ todo }) => {
  const { dispatch } = useTodosContext()
  const { user } = useAuthContext()

  const handleClick = async () => {
    if (!user) {
      return
    }

    const response = await fetch("/api/todos/" + todo._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: "DELETE_TODO", payload: json })
    }
  }

  return (
    <div className="todo-details">
      <h4>{todo.title}</h4>
      <p>
        <strong>Date: </strong>
        {todo.date}
      </p>
      <p>
        <strong>Importance: </strong>
        {todo.importance}
      </p>
      <p>
        {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
      </p>
      <span
        className="material-symbols-outlined"
        onClick={handleClick}
      >
        delete
      </span>
    </div>
  )
}

export default TodoDetails
