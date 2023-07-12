import Jokes from './components/Jokes'
import data from './data'


function App() {
  return (
    <div>
      {data.map((joke) =>{
    return(
     <div key={joke.id}>
      <Jokes {...joke}/>
     </div>
    )  
 })}
    </div>
  )
}
export default App
