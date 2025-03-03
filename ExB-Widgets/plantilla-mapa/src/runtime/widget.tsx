import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  function activeViewHandler(jmv: JimuMapView) {
    console.log(jmv)
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
