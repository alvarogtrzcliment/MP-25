import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'
import { Button, NumericInput } from 'jimu-ui'
import { Point } from 'esri/geometry'
import Graphic from 'esri/Graphic'
import GraphicsLayer from 'esri/layers/GraphicsLayer'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // PUNTO 1: ¿Cuando el usuario clica en algun lugar del widget botón|selector|input...?
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  const [latitudEstado, setLatitudEstado] = useState<number>()
  const [longitudEstado, setLongitudEstado] = useState<number>()

  // Función que se ejecuta cada vez que cambio el mapa
  // PUNTO 2: ¿Cada vez que añada el widget a mi ExB y seleccione el mapa?

  function activeViewHandler(jmv: JimuMapView) {
    setVistaActiva(jmv)
  }

  function latitudHandler(eventoLatitud) {
    const latitud = Number(eventoLatitud.target.value)
    setLatitudEstado(latitud)
  }

  function longitudHandler(numericEvent) {
    const longitud = numericEvent
    setLongitudEstado(longitud)
  }

  function clickHandler() {
    const punto = new Point({
      latitude: latitudEstado,
      longitude: longitudEstado
    })

    const puntoGrafico = new Graphic({
      geometry: punto,
      symbol: {
        type: 'simple-marker',
        color: [255, 0, 0]
      }
    })

    const capaGrafica = new GraphicsLayer()

    capaGrafica.add(puntoGrafico)

    vistaActiva.view.map.add(capaGrafica)
  }

  return (
    <div className="plantilla-mapa">
      <input
        type="number"
        onChange={latitudHandler}
        placeholder="Latitud"
      />
      <NumericInput
        onChange={longitudHandler}
        placeholder="Longitud"
      ></NumericInput>
      <Button onClick={clickHandler}>Añadir Punto</Button>
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
