import { DAT_GHE, HUY_GHE } from '../types/BookingTicketTypes'

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe
  }
}

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe
  }
}
/**
 * dispatch(datGheAction(ghe))
 * ==> action = {
 *        type: DAT_GHE,
 *        ghe: {
 *          soGhe: 'A1',
 *          gia: 75000,
 *          daDat: false
 *        }
 *     }
 */