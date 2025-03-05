import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // PUNTO 1: ¿Cuando el usuario clica en algun lugar del widget botón|selector|input...?
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()

  // Función que se ejecuta cada vez que cambio el mapa
  // PUNTO 2: ¿Cada vez que añada el widget a mi ExB y seleccione el mapa?

  function activeViewHandler(jmv: JimuMapView) {
    setVistaActiva(jmv)
  }

  function clickHandler() {
    vistaActiva.view.rotation = vistaActiva.view.rotation + 20
  }

  return (
    <div className="plantilla-mapa">
      <button onClick={clickHandler}>Rotar Mapa</button>
      {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={activeViewHandler}
        ></JimuMapViewComponent>
      )}
    </div>
  )
}

export default Widget
