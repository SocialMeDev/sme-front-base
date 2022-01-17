const reducer = (state, action) => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        endedPermissionLogic: false,
      }
    case 'StopLoading':
      return {
        ...state,
        endedPermissionLogic: true,
      }

    case 'SetPermissions':
      return {
        ...state,
        permissions: action.payload,
      }
    case 'ResetPermissionStates':
      return {
        ...state,
        permissions: null,
        endedPermissionLogic: true,
      }
    default:
      return state
  }
}

export default reducer
