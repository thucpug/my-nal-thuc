import { userConstants } from '../../constant'
var initialState = []
export function users(state = [], action: { type: any; users: any; error: any; id: any }) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return [...state]
    case userConstants.GETALL_SUCCESS:
      state = action.users
      return [...state]
    // return {
    //   items: [...action.users],
    // }
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
      }

    default:
      return state
  }
}
