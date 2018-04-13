export default (state = 0, action) => {
  switch (action.type) {
    case 'SCROLL':
      return action.scroll;
    default:
      return state;
  }
};
