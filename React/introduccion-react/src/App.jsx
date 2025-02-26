import './App.css'
import AplicacionArcGIS from './components/AplicacionArcGIS/AplicacionArcGIS'
import Header from './components/Header'

function App() {

  return (
    <>

      <Header 
        titulo={'Aplicaciones de la plataforma ArcGIS'}
        subtitulo={'Aplicaciones integradas en cualquier lugar, momento y dispositivo'}
      ></Header>

      <section>
        <h2>Descripción de las aplicaciones</h2>

        <AplicacionArcGIS 
          logoLink={"https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png"}
          titulo={"ArcGIS Experience Builder"}
          descripcion={'ArcGIS Experience Builder es una solución altamente configurable para crear aplicaciones web atractivas sin escribir código.Elija una plantilla y cree una experiencia web envolvente para su público agrupando mapas web, aplicaciones, páginas, widgets interconectados y datos en 2D y 3D mediante una interfaz de arrastre y colocación flexible. Configure el aspecto de su aplicación web en distintos tamaños de pantalla e implántela en su organización o para el público. Cree widgets, temas y acciones personalizadas con un desarrollo de poco código para seguir ampliando su aplicación web.'}
          enlace={'https://www.esri.com/es-es/arcgis/products/arcgis-experience-builder/overview'}
        ></AplicacionArcGIS>

        <AplicacionArcGIS 
          logoLink={"https://storymaps.arcgis.com/static/images/logo.png?v=24.16-0416"}
          titulo={'ArcGIS Story Maps'}
          descripcion={"Utilice ArcGIS StoryMaps para combinar mapas, escenas 3D, contenido incrustado, multimedia y más en una narrativa interactiva que puede crear conciencia, influir en la opinión y afectar el cambio. El constructor fácil de usar le ayuda a crear historias y presentaciones digitales llamadas sesiones informativas que incorporan su trabajo de sistema dinámico de información geográfica (SIG) y contenido externo. Las historias y sesiones informativas se pueden organizar en colecciones y personalizar con temas."}
          enlace={"https://www.esri.com/en-us/arcgis/products/arcgis-storymaps/overview"}
        ></AplicacionArcGIS>

      </section>
    </>

  )
}

export default App
