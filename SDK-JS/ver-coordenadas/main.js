
require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"],(Map, MapView, FeatureLayer) => {

    const mapa = new Map({
        basemap:'topo-vector'
    })

    const vistaMapa = new MapView({
        container:'viewDiv',
        map:mapa,
        zoom:10,
        center:[-3.69,40.40]
    })

    const capaHospitales = new FeatureLayer({
        url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0'
    })

    const latitud = document.getElementById('latitud')
    const longitud = document.getElementById('longitud')

    function clickHandler(informacionEvento){
        console.log(informacionEvento)

        const latitudFormateada = Math.round(informacionEvento.mapPoint.latitude) 
        latitud.innerHTML = latitudFormateada

        const longitudFormateada = Math.round(informacionEvento.mapPoint.longitude)
        longitud.innerHTML = longitudFormateada
    }

    vistaMapa.on('click',clickHandler)

    function doubleClickHandler(){
        mapa.add(capaHospitales)
    }

    vistaMapa.on('double-click', doubleClickHandler)

})