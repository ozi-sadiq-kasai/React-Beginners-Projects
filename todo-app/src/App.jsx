import ToDo from "../components/ToDo"
import todoData from './data'
import './index.css'

function App() {
 return (
    <section>

    {todoData.map((todo) => {
     return(
      <main key={todo.id}>
       <ToDo {...todo}/> 
      </main>
     )
    })}
     
    </section>
  )
}

export default App
