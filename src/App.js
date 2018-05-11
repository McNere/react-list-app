import React, { Component } from "react";
import Display from "./Display";
import Typer from "./Typer";
import List from "./List";

class App extends Component {
	constructor() {
		super();
		this.state = {
			typedText: "",
			list: []
		}
	}
	onType = (event) => {
		this.setState({typedText: event.target.value});
	}
	reverser = (text) => {
		return text.split("").reverse().join("");
	}
	submit = () => {
		const list = this.state.list.concat([this.state.typedText]);
		this.setState({list: list});
		this.setState({typedText: ""});
	}
	strikeThrough = (event) => {
		event.target.classList.toggle("strike");
	}
	enter = (event) => {
		if (event.key === "Enter") {
			this.submit();
		}
	}
	del = (event) => {
		event.target.parentElement.remove()
	}

	render() {
		return (
			<div>
				<Display text={ this.state.typedText } reverser={this.reverser}/>
				<Typer onType={ this.onType } enter={this.enter} text={this.state.typedText}/>
				<button onClick={ this.submit }>Submit</button>
				<List list={ this.state.list } strike={ this.strikeThrough } del={this.del}/>
			</div>
		)
	}
}

export default App;