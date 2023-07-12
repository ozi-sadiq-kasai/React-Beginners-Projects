import ToDoItem from "./components/ToDoItem"
import data from "./data.jsx"
import Animals from "./components/Animals"

const App = () => {
  return (
   <>
    <div className = 'todo-list'>
     <ToDoItem chores={'Clean Room'} />
     <ToDoItem chores={'Clean Toilet'}/>
     <ToDoItem chores={'Wash Dishes'}/>
   </div>
  
  {data.map((animal) => {
     return(
      <>
       <Animals {...animal}/>
      </>
     )
 })}
   </>
  
  )
}
export default App
