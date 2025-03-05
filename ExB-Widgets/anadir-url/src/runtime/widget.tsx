import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'
import FeatureLayer from 'esri/layers/FeatureLayer'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // PUNTO 1: ¿Cuando el usuario clica en algun lugar del widget botón|selector|input...?
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  const [urlCapa, setUrlCapa] = useState<string>()

  // Función que se ejecuta cada vez que cambio el mapa
  // PUNTO 2: ¿Cada vez que añada el widget a mi ExB y seleccione el mapa?

  function activeViewHandler(jmv: JimuMapView) {
    setVistaActiva(jmv)
  }

  function inputHandler(eventoInput) {
    const url = eventoInput.target.value
    setUrlCapa(url)
  }

  function clickHandler() {
    const capa = new FeatureLayer({
      url: urlCapa
    })

    vistaActiva.view.map.add(capa)
  }

  return (
    <div className="plantilla-mapa">
      <input
        type="url"
        onChange={inputHandler}
      />
      <button onClick={clickHandler}>Añadir Capa al Mapa</button>
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
