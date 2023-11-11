import Navbar from "./components/Navbar"
import MainPage from "./pages/MainPage"
import MapPage from "./pages/MapPage"
import RegisterPage from "./pages/RegisterPage"
import CommunityPage from "./pages/CommunityPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
      {/* authenticated파라미터 넘겨서 네브바 구성 */}
      <Navbar />
      {/* authenticated를 이용해서 path구성 */}
      <Routes>
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/map" element={<MapPage></MapPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/community" element={<CommunityPage></CommunityPage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/signup" element={<SignUpPage></SignUpPage>} />
      </Routes>
    </div>
  )
}