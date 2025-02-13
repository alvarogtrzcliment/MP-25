
require(["esri/Map", "esri/views/MapView"],(Map, MapView) => {

    const mapa = new Map({
        basemap:'topo-vector'
    })

    const vistaMapa = new MapView({
        container:'viewDiv',
        map:mapa,
        zoom:10,
        center:[-3.69,40.40]
    })

    function clickHandler(informacionEvento){
        console.log(informacionEvento)
    }

    vistaMapa.on('click',clickHandler)

    // vistaMapa.on('click',(informacionEvento) => {
    //     console.log(informacionEvento)
    // })

})