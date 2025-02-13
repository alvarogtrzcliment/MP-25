
require(["esri/Map","esri/views/SceneView","esri/layers/SceneLayer"],(Map, SceneView, SceneLayer) => {

    const mapa = new Map({
        basemap:'hybrid',
        ground:'world-elevation'
    })

    const vistaEscena = new SceneView({
        container:'viewDiv',
        map:mapa,
        camera:{
            position:[-3.69,40.40,2000],
            tilt:45,
            heading:70
        }
    })

    const osmBuildingsSL = new SceneLayer({
        url:'https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer'
    })

    mapa.add(osmBuildingsSL)

    const boton = document.getElementById('boton')

    boton.addEventListener('click',(eventoBoton) => {
        vistaEscena.goTo({
            position:[-3.69,45.40,2000],
            tilt:45,
            heading:70
        })
    })

})

