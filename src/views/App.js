import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import * as action from '../actions';
import ShowCount from '../components/ShowCount';
import ShowName from '../components/ShowName';
import ShowForm from '../components/ShowForm';
import MyForm from '../components/MyForm';
class App extends Component {
componentDidMount() {
	console.log();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
	<span onClick={this.props.addthisCounter}>X</span>
	<span onClick={this.props.removeCounter}>Z</span>
	<span onClick={this.props.addotherCounter}>Y</span>
	<p>
	<span onClick={this.props.cassname}>C</span>
	<span onClick={this.props.jasonname}>J</span>
	</p>
	<p>
		{this.props.my_store.count}
	</p>
	<p>
		{this.props.my_store.name.first} - {this.props.my_store.name.last}
	</p>
	<p>
		{this.props.my_store.test.city}
	</p>
	<ShowCount /><ShowName />
	<div><MyForm /></div>
	<div><ShowForm /></div>
      </div>
    );
  }
}
const mapStatetoProps = state => {
	return {
	my_store : state
	}
}

const mapDispatchtoProps = dispatch => {
	return {
		addthisCounter : () => dispatch(action.addCounter()),
		removethisCounter : () => dispatch(action.removeCounter()),
		addotherCounter : () => dispatch({
			type: 'ADD_COUNTER'
		}),
		removeCounter : () => dispatch({
			type: 'REMOVE_COUNTER'
		}),
		cassname : () => dispatch({
			type: 'CASS'
		}),
		jasonname : () => dispatch({
			type: 'JASON'
		})
	}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App)
