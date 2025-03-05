import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'
import type Point from 'esri/geometry/Point'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // const [vistaActiva, setVistaActiva] = useState<JimuMapView>()

  const [coordenadasPunto, setCoordenadasPunto] = useState<Point>()

  let longitud
  let latitud

  if (coordenadasPunto) {
    longitud = coordenadasPunto.longitude
    latitud = coordenadasPunto.latitude
  }

  // Función que se activa cada vez que un usuario cambia de mapa.

  function activeViewHandler(jmv: JimuMapView) {
    const vistaMapa = jmv.view // const vistaMapa = new MapView()

    vistaMapa.on('pointer-move', (pointerMoveEvent) => {
      const xPantalla = pointerMoveEvent.x
      const yPantalla = pointerMoveEvent.y

      const puntoGeografico = vistaMapa.toMap({
        x: xPantalla,
        y: yPantalla
      })

      setCoordenadasPunto(() => puntoGeografico)
    })

    // setVistaActiva(jmv)
  }

  return (
    <div className="plantilla-mapa">
      <p>
        <strong>Longitud: </strong>
        {longitud}
      </p>
      <p>
        <strong>Latitud: </strong>
        {latitud}
      </p>
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
