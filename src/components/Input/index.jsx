import React from 'react'
import { connect } from 'react-redux';
// import num from '../Redux/actions'
// import NUMBERS from '../Redux/types'
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
	//console.log(state)
	return {
		value: state.value
	};
};

const mapDispatchToProps = dispatch =>{
	console.log(dispatch)
	return {
		// num: bindActionCreators(num, dispatch)
	}
}

const Input = (props) => {
	
	return (
		<>
			<div>
				<label htmlFor="inp">
					<input id="inp" type="number" />
				</label>
				<button>Click</button>
				<p>{props.value}</p>
			</div>
		</>

	)
}



export default connect(mapStateToProps, mapDispatchToProps)(Input)