import React from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './auth.redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

@connect(
	state=>state.auth,
	{login, getUserData}
)
class Auth extends React.Component{
	componentDidMount(){
		this.props.getUserData()
	}
	render(){
		return (
			<div>
				{ this.props.isAuth ? <Redirect to='/dashboard' /> : null }
				<h2>name {this.props.user}, age {this.props.age}</h2>
				<button onClick={this.props.login}>login</button>
			</div>
			

		)
	}
}

export default Auth













