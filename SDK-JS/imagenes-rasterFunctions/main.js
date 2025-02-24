require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/ImageryTileLayer',
  'esri/layers/support/RasterFunction',
  'esri/layers/support/rasterFunctionUtils'
], (Map, MapView, ImageryTileLayer, RasterFunction, rasterFunctionUtils) => {
  const mapa = new Map({
    basemap: 'dark-gray'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-16.5, 28.4],
    zoom: 9
  })

  const funcionRasterNDVI = new RasterFunction({
    functionName: 'NDVI',
    functionArguments: {
      visibleBandID: 2,
      infraredBandID: 1
    }
  })

  const functionRasterColorMap = rasterFunctionUtils.colormap({
    colorRampName: 'red-to-green',
    raster: funcionRasterNDVI
  })

  const incendioCanariasITL = new ImageryTileLayer({
    url: 'https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer',
    rasterFunction: functionRasterColorMap
  })

  mapa.add(incendioCanariasITL)
})
