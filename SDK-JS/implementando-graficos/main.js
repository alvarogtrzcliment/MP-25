require([
  'esri/Map',
  'esri/views/MapView',
  'esri/geometry/Point',
  'esri/symbols/SimpleMarkerSymbol',
  'esri/Graphic',
  'esri/layers/GraphicsLayer',
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleFillSymbol"
], (Map, MapView, Point, SimpleMarkerSymbol, Graphic, GraphicsLayer,SimpleLineSymbol,SimpleFillSymbol) => {
  const mapa = new Map({
    basemap: 'topo-vector'
  })

  const vistaMapa = new MapView({
    container: 'viewDiv',
    map: mapa,
    center: [-3.7, 40.4],
    zoom: 6
  })

  // Sin importar nada, utilizando autocasting

  const geometriaPunto = {
    type: 'point',
    latitude: 40.4,
    longitude: -3.7
  }

  // Importando la clase punto

  const geometriaPuntoDos = new Point({
    latitude: 40.4,
    logitude: -3.7
  })

  // Simbología de mi punto

  const simbologiaPunto = new SimpleMarkerSymbol({
    angle: 78,
    color: [53, 237, 167, 1],
    outline: {
      cap: 'round',
      color: [23, 146, 121, 1],
      join: 'round',
      miterLimit: 1,
      style: 'short-dot',
      width: 1
    },
    path: 'undefined',
    size: 20,
    style: 'triangle',
    xoffset: 0,
    yoffset: 0
  })

  const punto = new Graphic({
    geometry: geometriaPunto,
    symbol: simbologiaPunto
  })

  const capaGraficaGL = new GraphicsLayer()
  capaGraficaGL.add(punto)

  mapa.add(capaGraficaGL)

  // POLILÍNEA

  //   Geometría de mi línea

  const geometriaLinea = {
    type: 'polyline',
    paths: [
      [-3.8, 40.41],
      [-3.9, 40.42]
    ]
  }

  //   Simbología de mi línea

  const simbologiaLinea = new SimpleLineSymbol({
    cap: "round",
    color: [98,197,32,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  });

  const graficoLinea = new Graphic({
    symbol:simbologiaLinea,
    geometry:geometriaLinea
  })

  const capaLineasGL = new GraphicsLayer()
  capaGraficaGL.add(graficoLinea)
  mapa.add(capaLineasGL)

//   POLÍGONO

  const geometriaPoligono = {
    type:'polygon',
    rings:[[-3.6,40.39],[-3.5,40.38],[-3.4,40.38]]
  }

  const simbologiaPoligono = new SimpleFillSymbol({
    color: [194,0,94,1],
    outline: {
      cap: "round",
      color: [5,5,5,1],
      join: "round",
      miterLimit: 1,
      style: "solid",
      width: 1
    },
    style: "diagonal-cross"
  });

  const graficoPoligono = new Graphic({
    symbol:simbologiaPoligono,
    geometry:geometriaPoligono
  })

  const capaPoligonosGL = new GraphicsLayer()

  capaGraficaGL.add(graficoPoligono)
  mapa.add(capaPoligonosGL)

})
