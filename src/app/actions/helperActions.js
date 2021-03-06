const ACTIONS = {
  CHANGE_ROUTE: 'CHANGE_ROUTE',
  SET_ADD_EVENT_INDICATOR: 'SET_ADD_EVENT_INDICATOR',
  SET_DELETE_EVENT: 'SET_DELETE_EVENT',
}

export default (() => {

  function changeRoute(route) {
    return { type: ACTIONS.CHANGE_ROUTE, payload: route }
  }

  function setAddEventIndicator(indicator) {
    return { type: ACTIONS.SET_ADD_EVENT_INDICATOR, payload: indicator }
  }

  function setDeleteEvent(indicator, eventId) {
    return { 
      type: ACTIONS.SET_DELETE_EVENT,
      payload: { indicator, eventId }
    }
  }
  
  return {
    changeRoute,
    setAddEventIndicator,
    setDeleteEvent
  }
})()
