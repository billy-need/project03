//filter reducer
const filterReducer = (state = [], action) => { //notice default state is now an array 
    switch(action.type){
      case 'SET_FILTER':
        return action.filter;
      default:
        return state;
    }
  }
  