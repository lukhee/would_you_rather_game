import {LOGIN, LOGOUT, CREATE_USER} from '../actions/constType'
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
  users: [
    {
      id: 1,
      name: 'Balogun Lukman',
    },
    {
      id: 2,
      name: 'Babablola Bakare',
    },
    {
      id: 3,
      name: 'Smith Joy',
    },
    {
      id: 4,
      name: 'Maryam Awari',
    },
  ]
}

export default function(state=initialState, action){
  const { type, payload } = action
  switch ( type ) {
      case LOGIN:
      return {
          ...state,
          user: payload,
          loading: false,
          isAuthenticated: true
      }
      case LOGOUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false
        }
      case CREATE_USER:
        return {
          ...state,
          user: payload,
          users: [{id: 5, ...payload},...state.users],
          isAuthenticated: true,
          loading: false
        }
      default:
          return state
  }
}