require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/renderers/ClassBreaksRenderer'
], (Map, MapView, FeatureLayer, ClassBreaksRenderer) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  const renderizadorZonasBasicasSalud = new ClassBreaksRenderer({
    field: 'NM_POB',
    classBreakInfos: [
      {
        minValue: 0,
        maxValue: 20000,
        symbol: {
          type: 'simple-fill',
          color: 'red'
        }
      },
      {
        minValue: 20001,
        maxValue: 40000,
        symbol: {
          type: 'simple-fill',
          color: 'yellow'
        }
      },
      {
        minValue: 40001,
        maxValue: 60000,
        symbol: {
          type: 'simple-fill',
          color: 'green'
        }
      }
    ]
  })

  const zonasBasicasSaludFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ZONAS_BASICAS_SALUD_MADRID/FeatureServer/0',
    renderer: renderizadorZonasBasicasSalud
  })

  mapa.add(zonasBasicasSaludFL)
})
