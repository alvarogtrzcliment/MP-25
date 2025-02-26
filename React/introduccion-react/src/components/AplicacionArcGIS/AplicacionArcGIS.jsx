/* eslint-disable react/prop-types */

import './AplicacionArcGIS.css'
import CartaEjemplo from '../CartaEjemplo/CartaEjemplo'

function AplicacionArcGIS ({ logoLink, titulo, descripcion, enlace, altImagen }) {

  let ejemplos

  if(titulo === 'ArcGIS Experience Builder' ){
    ejemplos = <>
        <CartaEjemplo linkImagen={'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png'} titulo={'Ejemplo 1'} descripcion={'Descripción de mi ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png'} titulo={'Ejemplo 2'} descripcion={'Descripción de mi ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png'} titulo={'Ejemplo 3'} descripcion={'Descripción de mi ejemplo'}></CartaEjemplo>
    </>
  }

  if(titulo === 'ArcGIS Story Maps' ){
    ejemplos = <>
        <CartaEjemplo linkImagen={'https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416'} titulo={'Ejemplo 1'} descripcion={'Descripción de mi Ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416'} titulo={'Ejemplo 2'} descripcion={'Descripción de mi Ejemplo'}></CartaEjemplo>
        <CartaEjemplo linkImagen={'https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416'} titulo={'Ejemplo 3'} descripcion={'Descripción de mi Ejemplo'}></CartaEjemplo>
    </>
  }

  return(
    <>
      <div id='AplicacionArcGIS'>
        <img src={logoLink} alt={altImagen} />
        <div>
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
          <a href={enlace}>Enlace a la página de producto</a>
          <button>Ver Ejemplos</button>
        </div>
      </div>

      <div id='lista-ejemplos'>
        {ejemplos}
      </div>
    </>

  )
}

export default AplicacionArcGIS