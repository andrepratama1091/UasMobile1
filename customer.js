import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,ImageBackground} from "react-native";
import Header from "./Header";
 
const axios = require('axios');
class customer extends Component {
  static navigationOptions = {
    header: null
}

    constructor(props) {
        super(props);
        this.state = {
          tgl_pinjam: '',
          tgl_kembali: '',
          buku_kode: '',
          id_cus: '',
          id_pegawai: '',

      }
  }
  handleSubmit = event => {
    axios.post('http://dre1091.000webhostapp.com/Apiuas/tambahBuku.php', {
        tgl_pinjam: this.state.tgl_pinjam,
        tgl_kembali: this.state.tgl_kembali,
        buku_kode: this.state.buku_kode,
        id_cus: this.state.id_cus,
        id_pegawai: this.state.id_pegawai
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

  render() {   
      return (
        <ImageBackground source={require("./images/B2.jpg")} style={{width: '100%', height: '100%' }}>
        <ScrollView>
        <View style={styles.vMain}>

            <View style={styles.judul}>
                <View style={styles.txtHeader}>
                  <Text style={styles.txtHeader}> Kategori Buku </Text>
                </View>
              </View>
            <View style={styles.vHeader}>
              
              <View style={styles.vHeader2}>
               
                  <View style={styles.textBox1}>
                    <Text>Tanggal pinjam</Text>       
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={tgl_pinjam => this.setState({ tgl_pinjam })}
                  />
                </View>

                <View style={styles.vHeader2}>
                  <View style={styles.textBox1}>
                      <Text>Tanggal Pengembalian</Text> 
                      </View>
                    <TextInput
                          style={styles.txtBox1}
                          onChangeText={tgl_kembali => this.setState({ tgl_kembali })}
                        />
                </View>
                  
            </View> 
            <View style={styles.vBody}>
            <View style={styles.box1}>
                  <Text>ID Customer</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={buku_kode => this.setState({ buku_kode })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Nama </Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_cus => this.setState({ id_cus })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Alamat</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_pegawai => this.setState({ id_pegawai })}
                    />
                </View>

                <View style={styles.box1}>
                  <Text>No Hp</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_pegawai => this.setState({ id_pegawai })}
                    />
                </View>

                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit()
                            }}
                  >
                  <Text style={styles.txtButton}>Add Data customer</Text>
                  </TouchableHighlight>
                </View> 

            </View>
            <View style={styles.vFooter}>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.props.navigation.navigate('ViewListcustomer')   
                            }
                  >
                  <Text style={styles.txtButton}>Daftar customer</Text>
                  </TouchableHighlight>
                </View>
            </View>  
        </View>
        </ScrollView>
        </ImageBackground>

        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
        flex: 1,
 
    },
    vFooter :{
      height : '15%',
   
      alignItems : 'center',
      paddingBottom : '3%',
    },
    txtHeader: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#919191',
  
    },
    judul :{
      height : '9%',
      backgroundColor : '#fff',
    },
    
    vBody :{
      flex : 3,
      alignItems : 'center',
      justifyContent : 'center',
      marginLeft : '5%',
      marginRight : '5%',
      
    },
    txtHeader: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    
    },
    header: {
      height:70,
      justifyContent:'center',
      alignItems:'center'
    },
    vHeader2 :{
      flex : 1,
      flexDirection : 'column',
      alignItems : 'center',
      justifyContent : 'center',
    },
    vHeader: {
       flex: 1,
        alignItems: 'center',
        flexDirection : 'row',
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems : 'center',
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#919191',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textBox1:{
        color: 'white',
        fontSize: 15,    
    },
    box2: {
        flex: 0.8,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtButton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    },
    vButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#919191',
        borderRadius: 5,
        padding:20,
        margin:10,
        width: '100%',
        height: 50, 
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default customer;