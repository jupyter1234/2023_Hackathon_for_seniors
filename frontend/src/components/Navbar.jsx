import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./font.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<div style={{fontFamily: 'Jeju Hallasan', fontSize:'40px'}}>어데고</div>
			<nav ref={navRef}>
				<Link to="/" onClick={showNavbar}>홈</Link>
				<Link to="/map" onClick={showNavbar}>지도</Link>
				<Link to="/community" onClick={showNavbar}>커뮤니티</Link>
				<Link to="/login" onClick={showNavbar}>로그인</Link>
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

export default Navbar;