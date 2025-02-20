require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/renderers/UniqueValueRenderer'
], (Map, MapView, FeatureLayer, UniqueValueRenderer) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  const renderizadorValoresUnicos = new UniqueValueRenderer({
    field: 'Grado_urba',
    defaultSymbol: {
      type: 'simple-marker',
      color: 'gray'
    },
    uniqueValueInfos: [
      {
        value: 'Aislada',
        symbol: {
          type: 'simple-marker',
          color: 'blue'
        }
      },
      {
        value: 'Urbana',
        symbol: {
          type: 'simple-marker',
          color: 'red'
        }
      },
      {
        value: 'Semiurbana',
        symbol: {
          type: 'simple-marker',
          color: 'purple'
        }
      }
    ]
  })

  const playasFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer/0',
    renderer: renderizadorValoresUnicos
  })

  mapa.add(playasFL)
})
