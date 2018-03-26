import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component{
	static propTypes={
		selectAvatar:PropTypes.func.isRequired
	}

	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		const avatarList='a,b'
							.split(',')
							.map(v=>({
								icon:require(`../img/${v}.png`),
								text:v
							}))
		const gridHeader=this.state.text
							? (<div>
									<span>choosed avatar</span>
									<img style={{width:20}} src={this.state.icon} alt="" />
								</div>)
							:  'pls choose avatar'

		return (
			<div>
				<List renderHeader={()=>gridHeader}>
					<Grid 
						data={avatarList} 
						columNuber={4} 
						onClick={elm=>{
							this.setState(elm)
							this.props.selectAvatar(elm.text)
						}}

					/>
				</List>
			</div>
			
		)
	}
}


export default AvatarSelector





