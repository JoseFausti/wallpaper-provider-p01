import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Wallpapers from "../pages/Wallpapers"
import Error from "../pages/Error"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/error" element={<Error error="An error occurred." />} />
    </Routes>
  )
}

export default AppRouter
