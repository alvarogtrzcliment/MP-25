import './CartaEjemplo.css'

// eslint-disable-next-line react/prop-types
function CartaEjemplo ({linkImagen, titulo, descripcion}) {
  return(
    <div id='carta-ejemplo'>
      <img src={linkImagen} alt="" />
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default CartaEjemplo