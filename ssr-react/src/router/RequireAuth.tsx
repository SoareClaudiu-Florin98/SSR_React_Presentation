import { Navigate, Outlet, useLocation } from 'react-router'
import { useAppSelector } from '../hooks/useTypedSelector'

export default function RequireAuth() {
  const user = useAppSelector((state) => state.auth.currentUser)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return <Outlet />
}
