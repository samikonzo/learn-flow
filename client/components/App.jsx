/* @flow */

import React from 'react'

class App extends React.Component{
	render(){
		return(
			<div> 
				<Test num={2}/>
				<Test num={"2"}/>
			</div>
		)
	}
}


let Test = (props) => {
	return (
		<div>{props.num}</div>
	)
}












export default App


