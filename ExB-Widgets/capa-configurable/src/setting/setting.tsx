import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { React } from 'jimu-core'
import {
  SettingSection,
  MapWidgetSelector
} from 'jimu-ui/advanced/setting-components'
import { UrlInput, UrlInputResult } from 'jimu-ui'

const Setting = (props: AllWidgetSettingProps<any>) => {
  console.log('Setting Props', props)

  function mapSelectHandler(eventoMapa) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: eventoMapa
    })
  }

  function urlCapaHandler(eventoUrlCapa: UrlInputResult) {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('urlCapa', eventoUrlCapa.value)
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
      <SettingSection title={'Url de la capa'}>
        <UrlInput
          schemes={['https']}
          onAcceptValue={urlCapaHandler}
        ></UrlInput>
      </SettingSection>
    </>
  )
}
export default Setting
