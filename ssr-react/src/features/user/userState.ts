import User from '../../model/user'

export default interface UserState {
  loading: boolean
  error: string
  currentUser: User | undefined
  token: string
  cookie: string
}
