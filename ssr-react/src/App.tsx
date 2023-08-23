import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './hooks/useTypedSelector'
import { RootState } from './store'

import { useFetchCurrentUserMutation } from './features/auth/authApiSlice'
import { setCurrentUser } from './features/auth/authSlice'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
const App = () => {
  const dispatch = useAppDispatch()
  const [fetchCurrentUser] = useFetchCurrentUserMutation()

  const auth = useAppSelector((state: RootState) => {
    return state.auth
  })
  useEffect(() => {
    // if (auth.currentUser === undefined) {
    //   const fetchCurrentUserIfNot = async () => {
    //     const user = await fetchCurrentUser(null).unwrap()
    //     dispatch(setCurrentUser(user))
    //   }
    //   fetchCurrentUserIfNot()
    // }
  }, [])
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content="React SEO" />
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
async function loadCurrentUser(store: any) {
  // return store.dispatch(
  //   setCurrentUser({ email: 'x@gmail.com', username: 'username' })
  // )
  return store
}
export { loadCurrentUser }
export default App
