import createDataContext from '../createDataContext';

const RESET_RESULTS = 'reset';
const CHANGE_DICES_NUMBER = 'change_dices_number';
const CHANGE_DICES_SIDES = 'change_dice_sides';
const UPDATE_HIGHEST_RESULT = 'update_highest_result';
const UPDATE_CURRENT_RESULT = 'update_current_result';
const ROLL = 'roll';

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_RESULTS:
      return { ...state, currentScore: 0, rolls: 0, highestResult: 0 };
    case CHANGE_DICES_NUMBER:
      return {
        ...state,
        numDices: state.numDices + action.payload,
        highestResult: 0,
        rolls: 0,
      };
    case CHANGE_DICES_SIDES:
      return {
        ...state,
        sides: state.sides + action.payload,
        highestResult: 0,
        rolls: 0,
      };
    case UPDATE_HIGHEST_RESULT:
      return { ...state, highestResult: action.payload };
    case ROLL:
      return { ...state, rolls: state.rolls + 1 };
    case UPDATE_CURRENT_RESULT:
      return { ...state, currentScore: action.payload };
    default:
      return state;
  }
};

const changeDicesNumber = (dispatch) => {
  return (newNumber) =>
    dispatch({ type: CHANGE_DICES_NUMBER, payload: newNumber });
};
const changeDicesSides = (dispatch) => {
  return (newNumber) =>
    dispatch({ type: CHANGE_DICES_SIDES, payload: newNumber });
};
const updateHighestResult = (dispatch) => {
  return (newHighScore) =>
    dispatch({ type: UPDATE_HIGHEST_RESULT, payload: newHighScore });
};
const incrementRolls = (dispatch) => {
  return () => dispatch({ type: ROLL });
};
const updateCurrentScore = (dispatch) => {
  return (currentScore) =>
    dispatch({ type: UPDATE_CURRENT_RESULT, payload: currentScore });
};
const resetResults = (dispatch) => {
  return () => dispatch({ type: RESET_RESULTS });
};

export const { Context, Provider } = createDataContext(
  reducer,
  {
    changeDicesNumber,
    changeDicesSides,
    updateHighestResult,
    incrementRolls,
    updateCurrentScore,
    resetResults,
  },
  {
    // dices:[],
    currentScore: 0,
    rolls: 0,
    highestResult: 0,
    numDices: 4,
    sides: 6,
  }
);
