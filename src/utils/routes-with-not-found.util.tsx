import { Route, Routes } from 'react-router-dom'
import { type ChildrenModel } from 'models'

export default function RoutesWithNotFound ({ children }: ChildrenModel) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  )
}
