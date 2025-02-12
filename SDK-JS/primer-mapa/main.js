
require(["esri/Map", "esri/views/MapView"],(Map, MapView) => {

    const mapa = new Map({
        basemap:'dark-gray'
    })

    const vistaMapa = new MapView({
        container:'viewDiv',
        map:mapa,
        zoom:15,
        center:[-3.69, 40.40]
    })

})