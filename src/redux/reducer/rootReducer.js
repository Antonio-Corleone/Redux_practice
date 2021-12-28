import { combineReducers } from 'redux';

import BaiTapOanTuXiReducer from './BTOanTuXiReducer';
import BookingTicketReducer from './BookingTicketReducer';
import GameXucXacReducer from './BaiTapXucXacReducer'

const rootReducer = combineReducers({
  BaiTapOanTuXiReducer,
  BookingTicketReducer,
  GameXucXacReducer
})

export default rootReducer;