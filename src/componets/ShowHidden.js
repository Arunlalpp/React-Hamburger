import React from "react";

export default function App() {
	// Keep the state at this level and pass it down as needed.
	const [isVisible, setIsVisible] = React.useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<div className="App">
			<Toggle isVisible={isVisible} toggleVisibility={toggleVisibility} />
			{isVisible && <NewComponent />}
		</div>
	);
}

class Toggle extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.toggleVisibility}>
					{this.props.isVisible ? "Hide details" : "Show details"}
				</button>
				{this.props.isVisible && (
					<div>
						<p>
							When the button is click I do want this component or text to be
							shown - so my question is how do I hide the component
						</p>
					</div>
				)}
			</div>
		);
	}
}

class NewComponent extends React.Component {
	render() {
		return (
			<div>
				<p>
					When the button below (which is in another component) is clicked, I
					want this component to be hidden - but how do I pass the state to say
					- this is clicked so hide
				</p>
			</div>
		);
	}
}
