require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle"],

    (Map, MapView,BasemapToggle)=>{

        const mapa = new Map({
            basemap:'dark-gray-vector'
        })

        const vistaMapa = new MapView({
            container:'viewDiv',
            map:mapa,
            center:[-3.7,40.40],
            zoom:6
        })

        const widgetBasemapToggle = new BasemapToggle({
            view:vistaMapa,
            nextBasemap:'satellite',
            container:'widget-personalizado'
        })

        // vistaMapa.ui.add(widgetBasemapToggle,'top-right')
})