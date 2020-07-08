import {LOGIN, LOGOUT} from '../actions/constType'
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
    }
  ]
}

export default function(state=initialState, action){
  const { type, payload } = action
  switch ( type ) {
      case LOGIN:
      return {
          ...state,
          user: state.users.filter(user=> payload === user.id)[0],
          loading: false,
          isAuthenticated: true
      }
      case LOGOUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false
        }
      default:
          return state
  }
}