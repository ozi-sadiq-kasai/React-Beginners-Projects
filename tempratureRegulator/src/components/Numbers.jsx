const Numbers = () => {
let number = 5
 const styles = {color:'green'}
 if(number > 1){
  styles.color = 'blue'
 }
  return (
    <div>
     <h1  style={styles}> {number} </h1>
    </div>
  )
}
export default Numbers