import {GET_QUESTION, CREATE_QUESTION, UPDATE_QUESTION} from '../actions/constType'
const initialState = {
  loading: true,
  questions: [
    {
      id: 1,
      userId: '12hg23',
      questionTag: {
        optionA: 'Sing',
        optionB: 'Dance',
      },
      answers:[1],
      creator: null
    },
    {
      id: 2,
      userId: '12hg23',
      questionTag: {
        optionA: 'Smoking',
        optionB: 'Drinking',
      },
      answers:[2],
      creator: 1
    },
    {
      id: 3,
      userId: '12hg23',
      questionTag: {
        optionA: 'Ghana Jollof Rice',
        optionB: 'Naija Jollof Rice',
      },
      answers:[3],
      creator: 2
    },
    {
      id: 4,
      userId: '12hg23',
      questionTag: {
        optionA: 'Sing',
        optionB: 'Dance',
      },
      answers:[1],
      creator: 3
    },
    {
      id: 5,
      userId: '12hg23',
      questionTag: {
        optionA: 'Big Wedding',
        optionB: 'Small Wedding',
      },
      answers:[3],
      creator: 1
    },
    {
      id: 6,
      userId: '12hg23',
      questionTag: {
        optionA: 'Play outdoor',
        optionB: 'Play indoor',
      },
      answers:[3],
      creator: 1
    },
  ]
}

export default function(state=initialState, action){
  const { type, payload } = action
  switch ( type ) {
      case GET_QUESTION:
      return {
          ...state,
          // questions: state.users.filter(user=> payload === user.id),
          loading: false,
      };
      case CREATE_QUESTION :
      return {
          ...state,
          questions: [{
            id: state.questions.length + 1,
              userId: '12hg23',
              questionTag: payload.question,
              answers:[],
              creator: payload.userId
            }, ...state.questions],
          loading: false,
      }
      case UPDATE_QUESTION :
      const updateQuestion = state.questions.find(q=> q.id === payload.questValue.questID)
      return {
          ...state,
          questions: [...state.questions.filter(q=> q.id !== payload.questValue.questID), {...updateQuestion, answers: [payload.userID, ...updateQuestion.answers]}],
          loading: false,
      }
      default:
          return state
  }
}