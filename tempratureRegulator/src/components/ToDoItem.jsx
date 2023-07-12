const ToDoItem = ({chores}) => {
  return (
    <div>
      <div className="todo-items">
       <input type="checkbox" name="chores"/>
       <p>{chores}</p>
      </div>
    </div>
  )
}
export default ToDoItem