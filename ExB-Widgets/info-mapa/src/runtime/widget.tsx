import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'
import { type JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { useState } from 'react'

interface informacionMapa {
  titulo: string
  descripcion: string
  tags: string[]
  id: string
}

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const [vistaActiva, setVistaActiva] = useState<JimuMapView>()
  const [infoMapa, setInfoMapa] = useState<informacionMapa>()

  let contenido

  if (vistaActiva) {
    const elementosTag = infoMapa.tags.map((tag) => {
      return <p className="tag">{tag}</p>
    })

    contenido = (
      <>
        <h3>{infoMapa.titulo}</h3>
        <div className="resto-info">
          <p>{infoMapa.descripcion}</p>
          <div className="tags">{elementosTag}</div>
          <p>{infoMapa.id}</p>
        </div>
      </>
    )
  }

  function activeViewHandler(jmv: JimuMapView) {
    const informacionMapa: informacionMapa = {
      titulo: jmv.view.map.portalItem.title,
      descripcion: jmv.view.map.portalItem.description,
      tags: jmv.view.map.portalItem.tags,
      id: jmv.view.map.portalItem.id
    }

    setInfoMapa(() => informacionMapa)
    setVistaActiva(jmv)
  }

  return (
    <div className="info-mapa">
      {contenido}
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
