/* eslint-disable react/prop-types */

import './AplicacionArcGIS.css'
import CartaEjemplo from '../CartaEjemplo/CartaEjemplo'
import { useState } from 'react'

function AplicacionArcGIS ({ logoLink, titulo, descripcion, enlace, altImagen }) {

  let ejemplos

  const [estadoBoton, setEstadoBoton] = useState(false)

  console.log('Se ha cargado el componente', estadoBoton)

  if(titulo === 'ArcGIS Experience Builder' && estadoBoton === true){
    ejemplos = <>
        <CartaEjemplo linkImagen={'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png'} titulo={'Ejemplo 1'} descripcion={'Descripción de mi ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png'} titulo={'Ejemplo 2'} descripcion={'Descripción de mi ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png'} titulo={'Ejemplo 3'} descripcion={'Descripción de mi ejemplo'}></CartaEjemplo>
    </>
  }

  if(titulo === 'ArcGIS Story Maps' && estadoBoton === true){
    ejemplos = <>
        <CartaEjemplo linkImagen={'https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416'} titulo={'Ejemplo 1'} descripcion={'Descripción de mi Ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416'} titulo={'Ejemplo 2'} descripcion={'Descripción de mi Ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416'} titulo={'Ejemplo 3'} descripcion={'Descripción de mi Ejemplo'}></CartaEjemplo>
    </>
  }

  function buttonHandler(eventoClick){
    console.log(estadoBoton)
    if(estadoBoton === false){
      setEstadoBoton(true)
    }else{
      setEstadoBoton(false)
    }
  }

  return(
    <>
      <div id='AplicacionArcGIS'>
        <img src={logoLink} alt={altImagen} />
        <div>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
          <a href={enlace}>Enlace a la página de producto</a>
          <button onClick={buttonHandler}>Ver Ejemplos</button>
        </div>
      </div>

      <div id='lista-ejemplos'>
        {ejemplos}
      </div>
    </>

  )
}

export default AplicacionArcGIS

function suma(n1,n2){
  const [asda,setasda] = useState(hola)
}