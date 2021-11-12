import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio, Form, FormCelular } from './pages'

import './App.scss'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<FormCelular />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
