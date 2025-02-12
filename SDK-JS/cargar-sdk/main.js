
require(["esri/Map", "esri/views/MapView"],(Map, MapView)=>{

    const mapa = new Map({
        basemap:'topo-vector'
    })

    const vistaMapa = new MapView({
        container:'viewDiv',
        map:mapa
    })

})