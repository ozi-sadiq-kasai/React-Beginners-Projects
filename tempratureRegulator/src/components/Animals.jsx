const Animals = ({image,title,phone}) => {
  return (
    <div>
     <img src={image} alt={title} />
     <h1>{title}</h1>
     <p>{phone}</p>
    </div>
  )
}
export default Animals