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
import Community_Write from "./pages/Community_Write"
import Community_Badook from "./pages/Community/Community_Badook"
import Community_Walking from "./pages/Community/Community_Walking"
import Community_Gateball from "./pages/Community/Community_Gateball"
import Community_Etc from "./pages/Community/Community_Etc"
import Board_Badook from "./pages/Board/Community_Badook"
import Board_Walking from "./pages/Board/Community_Walking"
import Board_Gateball from "./pages/Board/Community_Gateball"
import Board_Etc from "./pages/Board/Community_Etc"

import { Routes, Route, Navigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { IsLogin } from "./store/Info"

export default function App() {
  const authenticated = useRecoilValue(IsLogin);
  console.log(authenticated);
  return (
    <>
      {/* authenticated파라미터 넘겨서 네브바 구성 */}
      <Navbar authenticated={authenticated} />
      {/* authenticated를 이용해서 path구성 */}
      <Routes>
        {/* home */}
        <Route path="/" element={<MainPage></MainPage>} />
        <Route path="/meals" element={<MealPage></MealPage>} />
        <Route path="/lectures" element={<LecturePage></LecturePage>} />
        {/* ------------------------------------------- */}
        <Route path="/map" element={!authenticated ? <Navigate to="/login" replace /> : <MapPage></MapPage>} />
        <Route path="/programs" element={!authenticated ? <Navigate to="/login" replace /> : <ProgramPage></ProgramPage>} />
        <Route path="/register" element={!authenticated ? <Navigate to="/login" replace /> : <RegisterPage></RegisterPage>} />
        {/* ------------------------------------------- */}
        <Route path="/community" element={!authenticated ? <Navigate to="/login" replace /> : <CommunityPage></CommunityPage>} />
        <Route path="/community/write" element={!authenticated ? <Navigate to="/login" replace /> : <Community_Write></Community_Write>} />
        <Route path="/community/badook" element={!authenticated ? <Navigate to="/login" replace /> : <Community_Badook></Community_Badook>} />
        <Route path="/community/walking" element={!authenticated ? <Navigate to="/login" replace /> : <Community_Walking></Community_Walking>}/>
        <Route path="/community/gateball" element={!authenticated ? <Navigate to="/login" replace /> : <Community_Gateball></Community_Gateball>}/>
        <Route path="/community/etc" element={!authenticated ? <Navigate to="/login" replace /> : <Community_Etc></Community_Etc>}/>
        {/* ------------------------------------------- */}
        <Route path="/board/badook" element={!authenticated ? <Navigate to="/login" replace /> : <Board_Badook></Board_Badook>}/>
        <Route path="/board/walking" element={!authenticated ? <Navigate to="/login" replace /> : <Board_Walking></Board_Walking>}/>
        <Route path="/board/gateball" element={!authenticated ? <Navigate to="/login" replace /> : <Board_Gateball></Board_Gateball>}/>
        <Route path="/board/etc" element={!authenticated ? <Navigate to="/login" replace /> : <Board_Etc></Board_Etc>}/>
        {/* ------------------------------------------- */}
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/signup" element={<SignUpPage></SignUpPage>} />
      </Routes>
    </>
  )
}