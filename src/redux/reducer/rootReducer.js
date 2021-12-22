import { combineReducers } from 'redux';

import BaiTapOanTuXiReducer from './BTOanTuXiReducer';
import BookingTicketReducer from './BookingTicketReducer';

const rootReducer = combineReducers({
  BaiTapOanTuXiReducer,
  BookingTicketReducer,
})

export default rootReducer;