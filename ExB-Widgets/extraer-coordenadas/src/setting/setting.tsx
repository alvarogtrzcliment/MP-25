import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { React } from 'jimu-core'
import {
  SettingSection,
  MapWidgetSelector
} from 'jimu-ui/advanced/setting-components'

const Setting = (props: AllWidgetSettingProps<any>) => {
  console.log('Setting Props', props)

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
        autoSelect={false}
      ></MapWidgetSelector>
    </SettingSection>
  )
}
export default Setting
