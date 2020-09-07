import React from 'react';

class Button extends React.Component {

	constructor(props){
		super(props);
		this.clicked = this.clicked.bind(this);
	}

	clicked(e){
		this.props.handleClick(this.props.value);
	}

	render(){
		return (
			<button className="monospace" type="button" onClick={this.clicked}> {this.props.value} </button>
		)
	}

}

export default Button;

