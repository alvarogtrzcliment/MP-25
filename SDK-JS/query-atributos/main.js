require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/rest/support/Query',
  'esri/symbols/SimpleMarkerSymbol',
  'esri/layers/GraphicsLayer'
], (Map, MapView, FeatureLayer, Query, SimpleMarkerSymbol, GraphicsLayer) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  //   Capas

  const hospitalesFl = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Hospitales/FeatureServer/0'
  })

  const capaGrafica = new GraphicsLayer()

  mapa.add(capaGrafica)

  //   Consulta

  const parametrosQuery = new Query({
    where: "CODAUTO = '16' Or CODAUTO = '17'", // SENTENCIA SQL!!!!!
    returnGeometry: true,
    outFields: ['NOMBRE', 'NCAMAS', 'TELEFONO']
  })

  hospitalesFl.queryFeatures(parametrosQuery).then((resultadoQuery) => {
    const entidades = resultadoQuery.features

    entidades.map((entidad) => {
      entidad.symbol = new SimpleMarkerSymbol({
        color: [18, 226, 157, 1],
        outline: {
          cap: 'round',
          color: [53, 121, 109, 1],
          join: 'round',
          miterLimit: 1,
          style: 'solid',
          width: 1
        },
        path: 'undefined',
        size: 12,
        style: 'circle'
      })

      capaGrafica.add(entidad)
    })
  })
})
