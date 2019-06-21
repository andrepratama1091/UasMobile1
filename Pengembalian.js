import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,ImageBackground} from "react-native";
import Header from "./Header";
import DateTimePicker from "react-native-modal-datetime-picker";
 
const axios = require('axios');
class Pengembalian extends Component {
  static navigationOptions = {
    header: null
}
    constructor(props) {
        super(props);
        this.state = {
          tgl_kembali_akhir: '',
          id_pegawai: '',
          id_pinjam : '',

      }
  }
 
  handleSubmit = event => {
    axios.post('http://dre1091.000webhostapp.com/Apiuas/tambahKembali.php', {
        tgl_kembali_akhir: this.state.tgl_kembali_akhir,
        id_pegawai: this.state.id_pegawai,
        id_pinjam: this.state.id_pinjam,
        
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
showDateTimePicker = () => {
  this.setState({ isDateTimePickerVisible: true });
};

hideDateTimePicker = () => {
  this.setState({ isDateTimePickerVisible: false });
};

handleDatePicked = date => {
  console.log("A date has been picked: ", date);
  // alert(date.getMonth());
  var month = date.getMonth() + 1;
  this.setState({tgl_kembali_akhir: date.getFullYear() + '-' + month + '-' + date.getDate()})
  this.hideDateTimePicker();
};


  render() {
    // var tgl_kem = new Date(this.state.tgl_kembali);

    // alert(this.state.tgl_kembali);   
      return (
        <ImageBackground source={require("./images/B2.jpg")} style={{width: '100%', height: '100%' }}>
        <View style={styles.vMain}>

            <View style={styles.judul}>
                <View style={styles.txtHeader}>
                  <Text style={styles.txtHeader}> Pengembalian </Text>
                </View>
              </View>
            <View style={styles.vHeader}>
              
              <View style={styles.vHeader2}>
               
              <TouchableHighlight style={styles.textBox3}  onPress={this.showDateTimePicker} > 
              <Text>Tanggal Pengembalian</Text></TouchableHighlight>
              <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked}
                onCancel={this.hideDateTimePicker}
              />
              <TextInput
                style={styles.txtBox1}
                value = {this.state.tgl_kembali_akhir}
                onChangeText={tgl_kembali_akhir => this.setState({ tgl_kembali_akhir })}
              />
                </View>       
            </View> 
            <View style={styles.vBody}>
            <View style={styles.box1}>
                  <Text>ID peminjaman</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={id_pinjam => this.setState({ id_pinjam })}
                    />
                </View>
  
                <View style={styles.box1}>
                  <Text>ID pegawai</Text>
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
                                this.props.navigation.navigate('ViewPinjam',{
                                  id_pinjam: this.state.id_pinjam
                                })
                            }}
                  >
                  <Text style={styles.txtButton}>Add Data Pengembalian</Text>
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
    textBox3: {
      backgroundColor: '#919191',
      marginBottom : 10,
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
export default Pengembalian;