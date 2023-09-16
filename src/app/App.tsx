import { Login } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
