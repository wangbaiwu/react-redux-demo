import React from 'react'
import { connect } from 'react-redux'
import { login } from './auth.redux'
import { Redirect } from 'react-router-dom'

@connect(
	state=>state.auth,
	{login}
)
class Auth extends React.Component{
	render(){
		return (
			<div>
				{ this.props.isAuth ? <Redirect to='/dashboard' /> : null }
				<h2>need login</h2>
				<button onClick={this.props.login}>login</button>
			</div>
			

		)
	}
}

export default Auth













