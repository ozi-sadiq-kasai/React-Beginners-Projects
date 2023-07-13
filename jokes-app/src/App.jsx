import Jokes from './components/Jokes'
import funny from './data'
import products from './items'
import Shop from './components/Shop'

function App() {
  return (
    <>
      {funny.map((joke) =>{
    return(
     <div key={joke.id}>
      <Jokes {...joke}/>
     </div>
    )  
 })}

  {products.map((product) =>{
   return(
    <div key={product.price}>
     <Shop {...product}/>
    </div>
    
   )
  })}
    </>
  )
}
export default App
