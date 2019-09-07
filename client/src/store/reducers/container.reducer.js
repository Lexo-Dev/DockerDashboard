export default (state = null, action) => {

  switch (action.type) {

    case 'GENERIC_CONTAINER':
      return {
        ...state,
        ...action.payload
      }

    case 'UPDATE_CONTAINER':
      return {
        ...state,
        ...{
          containers: state.containers.map(c => {
            if(c.shortId == action.payload.containerId) {
              return {
                ...c,
                ...action.payload.data
              }
            } else {
              return c
            }
          })
        }
      }

    default:
      return state

  }
}