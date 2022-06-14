import React from "react";
import Navbar from "./Navbar";

export default function Header() {
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
				<li>
					<Navbar />
				</li>
			</div>
		</div>
	);
}
