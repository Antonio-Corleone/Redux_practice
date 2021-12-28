

const stateDefault = {
  datCuoc: true,
  mangXucXac: [
    { ma: 1, hinhAnh: './img/BaiTapGameXucXac/1.png', },
    { ma: 1, hinhAnh: './img/BaiTapGameXucXac/1.png', },
    { ma: 1, hinhAnh: './img/BaiTapGameXucXac/1.png', }
  ],
  soLanThang: 0,
  soLanChoi: 0
}

const GameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'DAT_CUOC': {
      state.datCuoc = action.datCuoc
      return { ...state }
    }
    case 'CHOI_GAME': {
      const mangXucXacNgaunhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        const xucXacNgauNhien = {
          ma: soNgauNhien, hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`
        };
        mangXucXacNgaunhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgaunhien;
      let tongDiem = mangXucXacNgaunhien.reduce((tong, xucXac) => {
        return tong += xucXac.ma;
      }, 0)
      if ((state.datCuoc && tongDiem <= 11) || (!state.datCuoc && tongDiem > 11)) {
        state.soLanThang += 1;
      }
      state.soLanChoi += 1;
      return { ...state }
    }

    default: return { ...state }
  }
}

export default GameXucXacReducer