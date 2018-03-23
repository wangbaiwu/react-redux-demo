import React from 'react'
import {connect} from 'react-redux'
import {counter, addGun, subGun, addGunAsync} from './index.redux'

//App = connect(mapStatetoProps, actionCreators)(App) //标准的装饰器模式

@connect(
	// 你要state什么属性放到props里
	(state)=>({num:state.counter}),
	// 你要什么方法，放到props里，自动dispatch
	{counter, addGun, subGun, addGunAsync}
) 

class App extends React.Component{
	render(){
		return (
			<div>
				<h1>now have guns {this.props.num}</h1>
				<button onClick={this.props.addGun}>add gun</button>
				<button onClick={this.props.subGun}>sub gun</button>
				<button onClick={this.props.addGunAsync}>delay add gun</button>
			</div>
		)
		
	}
}


export default App













