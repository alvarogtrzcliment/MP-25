import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { React } from 'jimu-core'
import {
  SettingSection,
  MapWidgetSelector
} from 'jimu-ui/advanced/setting-components'
import { TextInput, UrlInput, UrlInputResult } from 'jimu-ui'

const Setting = (props: AllWidgetSettingProps<any>) => {
  console.log('Setting Props', props)

  function mapSelectHandler(eventoMapa: string[]) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: eventoMapa
    })
  }

  function tituloInputHandler(eventoTituloInput: string) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('titulo', eventoTituloInput)
    })
  }

  function urlImagenHandler(eventoImagenUrl: UrlInputResult) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('urlImagen', eventoImagenUrl.value)
    })
  }

  return (
    <>
      <SettingSection title={'Selecciona el Mapa'}>
        <MapWidgetSelector
          onSelect={mapSelectHandler}
          useMapWidgetIds={props.useMapWidgetIds}
          autoSelect={false}
        ></MapWidgetSelector>
      </SettingSection>
      <SettingSection title={'Nombre del Ayuntamiento'}>
        <TextInput onAcceptValue={tituloInputHandler}></TextInput>
      </SettingSection>
      <SettingSection title={'Url de la imagen'}>
        <UrlInput
          onAcceptValue={urlImagenHandler}
          schemes={['https']}
        ></UrlInput>
      </SettingSection>
    </>
  )
}
export default Setting
