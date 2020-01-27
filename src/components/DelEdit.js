import React from 'react'
import './DelEdit.css'
import {store} from '../store/store'


const DelEdit= (props) =>{
	// Receives all the info that was passed intp this State
	//the activeuserId in other to get its credentials
	//from her target that activeuserId's message number, text , blah blah blah 
	console.log(props.show)
	let DelEditClass = props.show ? 'DelEdit Open' : 'DelEdit Close'
	return(

		//send the number and text of the clicked message into a function
		<div className={DelEditClass}>
			 <button onClick={props.edit}>EDIT</button>
	 		 <button onClick={props.delete}>DELETE</button>
		</div>
	)
}



 


export default DelEdit