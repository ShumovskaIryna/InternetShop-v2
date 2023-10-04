import {ADD_NAME} from '../../constants/actions'
const initialState = {
    value: '',
  }

const handleName = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
        return{
            ...state,
            value: action.payload
          }
      default:
        return state;
  }
};

export default handleName;