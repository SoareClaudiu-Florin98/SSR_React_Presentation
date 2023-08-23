import React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../hooks/useTypedSelector'
import { logOut } from '../../features/auth/authSlice'
import { useLogOutMutation } from '../../features/auth/authApiSlice'

export default function SignedInMenu() {
  const dispatch = useDispatch()
  const [logout] = useLogOutMutation()

  const { email } = useAppSelector((state) => state.auth.currentUser!)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleLogout = async () => {
    await logout(null)
    dispatch(logOut())
  }

  return (
    <div>
    </div>
  )
}
