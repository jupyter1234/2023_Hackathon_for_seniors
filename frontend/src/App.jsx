import Navbar from "./components/Navbar"
import MainPage from "./pages/MainPage"
import MealPage from "./pages/Main/MealPage"
import LecturePage from "./pages/Main/LecturePage"
import MapPage from "./pages/MapPage"
import ProgramPage from "./pages/PrgramPage"
import RegisterPage from "./pages/RegisterPage"
import CommunityPage from "./pages/CommunityPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import Community_Badook from "./pages/Community/Community_Badook"
import Community_Walking from "./pages/Community/Community_Walking"
import Community_Gateball from "./pages/Community/Community_Gateball"
import Community_Etc from "./pages/Community/Community_Etc"
import Board_Badook from "./pages/Board/Community_Badook"
import Board_Walking from "./pages/Board/Community_Walking"
import Board_Gateball from "./pages/Board/Community_Gateball"
import Board_Etc from "./pages/Board/Community_Etc"

import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
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
        <Route path="/community/badook" element={<Community_Badook></Community_Badook>} />
        <Route path="/community/walking" element={<Community_Walking></Community_Walking>}/>
        <Route path="/community/gateball" element={<Community_Gateball></Community_Gateball>}/>
        <Route path="/community/etc" element={<Community_Etc></Community_Etc>}/>

        <Route path="/board/badook" element={<Board_Badook></Board_Badook>}/>
        <Route path="/board/walking" element={<Board_Walking></Board_Walking>}/>
        <Route path="/board/gateball" element={<Board_Gateball></Board_Gateball>}/>
        <Route path="/board/etc" element={<Board_Etc></Board_Etc>}/>
        {/* ------------------------------------------- */}
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/signup" element={<SignUpPage></SignUpPage>} />
      </Routes>
    </div>
  )
}