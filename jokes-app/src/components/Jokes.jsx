const Jokes = ({question,answer}) => {
  return (
    <>
    <h1 style={{color:'red',fontSize:'50px',display:{question} ? "block" : 'none'}}>Question:{question}</h1>
    <p style={{display: {answer} ? "block" : "none"}}>Answer:{answer}</p>
    <hr />
    </>
  )
}
export default Jokes