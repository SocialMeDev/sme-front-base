const reducer = (state, action) => {
  switch (action.type) {
    case 'NetworkProblem':
      return {
        ...state,
        loadingInterface: true,
        networkProblem: true,
      }
    case 'StopLoadingInterface':
      return {
        ...state,
        loadingInterface: false,
      }
  }
}

export default reducer
