require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Sketch',
  'esri/layers/FeatureLayer',
  'esri/layers/GraphicsLayer'
], (Map, MapView, Sketch, FeatureLayer, GraphicsLayer) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  const capaGrafica = new GraphicsLayer()
  mapa.add(capaGrafica)

  const sketchWidget = new Sketch({
    view: vistaMapa,
    layer: capaGrafica
  })

  vistaMapa.ui.add(sketchWidget, 'top-right')
})
