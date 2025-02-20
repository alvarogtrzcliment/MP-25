require(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'], (
  Map,
  MapView,
  FeatureLayer
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

  const renderizadorSimple = {
    type: 'simple',
    symbol: {
      type: 'simple-marker',
      color: 'green'
    }
  }

  const hospitalesFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer',
    renderer: renderizadorSimple
  })

  mapa.add(hospitalesFL)
})
