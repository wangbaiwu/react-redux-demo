const LOGIN='LOGIN'
const LOGOUT='LOGOUT'

//REDUCER
export function auth(state={isAuth:false,user:'lee'},action){
	switch(action.type){
		case LOGIN:
			return {...state,isAuth:true}
		case LOGOUT:
			return {...state,isAuth:false}
		default:
			return state
	}
}

//ACTION CREATOR
export function login(){
	return {type:LOGIN}
}
export function logout(){
	return {type:LOGOUT}
}







