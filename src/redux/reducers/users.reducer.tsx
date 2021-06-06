import { userConstants } from '../../constant'

export function users(state = {}, action: { type: any; users: any; error: any; id: any }) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
      }
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users,
      }
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error,
      }

    default:
      return state
  }
}
