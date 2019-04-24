const defaultState={
	focused:false
}
export default (state=defaultState,action)=>{
	if (action.type === 'onfocus') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.focused=true;
			  return newState
	};
	if (action.type === 'onblur') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.focused=false;
			  return newState
	};
  return state;
}