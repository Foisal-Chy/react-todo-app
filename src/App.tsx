import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Todos from "./pages/Todos"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  )
}