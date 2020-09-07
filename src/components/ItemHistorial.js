import React from 'react';

class ItemHistorial extends React.Component {

	render(){
		const op = this.props.item.op;
		const r = this.props.item.r
		return (
			<div className="center monospace">
				<li> {op} = {r} </li>
			</div>
		);
	}

}

export default ItemHistorial;