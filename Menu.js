import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Kategori from "./Kategori";
import Peminjaman from "./Peminjaman";
import Pengembalian from "./Pengembalian";
import Main from "./Main";
import ViewListPeminjaman from "./ViewListPeminjaman";
import ViewListPengembalian from "./ViewListPengembalian";
import DetailK from "./DetailK";
import Login from "./Login";
import AddBuku from "./AddBuku";
import AddKategori from "./AddKategori";
import EditKategori from "./EditKategori";
import EditBuku from "./EditBuku";
import ViewBuku from "./ViewBuku";
import ViewPinjam from "./ViewPinjam";
import pelanggan from "./pelanggan";
 
const AppContainer = createStackNavigator(
  {
    Main: {
      screen: Main
    },
    Kategori: { 
      screen: Kategori
    },
    pelanggan: { 
      screen: pelanggan
    }, 
    Peminjaman: {
      screen: Peminjaman
    },
    Pengembalian: {
      screen: Pengembalian
    },
    ViewPinjam: {
      screen: ViewPinjam
    },
    EditBuku: {
      screen: EditBuku
    },
    ViewBuku: {
      screen: ViewBuku
    },
    AddBuku: {
      screen: AddBuku
    },
    EditKategori: {
      screen: EditKategori
    },

    ViewListPeminjaman: {
      screen: ViewListPeminjaman
    },
    ViewListPengembalian: {
      screen: ViewListPengembalian
    },
    Detail: {
      screen: DetailK
    },
    Login: {
      screen: Login
    },
    AddKategori: {
      screen: AddKategori
    },


  },
  {
    initialRouteName: "Login"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
