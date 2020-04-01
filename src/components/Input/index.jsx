import React, { useState } from 'react'
import { connect } from 'react-redux';
import num from '../Redux/actions'
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
	//console.log(state)
	return {
		value: state.value
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	num: num
}, dispatch)

const Input = (props) => {
	console.log(props)

	const [number,setNumber]= useState('')

	const inputHandler = (event) => {
		setNumber(event.target.value)
	}

	const onclickHandler = () => {
		props.num(number)
	}

	return (
		<>
			<div>
				<label htmlFor="inp">
					<input id="inp" type="number" onChange={inputHandler} />
				</label>
				<button onClick={onclickHandler}>Click</button>
				<p>{props.value}</p>
			</div>
		</>

	)
}



export default connect(mapStateToProps, mapDispatchToProps)(Input)