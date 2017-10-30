import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCounter } from '../actions';

class ShowCount extends Component {

componentDidMount() {

}

	render () {
		return(<p>{this.props.countState}</p>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		countState : state.count
	};
};
export default connect(mapStateToProps)(ShowCount);

