

const initialArtistState = {
  selected: {},
  list: []
};

const rootReducer = function (state = initialArtistState, action) {

  const newState = Object.assign({}, state);


  return newState;

}

export default rootReducer;
