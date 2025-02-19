require([
  'esri/Map',
  'esri/views/MapView',
  'esri/widgets/Search',
  'esri/layers/FeatureLayer'
], (Map, MapView, Search, FeatureLayer) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  const hospitalesFl = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer'
  })

  mapa.add(hospitalesFl)

  const searchWidget = new Search({
    view: vistaMapa,
    includeDefaultSources: false,
    sources: [
      {
        layer: hospitalesFl,
        searchFields: ['NOMBRE', 'DIRECCION'],
        displayField: 'NOMBRE',
        exactMatch: false,
        outFields: ['*'],
        placeholder: 'Ejemplo: HOSPITAL DE LEZA',
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 0
      }
    ]
  })

  vistaMapa.ui.add(searchWidget, 'top-right')
})
