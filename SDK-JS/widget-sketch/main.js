require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Sketch',
  'esri/layers/FeatureLayer',
  'esri/layers/GraphicsLayer',
  'esri/widgets/Sketch/SketchViewModel'
], (Map, MapView, Sketch, FeatureLayer, GraphicsLayer, SketchViewModel) => {
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

  const logicaSketch = new SketchViewModel({
    polygonSymbol: {
      type: 'simple-fill',
      color: [78, 177, 126, 1],
      outline: {
        cap: 'round',
        color: [37, 111, 62, 1],
        join: 'round',
        miterLimit: 1,
        style: 'solid',
        width: 1
      },
      style: 'diagonal-cross'
    }
  })

  const sketchWidget = new Sketch({
    view: vistaMapa,
    layer: capaGrafica,
    viewModel: logicaSketch
  })

  vistaMapa.ui.add(sketchWidget, 'top-right')
})
