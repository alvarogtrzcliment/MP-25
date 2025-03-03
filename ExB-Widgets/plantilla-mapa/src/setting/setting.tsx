import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { React } from 'jimu-core'
import {
  SettingSection,
  MapWidgetSelector
} from 'jimu-ui/advanced/setting-components'

const Setting = (props: AllWidgetSettingProps<any>) => {
  function mapSelectHandler(eventoMapa) {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: eventoMapa
    })
  }

  return (
    <SettingSection title={'Selecciona el Mapa'}>
      <MapWidgetSelector
        onSelect={mapSelectHandler}
        useMapWidgetIds={props.useMapWidgetIds}
      ></MapWidgetSelector>
    </SettingSection>
  )
}
export default Setting
