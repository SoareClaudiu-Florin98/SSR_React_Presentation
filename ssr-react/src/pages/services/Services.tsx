import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { RootState } from '../../store'
import { fetchServices } from '../../features/services/servicesService'
import { Helmet } from 'react-helmet-async'

const Services = () => {
  const services = useAppSelector((state: RootState) => {
    return state.services
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (services.servicesList.length == 0) {
      dispatch(fetchServices())
    }
  }, [])
  const renderServices = () => {
    return services.servicesList.map((user: any) => {
      return <li key={user.id}>{user.name}</li>
    })
  }
  const Head = () => {
    //ESX template string is req
    return (
      <Helmet>
        <title>{`${services.servicesList.length}`} Services loaded</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    )
  }
  return (
    <div>
      <Head />
      {services.loading && <div>Loading....</div>}
      {!services.loading && services.error ? (
        <div>Error : {services.error}</div>
      ) : null}
      {!services.loading && <ul>{renderServices()}</ul>}
    </div>
  )
}
function loadServicesList(store: any) {
  return store.dispatch(fetchServices())
}
export { loadServicesList }
export default Services
