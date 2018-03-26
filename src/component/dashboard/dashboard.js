import React from 'react'
import { connect } from 'react-redux'


function Boss(){
	return <h2>Boss page</h2>
}

function Genius(){
	return <h2>Genius page</h2>
}

@connect(
	state=>state
)
class Dashboard extends React.Component{
	
	
	render(){
		const user=this.props.user
		const navList=[
			{
				path:'/boss',
				text:'genius',
				icon:'boss',
				title:'genius list',
				component:Boss,
				hide:user.type=='genius'
			},
			{
				path:'/genius',
				text:'boss',
				icon:'job',
				title:'boss list',
				component:Genius,
				hide:user.type=='boss'
			}
		]
		return (
			<div>
				<h2>header</h2>
				<h2>footer</h2>
			</div>
		)
	}
}

export default Dashboard









