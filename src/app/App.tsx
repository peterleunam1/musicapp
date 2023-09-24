import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from 'constant'
import { RoutesWithWotFound } from 'utils'
import { AuthGuard } from 'guards'
import { store } from '../redux/store'

const Login = lazy(async () => await import('../pages/public/login/login'))
const Private = lazy(async () => await import('../pages/private/private'))
const AuthRedirect = lazy(async () => await import('../pages/public/auth-redirect/auth-redirect'))

export default function App () {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Provider store={store}>
        <BrowserRouter>
          <RoutesWithWotFound>
            <Route path={PrivateRoutes.HOME}element={<Navigate to={PrivateRoutes.PRIVATE}/>} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.CALLBACK} element={<AuthRedirect/>} />
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithWotFound>
        </BrowserRouter>
      </Provider>
    </Suspense>
  )
}
