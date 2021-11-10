import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio, Form } from './pages'

import './App.scss'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
