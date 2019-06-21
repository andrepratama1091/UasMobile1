import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,ImageBackground} from "react-native";
import Header from "./Header";
 
const axios = require('axios');
class AddBuku extends Component {
  static navigationOptions = {
    header: null
}
    constructor(props) {
        super(props);
        this.state = {
          buku_kode : '',
          buku_judul : '',
          penulis :'',
          penerbit : '',
          sinopsis : '',
          sampul : '',
          kategori_id : this.props.navigation.state.params.kategori_id,
          jumlah : '',
      }
  }
  handleSubmit = () => {
    axios.post('http://dre1091.000webhostapp.com/Apiuas/tambahBuku.php', {
        buku_kode : this.state.buku_kode,
        buku_judul : this.state.buku_judul,
        penulis : this.state.penulis,
        penerbit : this.state.penerbit,
        sinopsis : this.state.sinopsis,
        sampul : this.state.sampul,
        kategori_id : this.state.kategori_id,
        jumlah : this.state.jumlah,
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
        
        <View style={styles.vMain}>

            <View style={styles.judul}>
                <View style={styles.txtHeader}>
                  <Text style={styles.txtHeader}> Tambah Buku </Text>
                </View>
              </View>
            <ScrollView>
            <View style={styles.vBody}>
                <View style={styles.box1}>
                <Text>Kode Buku</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={buku_kode => this.setState({ buku_kode })}
                    />
                </View>

                <View style={styles.box1}>
                <Text>Judul Buku</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={buku_judul => this.setState({ buku_judul })}
                    />
                </View>
                
                <View style={styles.box1}>
                  <Text>Penulis</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={penulis => this.setState({ penulis })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Penerbit</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={penerbit => this.setState({ penerbit })}
                    />
                </View>

                <View style={styles.box1}>
                  <Text>Sampul</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={sampul => this.setState({ sampul })}
                    />
                </View>

                <View style={styles.box1}>
                  <Text>Sinopsis</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={sinopsis => this.setState({ sinopsis })}
                    />
                </View>

                <View style={styles.box1}>
                  <Text>Jumlah</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={jumlah => this.setState({ jumlah })}
                    />
                </View>



                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit()
                                this.props.navigation.navigate('Detail',{
                                  kategori_id: this.state.kategori_id
                                })
                            }}
                  >
                  <Text style={styles.txtButton}>Edit Buku</Text>
                  </TouchableHighlight>
                </View> 
            </View>
            </ScrollView>
            <View style={styles.vFooter}>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.props.navigation.navigate('Kategori')   
                            }
                  >
                  <Text style={styles.txtButton}>Daftar Kategori Buku</Text>
                  </TouchableHighlight>
                </View>

                
            </View>  
           
        </View>
   
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
        width: '60%',
        height: '90%',
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
export default AddBuku;