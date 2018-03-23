
const ADD_GUN='add gun'
const SUB_GUN='sub gun'


//reducer

export function counter(state=10,action){
	switch(action.type){
		case ADD_GUN:
			return state+1
		case SUB_GUN:
		    return state-1
		default:
			return state    	
	}
}

//action creator
export function addGun()
{
	return {type:ADD_GUN}
}

export function subGun()
{
	return {type:SUB_GUN}
}

export function addGunAsync()
{
	return dispatch=>{
		setTimeout(()=>{
			dispatch(addGun())
		},2000)
	}
}


















