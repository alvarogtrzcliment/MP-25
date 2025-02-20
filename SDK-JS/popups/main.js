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
    zoom: 6,
    popup: {
      dockEnabled: true,
      dockOptions: {
        breakpoint: false,
        position: 'bottom-right',
        buttonEnabled: false
      }
    }
  })

  const plantillaPopup = {
    title: '{NOMBRE}', // Arcade
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'DIRECCION',
            label: 'Dirección'
          },
          {
            fieldName: 'TELEFONO',
            label: 'Teléfono'
          }
        ]
      }
    ]
  }

  const hospitalesFL = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer',
    popupTemplate: plantillaPopup
  })

  mapa.add(hospitalesFL)
})
