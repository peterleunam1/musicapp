import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { privateRoutes } from 'constant'
import { RoutesWithWotFound } from 'utils'

const Home = lazy(async () => await import('./home/home'))

export default function Private () {
  return (
    <RoutesWithWotFound>
      <Route path={privateRoutes.HOME} element={<Home />} />
    </RoutesWithWotFound>
  )
}
