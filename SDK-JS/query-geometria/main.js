require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/rest/support/Query',
  'esri/symbols/SimpleMarkerSymbol',
  'esri/layers/GraphicsLayer',
  'esri/geometry/Polygon',
  'esri/symbols/SimpleFillSymbol',
  'esri/Graphic'
], (
  Map,
  MapView,
  FeatureLayer,
  Query,
  SimpleMarkerSymbol,
  GraphicsLayer,
  Polygon,
  SimpleFillSymbol,
  Graphic
) => {
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

  // Crear polígono

  const geometriaPoligono = new Polygon({
    rings: [
      [-7.5, 36],
      [-2.5, 36],
      [-2.5, 37.8],
      [-7.5, 37.8]
    ]
  })

  const simbologiaPoligono = new SimpleFillSymbol({
    color: [0, 122, 194, 1],
    outline: {
      cap: 'round',
      color: [0, 122, 194, 1],
      join: 'round',
      miterLimit: 1,
      style: 'solid',
      width: 1
    },
    style: 'forward-diagonal'
  })

  const graficoPoligono = new Graphic({
    geometry: geometriaPoligono,
    symbol: simbologiaPoligono
  })

  const capaGraficaPoligono = new GraphicsLayer()
  capaGraficaPoligono.add(graficoPoligono)
  mapa.add(capaGraficaPoligono)

  //   Consulta

  const capaGraficaResultados = new GraphicsLayer()
  mapa.add(capaGraficaResultados)

  const parametrosQuery = new Query({
    geometry: graficoPoligono.geometry,
    spatialRelationship: 'intersects',
    outFields: ['*'],
    returnGeometry: true
  })

  hospitalesFl.queryFeatures(parametrosQuery).then((resultadosQuery) => {
    const entidades = resultadosQuery.features

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

      capaGraficaResultados.add(entidad)
    })
  })
})
