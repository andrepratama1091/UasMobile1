import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight,StyleSheet,ImageBackground } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class AddKategori extends Component {
    static navigationOptions = {
        header: null
    }
  constructor(props) {
    super(props)

    this.state = {
      kategori_id: "",
      kategori_nama: "",
      keterangan: "",
      nama: "andre"
    }
  }

  _simpan = () => {
    axios.post('https://dre1091.000webhostapp.com/Apiuas/tambahKategori.php', {
      kategori_nama: this.state.kategori_nama,
      keterangan: this.state.keterangan
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
      <View style={styles.container}>
      <View style={styles.judul}>
                <View style={styles.txtHeader}>
                  <Text style={styles.txtHeader}> Tambah Kategori Buku </Text>
                </View>
              </View>
        <View style={styles.Body}>
        
          <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Nama Kategori : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(kategori_nama) => this.setState({ kategori_nama })}
              value={this.state.kategori_nama}
            />
          </View>
          <View style={styles.box2}>
            <View style={{ width: '30%', marginTop: 5 }}>
              <Text>Keterangan       : </Text>
            </View>
            <Textarea
              containerStyle={{
                height: 170,
                padding: 5, borderWidth: 1, borderColor: 'gray', width: '70%', borderRadius: 5
              }}
              style={{
                textAlignVertical: 'top', height: 160
              }}
             
              onChangeText={(keterangan) => this.setState({ keterangan })}
              defaultValue={this.state.keterangan}
              
              maxLength={120}
              placeholder={'Input Keterangan ...'}  
              placeholderTextColor={'#919191'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        <View style={styles.vFooter}>
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Kategori')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>Tambah Kategori</Text>
          </TouchableHighlight>
          </View>
        </View>
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
    },
    judul :{
        height : '9%',
        backgroundColor : '#fff',
      },
    txtHeader: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color:'#919191',
  
    },
    header: {
      height:70,
      backgroundColor:'#fff',
      justifyContent:'center',
      alignItems:'center'
    },
    Body:{
        flex: 1, 
        marginVertical: 20
    },
    vFooter :{
        height : '15%',
      
        alignItems : 'center',
        paddingBottom : '3%',
      },
    box1 : { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginHorizontal: '5%',
        marginBottom: 5 ,
        paddingTop: "20%"
    },
    box2: { 
        flexDirection: 'row', 
        marginHorizontal: '5%', 
        marginBottom: 20 ,
        paddingBottom: "20%"
    },
    button : {
        width: '90%', 
        marginHorizontal: '5%', 
        borderRadius: 20, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#919191'
      }
  });
