import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  titulo: string
  urlImagen: string
}

export type IMConfig = ImmutableObject<Config>
