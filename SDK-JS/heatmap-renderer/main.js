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

  const hospitalesFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0',
    renderer: {
      type: 'heatmap',
      field: 'OBJECTID',
      colorStops: [
        { ratio: 0, color: 'transparent' },
        { ratio: 1, color: 'red' }
      ],
      minDensity: 1,
      maxDensity: 10,
      radius: 10
    }
  })

  mapa.add(hospitalesFL)
})
