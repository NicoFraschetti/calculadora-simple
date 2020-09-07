import React from 'react';
import Button from './components/Button';
import ItemHistorial from './components/ItemHistorial.js'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {inputText : '',res: '', historial: []};
	}

	handleChange(e){
		this.setState({inputText: e.target.value});
	}

	handleClick(e){
		this.setState({inputText : this.state.inputText + e});
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({res: eval(this.state.inputText)});
		//this.setState(historial: this.state.historial.push({op: this.state.inputText, r: this.state.res}));
		this.setState(state => {
			const list = state.historial.concat({op: state.inputText, r: state.res});
			return {
				inputText: state.inputText,
				res: state.res,
				historial: list,
			};
		});
		this.setState({inputText: ''});
	}

	render(){
		var id = 0;
		const list = this.state.historial.map(item =>
			<ItemHistorial key={id++} item={item} />		
		);
		return (
			<div className="center">
			<h1 className="guardar">Calculadora simple</h1>
			<form onSubmit={this.handleSubmit}>
				<ul>{list}</ul>
				<input 
					className = "monospace"
					type="text" 
					value={this.state.inputText} 
					onChange={this.handleChange}
				/>
				<br/>
				<Button 
					value="1" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="2" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="3" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="+" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="*" 
					handleClick={this.handleClick}
				/>
				<br/>
				<Button 
					value="4" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="5" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="6" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="-" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="/" 
					handleClick={this.handleClick}
				/>
				<br/>
				<Button 
					value="7" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="8" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="9" 
					handleClick={this.handleClick}
				/>
				<Button 
					value="0" 
					handleClick={this.handleClick}
				/>
				<button type="submit" className="monospace">=</button>

			</form>
			<button className="container guardar" type="button"> Guardar historial</button>
			<button className="container guardar" type="submit"> Limpiar historial</button>
			</div>
		);
	}
}

export default App