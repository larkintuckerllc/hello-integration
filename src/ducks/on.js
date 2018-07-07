// ACTIONS
export const TOGGLE = 'TOGGLE';
export const toggleOn = () => ({
  type: TOGGLE,
});

// REDUCER
export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !state;
    default:
      return state;
  }
};

// SELECTOR
export const getOn = state => state.on;
