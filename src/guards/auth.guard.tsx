import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { type AppStore } from '../redux/store'
import { PublicRoutes } from 'constant'

export default function AuthGuard () {
  const user = useSelector((store: AppStore) => store.user)
  return user.name ? <Outlet/> : <Navigate replace to={PublicRoutes.LOGIN}/>
}
