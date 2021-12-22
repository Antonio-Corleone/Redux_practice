const stateDefault = {
  mangDatCuoc: [
    {
      id: 'bao',
      hinhAnh: './img/BT_OanTuXi/bao.png',
      datCuoc: false,
    },
    {
      id: 'bua',
      hinhAnh: './img/BT_OanTuXi/bua.png',
      datCuoc: true,
    },
    {
      id: 'keo',
      hinhAnh: './img/BT_OanTuXi/keo.png',
      datCuoc: false,
    },
  ],
  ketQua: "I'm love you 3000 !!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    id: 'keo',
    hinhAnh: './img/BT_OanTuXi/bao.png',
    datCuoc: false,
  }
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {

  switch (action.type) {
    case "CHON_BAO_BUA_KEO": {
      let mangDatCuocNew = [...state.mangDatCuoc]
      mangDatCuocNew = mangDatCuocNew.map(item => {
        if (item.id === action.maCuoc) {
          return { ...item, datCuoc: true }
        }
        return { ...item, datCuoc: false }
      })
      state.mangDatCuoc = mangDatCuocNew;
      return { ...state }
    }
    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state }
    }
    case "END_GAME": {
      let player = state.mangDatCuoc.find(item => item.datCuoc === true);
      let computer = state.computer;

      switch (player.id) {
        case 'keo': {
          if (computer.id === 'bua') {
            state.ketQua = 'Thua !!!';
          } else if (computer.id === 'keo') {
            state.ketQua = 'Hòa nhau !!!';
          } else {
            state.ketQua = "I'm Iron man, I love you 3000 !!!";
            state.soBanThang += 1;
          }
          break;
        }
        case 'bua': {
          if (computer.id === 'bao') {
            state.ketQua = 'Thua !!!';
          } else if (computer.id === 'bua') {
            state.ketQua = 'Hòa nhau !!!';
          } else {
            state.ketQua = "I'm Iron man, I love you 3000 !!!";
            state.soBanThang += 1;
          }
          break;
        }
        case 'bao': {
          if (computer.id === 'keo') {
            state.ketQua = 'Thua !!!';
          } else if (computer.id === 'bao') {
            state.ketQua = 'Hòa nhau !!!';
          } else {
            state.ketQua = "I'm Iron man, I love you 3000 !!!";
            state.soBanThang += 1;
          }
          break;
        }
        default: {
          state.ketQua = "I'm Iron man, I love you 3000 !!!";
          state.soBanThang += 1;
        }
      }
      state.soBanChoi += 1;
      return { ...state }
    }

    default: return { ...state }
  }
}
export default BaiTapOanTuXiReducer