require(['esri/Map', 'esri/views/MapView', 'esri/layers/ImageryTileLayer'], (
  Map,
  MapView,
  ImageryTileLayer
) => {
  const mapa = new Map({
    basemap: 'dark-gray'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-100, 40.4],
    zoom: 5
  })

  const vientoITL = new ImageryTileLayer({
    url: 'https://tiledimageservices.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NLDAS_Hourly_8_30_2021/ImageServer',
    renderer: {
      type: 'flow',
      flowSpeed: 35,
      trailWidth: '1px',
      trailLength: 250,
      density: 50,
      visualVariables: [
        {
          type: 'color',
          field: 'Magnitude',
          stops: [
            { value: 0, color: 'darkblue' },
            {
              value: 7,
              color: 'orange'
            },
            { value: 15, color: 'red' }
          ]
        }
      ]
    },
    effect: 'bloom(1.5,0.5px,0)'
  })

  console.log(vientoITL)

  mapa.add(vientoITL)
})
