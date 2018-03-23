import React from 'react';
import {Button, List} from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component{
  render(){
    const boss='app'
    return (
      <div>
        <h2>hello {boss} </h2>
        <Foo cc='a' />
        <Bar cc='b'/>
      </div>
    )
  }
}

function Bar(props){
  return <h2>a {props.cc}, run </h2>
}


class Foo extends React.Component{
  constructor(props)
  {
    super(props)
    this.state={
      solders:['d','e','f']
    }
    //this.addSolder=this.addSolder.bind(this)
  }

  componentWillMount(){
    console.log('component will mount')
  }
  componentDidMount()
  {
    console.log('component did mount')
  }

  addSolder=()=>{
    console.log('hello add solder')
    this.setState({
      solders:[...this.state.solders,'new solder'+Math.random()]
    })
  }

  render(){
    console.log('component is loading...')
    return (
      <div>
        <h2>hello {this.props.cc}</h2>
        <Button type='primary' onClick={this.addSolder}>add new member</Button>
        <List renderHeader={()=>'solder list'}>
          {
            this.state.solders.map(v=>{

              return <List.Item key={v}>
              {v}
          </List.Item>


            })
          }

          
        </List>
        <ul>
          
        </ul>
      </div>
    )
  }
}

export default App;