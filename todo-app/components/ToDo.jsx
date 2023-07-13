const ToDo = ({text,completed}) => {
  return (
    <div>
     <input type="checkbox"checked={completed} />
     <span>{text}</span>
    </div>
  )
}
export default ToDo