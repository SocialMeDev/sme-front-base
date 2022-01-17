const reducer = (state, action) => {
  switch (action.type) {
    case 'StopLoading':
      return {
        ...state,
        loadingInstitution: false,
      }
    case 'Loading':
      return {
        ...state,
        loadingInstitution: true,
      }
    case 'SetInstitution':
      return {
        ...state,
        institution: action.payload,
      }

    default:
      return state
  }
}

export default reducer
