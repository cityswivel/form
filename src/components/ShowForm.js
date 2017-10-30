import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var email = 'no';
var password = 'no';

class ShowForm extends Component {



	render () {
		return(
		<p>
		{email} {password}</p>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		thingy : state.form.simple.values
	};
};
export default connect(mapStateToProps)(ShowForm);

