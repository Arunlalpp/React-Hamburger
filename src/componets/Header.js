import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Header() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};
	return (
		<div className="bg-red-400 w-full">
			<div className="flex flex-row list-none max-w-[95%] m-auto items-center">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Home</a>
				</li>

				<nav className="navBar">
					<button onClick={handleToggle}>
						{navbarOpen ? (
							<MdClose
								style={{ color: "#fff", width: "40px", height: "40px" }}
							/>
						) : (
							<FiMenu
								style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
							/>
						)}
					</button>
					<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}></ul>
				</nav>
			</div>
		</div>
	);
}
