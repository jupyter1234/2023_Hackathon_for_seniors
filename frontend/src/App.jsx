import Navbar from "./components/Navbar"
import MainPage from "./pages/MainPage"
import MealPage from "./pages/Main/MealPage"
import LecturePage from "./pages/Main/LecturePage"
import MapPage from "./pages/MapPage"
import ProgramPage from "./pages/ProgramPage"
import RegisterPage from "./pages/RegisterPage"
import CommunityPage from "./pages/CommunityPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Community_Board from "./pages/Community_Board"
import Community_Post from "./pages/Community_Post"


import { Routes, Route } from "react-router-dom"
import { RecoilRoot } from "recoil"

export default function App() {
  return (
    <RecoilRoot>
      {/* authenticated파라미터 넘겨서 네브바 구성 */}
      <Navbar />
      {/* authenticated를 이용해서 path구성 */}
      <Routes>
        {/* home */}
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/meals" element={<MealPage></MealPage>} />
        <Route path="/lectures" element={<LecturePage></LecturePage>} />
        {/* ------------------------------------------- */}
        <Route path="/map" element={<MapPage></MapPage>} />
        <Route path="/programs" element={<ProgramPage></ProgramPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        {/* ------------------------------------------- */}
        <Route path="/community" element={<CommunityPage></CommunityPage>} />
        <Route path="/community/board" element={<Community_Board></Community_Board>} />
        <Route path="/community/post" element={<Community_Post></Community_Post>}/>
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/signup" element={<SignUpPage></SignUpPage>} />
      </Routes>
    </RecoilRoot>
  )
}