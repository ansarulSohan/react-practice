import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3']
	}


	constructor() {
		super();
		this.handleIncrement = this.handleIncrement.bind(this);
	}

	// styles = {
	// 	fontSize: 20,
	// 	fontWeight: 'bold'
	// }

	rendarTags() {
		if (this.state.tags.length === 0)
			return null;
		else {
			return (
				<ul>
					{
						this.state.tags.map(tag => <li key={tag}>{tag}</li>)
					}
				</ul>
			)
		}
	}

	handleIncrement = () => {
		console.log('Increment Clicked');
	}

	render() {

		// let classes = this.getBadgeClasses();
		return <div>
			{/* <img src={this.state.imageUrl} alt=""/> */}
			<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
			<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
			{this.state.tags.length === 0 && "Please add a tag"}
			{this.rendarTags()}
		</div>;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += (this.state.count === 0) ? "warning" : "primary";
		return classes;
	}
	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;