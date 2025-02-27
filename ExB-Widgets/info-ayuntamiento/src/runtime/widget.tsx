import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="info-ayuntamiento">
      <div className="header">
        <img
          src="https://identidad.madrid.es/wp-content/uploads/2016/10/logo.png"
          alt="Imagen Ayuntamiento"
        />
        <h3>Ayuntamiento de Madrid</h3>
      </div>
      <div className="informacion">
        <p>
          <strong>Teléfono: </strong>010
        </p>
        <p>
          <strong>Calle: </strong>Calle Atocha
        </p>
        <a href="">Enlace a la página del ayuntamiento</a>
      </div>
    </div>
  )
}

export default Widget
