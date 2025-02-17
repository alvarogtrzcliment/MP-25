
require(["esri/Map","esri/views/MapView","esri/widgets/AreaMeasurement2D"],(Map,MapView,AreaMeasurement2D)=>{

    const mapa = new Map({
        basemap:'topo-vector'
    })

    const vistaMapa = new MapView({
        container:'viewDiv',
        map:mapa,
        center:[-3.7,40.40],
        zoom:6
    })

    const widgetArea = new AreaMeasurement2D({
        view:vistaMapa
    })

    vistaMapa.ui.add(widgetArea, {
        position:'top-right'
    })

})