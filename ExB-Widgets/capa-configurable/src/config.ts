import { type ImmutableObject } from 'seamless-immutable'

export interface Config {
  urlCapa: string
}

export type IMConfig = ImmutableObject<Config>
