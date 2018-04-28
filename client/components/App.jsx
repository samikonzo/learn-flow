/* @flow */

import React from 'react'
import './App.less'

const l = console.log

type Props = {};

class App extends React.Component<Props>{
	render(){
		return(
			<div> 
				<Test num={34}/>
			</div>
		)
	}
}


let Test = (props) => {

	let num: number = props.num || 22

	function square(n: number, s?: string): (number | string | void) {
		if(n > 20) return n
		return s
	}

	l(square(10, 'bebebe'))

	return (
		<div>{num}</div>
	)
}












export default App


