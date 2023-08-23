import Service from './service'

export default interface ServicesState {
  loading: boolean
  servicesList: Service[]
  error: string
}
