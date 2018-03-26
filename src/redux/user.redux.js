import axios from 'axios'
import {getRedirectPath} from '../util'

const AUTH_SUCCESS='AUTH_SUCCESS'
const ERROR_MSG='ERROR_MSG'
const LOAD_DATA='LOAD_DATA'

const initState={
	redirectTo:'',
	msg:'',
	user:'',
	type:''
}

//reducer
//
export function user(state=initState,action){
	switch(action.type){
		case AUTH_SUCCESS:
			return {...state,msg:'', redirectTo:getRedirectPath(action.payload), ...action.payload}		
		case LOAD_DATA:
			return {...state, ...action.payload }
		case ERROR_MSG:
			return {...state, isAuth:false, msg:action.msg}
		default:
			return state
	}
	
}

function authSuccess(obj){
	const {pwd,...data}=obj
	return {type:AUTH_SUCCESS, payload:data }
}

function errMsg(msg){
	return {msg, type:ERROR_MSG}	//把 msg放前面 是约定俗成的规范
}

export function loadData(userInfo){
	return { type:LOAD_DATA, payload:userInfo }
}

export function update(data){
	return dispatch=>{
		axios.post('/user/update',data)
			.then(res=>{
				if(res.status==200 && res.data.code==0){
					dispatch(authSuccess(res.data.data))
				}else{
					dispatch(errMsg(res.data.msg))
				}
			})
	}
}

export function login({user,pwd}){
	if(!user||!pwd){
		return errMsg('user and pwd must enterd')
	}
	return dispatch=>{
		axios.post('/user/login',{user,pwd})
		.then(res=>{
			if(res.status==200 && res.data.code==0){
				dispatch(authSuccess(res.data.data))
			}else{
				dispatch(errMsg(res.data.msg))
			}	
		})
	}

}

export function register({user,pwd,repwd,type}){
	if(!user||!pwd||!type){
		return errMsg('user and passwod must entered')
	}
	if(pwd != repwd)	{
		return errMsg('repwd does not match pwd')
	}
	return dispatch=>{
		axios.post('/user/register',{user,pwd,type})
		.then(res=>{
			if(res.status==200 && res.data.code==0){
				dispatch(authSuccess({user,pwd,type}))
			}else{
				dispatch(errMsg(res.data.msg))
			}	
		})
	}
	
}




