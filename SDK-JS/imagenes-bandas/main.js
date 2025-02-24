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
    center: [-16.5, 28.4],
    zoom: 9
  })

  const incendioCanariasITL = new ImageryTileLayer({
    url: 'https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer',
    effect: 'brightness(500%)'
  })

  mapa.add(incendioCanariasITL)
})
