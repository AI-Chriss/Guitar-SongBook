import Home from './components/Home'
import ObjectDetail from './components/ObjectDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs/:id" element={<ObjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
