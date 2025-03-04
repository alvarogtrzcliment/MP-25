import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()

  function activeViewHandler(jmv: JimuMapView) {
    setVistaActiva(jmv)
  }

  return (
    <div className="plantilla-mapa">
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
