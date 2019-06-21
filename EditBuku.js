import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight,StyleSheet,ImageBackground } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class EditBuku extends Component {
    static navigationOptions = {
        header: null
    }
  constructor(props) {
    super(props)

    this.state = {
        buku_kode : this.props.navigation.state.params.buku_kode,
        buku_judul : this.props.navigation.state.params.buku_judul,
        penulis :this.props.navigation.state.params.penulis,
        penerbit : this.props.navigation.state.params.penerbit,
        sinopsis : this.props.navigation.state.params.sinopsis,
        sampul : this.props.navigation.state.params.sampul,
        kategori_id : this.props.navigation.state.params.kategori_id,
        jumlah : this.props.navigation.state.params.jumlah,
    }
  }


  _simpan = () => {
    axios.post('https://dre1091.000webhostapp.com/Apiuas/updateBuku.php', {
        buku_kode : this.state.buku_kode,
        buku_judul : this.state.buku_judul,
        penulis : this.state.penulis,
        penerbit : this.state.penerbit,
        sinopsis : this.state.sinopsis,
        sampul : this.state.sampul,
        kategori_id : this.state.kategori_id,
        jumlah : this.state.jumlah
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
                  <Text style={styles.txtHeader}> Edit {this.state.buku_judul} </Text>
                </View>
              </View>
        <View style={styles.Body}>
        <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Kode Buku : </Text>
            </View> 
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              
              onChangeText={(buku_kode) => this.setState({ buku_kode })}
              value={this.state.buku_kode}
            />
          </View>

          <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Judul Buku : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              
              onChangeText={(buku_judul) => this.setState({ buku_judul })}
              value={this.state.buku_judul}
            />
          </View>

          <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Penulis : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              
              onChangeText={(penulis) => this.setState({ penulis })}
              value={this.state.penulis}
            />
          </View>

          <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Penerbit : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}

              onChangeText={(penerbit) => this.setState({ penerbit })}
              value={this.state.penerbit}

            />
          </View>

          <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Jumlah : </Text>
            </View>
            <TextInput
              keyboardType = 'numeric'
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(jumlah) => this.setState({ jumlah })}
              value={this.state.jumlah}

            />
          </View>

          <View style={styles.box2}>
            <View style={{ width: '30%', marginTop: 5 }}>
              <Text>Sinopsis      : </Text>
            </View>
            <Textarea
              containerStyle={{
                height: 170,
                padding: 5, borderWidth: 1, borderColor: 'gray', width: '70%', borderRadius: 5
              }}
              style={{
                textAlignVertical: 'top', height: 160
              }}
             
              onChangeText={(sinopsis) => this.setState({ sinopsis })}
              value={this.state.sinopsis}
              maxLength={120}
              placeholder={'Input Keterangan ...'}  
              placeholderTextColor={'#919191'}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <View style={styles.box1}>
            <View style={{ width: '30%' }}>
              <Text>Sampul : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}

              onChangeText={(sampul) => this.setState({ sampul })}
              value={this.state.sampul}

            />
          </View>

          
        <View style={styles.vFooter}>
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Detail',{kategori_id: this.state.kategori_id})
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>Edit Buku</Text>
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
        paddingTop: "1%"
    },
    box2: { 
        flexDirection: 'row', 
        marginHorizontal: '5%', 
        marginBottom: 20 ,
        paddingBottom: "1%"
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
