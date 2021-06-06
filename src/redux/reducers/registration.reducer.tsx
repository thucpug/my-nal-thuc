import { userConstants } from '../../constant'

export function registration(state = {}, action: { type: any }) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return { registering: true }
    case userConstants.REGISTER_SUCCESS:
      return {}
    case userConstants.REGISTER_FAILURE:
      return {}
    default:
      return state
  }
}
