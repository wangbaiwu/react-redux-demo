import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from './app'
import { logout } from './auth.redux'

function Two(){
	return <h2>Two</h2>
}

function Three(){
	return <h2>Three</h2>
}
@connect(
	state=>state.auth,
	{logout}
)
class Dashboard extends React.Component{
	render(){
		const match=this.props.match
		const redirectToLogin=<Redirect to='/login'></Redirect>
		const app=(
			<div>
				<h1>demo</h1>
				{ this.props.isAuth ? <button onClick={this.props.logout} >Logout</button> : null }
				<ul>
					<li>
						<Link to={`${match.url}/`}>one11</Link>
					</li>
					<li>
						<Link to={`${match.url}/two`}>two11</Link>
					</li>
					<li>
						<Link to={`${match.url}/three`}>three</Link>
					</li>
				</ul>
				<Route path={`${match.url}/`} exact component={App}></Route>
				<Route path={`${match.url}/two`} component={Two}></Route>
				<Route path={`${match.url}/three`} component={Three}></Route>

		 	</div>
		)
		return this.props.isAuth ? app : redirectToLogin
	}
}

export default Dashboard









