require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/widgets/Editor'
], (Map, MapView, FeatureLayer, Editor) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  const capaEditableFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Capa_de_Prueba/FeatureServer'
  })

  mapa.add(capaEditableFL)

  const widgetEditor = new Editor({
    view: vistaMapa
  })

  vistaMapa.ui.add(widgetEditor, 'top-right')
})
