import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./font.css";

import { useSetRecoilState } from "recoil"
import { UserInfo, IsLogin } from "../store/Info"

export default function Navbar({authenticated}) {
	const setIsLogin = useSetRecoilState(IsLogin);
	const setUserInfo = useSetRecoilState(UserInfo);
	const navRef = useRef();
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const logout = () => {
		setIsLogin(false);
		setUserInfo({});
		showNavbar();
	};

	return (
		<header>
			<div style={{fontFamily: 'Jeju Hallasan', fontSize:'40px'}}>어데고</div>
			<nav ref={navRef}>
				<Link to="/" onClick={showNavbar}>홈</Link>
				<Link to="/map" onClick={showNavbar}>지도</Link>
				<Link to="/community" onClick={showNavbar}>커뮤니티</Link>
				{authenticated ? (
					<Link to="/" onClick={logout}>로그아웃</Link>
				) : (
					<Link to="/login" onClick={showNavbar}>로그인</Link>
				)}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}