import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ShowName extends Component {

componentDidMount() {

console.log(this.props);
}

	render () {
		return(<p>{this.props.thingy.first} {this.props.thingy.last}</p>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		thingy : state.name
	};
};
export default connect(mapStateToProps)(ShowName);

