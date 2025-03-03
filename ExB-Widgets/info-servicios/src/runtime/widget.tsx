import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { useState } from 'react'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [estadoBoton, setEstadoBoton] = useState(null)

  let contenido

  if (estadoBoton === 'policia') {
    contenido = (
      <>
        <p>
          <strong>Nombre: </strong>Policia de Madrid
        </p>
        <p>
          <strong>Teléfono: </strong>011
        </p>
        <p>
          <strong>Calle: </strong>Calle Alcalá
        </p>
      </>
    )
  }

  if (estadoBoton === 'bomberos') {
    contenido = (
      <>
        <p>
          <strong>Nombre: </strong>Bomberos de Madrid
        </p>
        <p>
          <strong>Teléfono: </strong>021
        </p>
        <p>
          <strong>Calle: </strong>Calle Recoletos
        </p>
      </>
    )
  }

  if (estadoBoton === 'salud') {
    contenido = (
      <>
        <p>
          <strong>Nombre: </strong>Centro de salud de Madrid
        </p>
        <p>
          <strong>Teléfono: </strong>031
        </p>
        <p>
          <strong>Calle: </strong>Calle Avenida de América
        </p>
      </>
    )
  }

  function policiaHandler() {
    if (estadoBoton === 'policia') {
      setEstadoBoton(null)
    } else {
      setEstadoBoton('policia')
    }
  }

  function bomberosHandler() {
    if (estadoBoton === 'bomberos') {
      setEstadoBoton(null)
    } else {
      setEstadoBoton('bomberos')
    }
  }

  function saludHandler() {
    if (estadoBoton === 'salud') {
      setEstadoBoton(null)
    } else {
      setEstadoBoton('salud')
    }
  }

  return (
    <div className="info-servicios">
      <div className="botones">
        <button onClick={policiaHandler}>Policía</button>
        <button onClick={bomberosHandler}>Bomberos</button>
        <button onClick={saludHandler}>Centro de Salud</button>
      </div>
      <div className="informacion-servicio">{contenido}</div>
    </div>
  )
}

export default Widget
