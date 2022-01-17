const reducer = (state, action) => {
  switch (action.type) {
    case 'Loading':
      return {
        ...state,
        endedBrowserLogic: false,
      }
    case 'StopLoading':
      return {
        ...state,
        endedBrowserLogic: true,
      }

    default:
      return state
  }
}

export default reducer
