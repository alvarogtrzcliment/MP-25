
require(["esri/WebScene", "esri/views/SceneView", "esri/widgets/LayerList","esri/widgets/Weather"],
    (WebScene,SceneView,LayerList,Weather)=>{

    const escenaWeb = new WebScene({
        portalItem:{
            id: "6604dffad1c343c99338700729b48378"
        }
    })

    const vistaEscena = new SceneView({
        container:'viewDiv',
        map:escenaWeb,
        environment:{
            weather:{
                type:'snowy'
            }
        }
    })

    const widgetLayerList = new LayerList({
        view:vistaEscena
    })

    vistaEscena.ui.add(widgetLayerList,'bottom-right')

    const tiempoWidget = new Weather({
        view:vistaEscena
    })

    vistaEscena.ui.add(tiempoWidget,'top-right')

})