import { PrivateRoutes } from 'constant'
import { Route } from 'react-router-dom'
import { Home } from './home'
import About from './about/about'
import { RoutesWithWotFound } from 'utils'

export default function Private () {
  return (
    <RoutesWithWotFound>
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.ABOUT} element={<About />} />
    </RoutesWithWotFound>
  )
}
