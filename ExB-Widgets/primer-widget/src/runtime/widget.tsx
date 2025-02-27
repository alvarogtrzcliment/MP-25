import { React, type AllWidgetProps } from 'jimu-core'
import { type IMConfig } from '../config'
import './widget.css'

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="primer-widget">
      <h3>Hola Mundo</h3>
    </div>
  )
}

export default Widget
