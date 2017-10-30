import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class MyForm extends Component {
	render() {
		return (
      <div className="form">
        <div className="container">
          <h2>Sign In</h2>
          <form>
            <Field name="email"
                  component="input"
                  type="text"
                  placeholder="Email"
            />
            <Field name="password"
                  component="input"
                  type="password"
                  placeholder="Password"
            />
            <button type="submit" className="blue">Sign In</button>
          </form>
        </div>
      </div>
		);
	}
}
const reduxFormSignin = reduxForm({
  form: 'simple'
})(MyForm);

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(reduxFormSignin);
