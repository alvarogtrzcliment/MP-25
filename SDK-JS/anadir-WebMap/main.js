
require(["esri/WebMap","esri/views/MapView", "esri/layers/FeatureLayer"],(WebMap, MapView, FeatureLayer)=>{

    const mapaWeb = new WebMap({
        portalItem:{
            id:'67672f754f654b1b8965734404ff599f'
        }
    })

    const vistaMapa = new MapView({
        container:'viewDiv',
        map: mapaWeb
    })

    const capaHospitalesFL = new FeatureLayer({
        portalItem:{
            id:'68745a7fb7a348b6b0d722c8517790af'
        }
    })

    mapaWeb.add(capaHospitalesFL)

})