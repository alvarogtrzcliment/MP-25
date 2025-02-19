require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/rest/support/Query',
  'esri/symbols/PictureMarkerSymbol',
  'esri/layers/GraphicsLayer'
], (Map, MapView, FeatureLayer, Query, PictureMarkerSymbol, GraphicsLayer) => {
  const mapa = new Map({
    basemap: 'hybrid'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  //   Cargar las Capas

  const paisesFL = new FeatureLayer({
    url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0'
  })

  const incendiosFl = new FeatureLayer({
    url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/1'
  })

  const capaGraficaResultado = new GraphicsLayer()

  mapa.add(capaGraficaResultado)

  //   mapa.addMany([paisesFL, incendiosFl])

  //   Crear la consulta

  const parametrosQueryPaises = new Query({
    where: "ISO_CC = 'ESP'", // SENTENCIA SQL!!!!!
    returnGeometry: true
  })

  paisesFL.queryFeatures(parametrosQueryPaises).then((featureSetPaises) => {
    const arrayPoligonoEspana = featureSetPaises.features

    arrayPoligonoEspana.map((poligonoEspana) => {
      const geometriaPoligono = poligonoEspana.geometry
      const parametrosQueryIncendios = new Query({
        geometry: geometriaPoligono,
        spatialRelationship: 'intersects',
        returnGeometry: true
      })

      incendiosFl
        .queryFeatures(parametrosQueryIncendios)
        .then((featureSetIncendios) => {
          const arrayPuntosIncendios = featureSetIncendios.features

          arrayPuntosIncendios.map((puntoIncendio) => {
            puntoIncendio.symbol = new PictureMarkerSymbol({
              url: 'https://cdn-icons-png.flaticon.com/512/1172/1172477.png?w=740&t=st=1686904179~exp=1686904779~hmac=88debfe6e746b67f6d5ea14f8b3de9cda0bb4863f2853270d04519720ffda663',
              width: '64px',
              height: '64px'
            })

            capaGraficaResultado.add(puntoIncendio)
          })
        })
    })
  })
})
