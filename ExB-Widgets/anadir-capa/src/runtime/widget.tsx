import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import FeatureLayer from 'esri/layers/FeatureLayer'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  // Función que se ejecuta cada vez que cambio el mapa
  // PUNTO 2: ¿Cada vez que añada el widget a mi ExB y seleccione el mapa?

  function activeViewHandler(jmv: JimuMapView) {
    const capaHospital = new FeatureLayer({
      url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer'
    })

    const mapa = jmv.view.map

    mapa.add(capaHospital)
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
