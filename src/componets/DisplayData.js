import React, { useState } from "react";

export default function display() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [show, setShow] = useState(true);
	return (
		<div className="App">
			{show ? <h1>Hello World !</h1> : null}
			<button onClick={() => setShow(true)}>Show</button>
			<button onClick={() => setShow(false)}>Hide</button>
		</div>
	);
}
