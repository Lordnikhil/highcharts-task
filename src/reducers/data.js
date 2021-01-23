/* eslint-disable default-case */
const chartDataReducer = (state = [], action)=>{
    switch(action.type){
        case "SET":
            return state = action.data
            
        default:
            return state
    }
}

export default chartDataReducer;