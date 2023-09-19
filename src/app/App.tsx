import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Login, Private } from 'pages'
import { PrivateRoutes, PublicRoutes } from 'constant'
import { RoutesWithWotFound } from 'utils'
import { AuthGuard } from 'guards'
import { store } from '../redux/store'

export default function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesWithWotFound>
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithWotFound>
      </BrowserRouter>
    </Provider>
  )
}
