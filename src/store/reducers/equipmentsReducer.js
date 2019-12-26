import INITIAL_STATE from '../store/index';

export default function equipmentsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DELETE_EQUIPMENT':
      break;

    case 'EDIT_EQUIPMENT':
      break;

    default:
      return state;
  }
}
