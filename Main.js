import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet, Image, TouchableHighlight,ImageBackground} from "react-native"; 
import Header from "./Header";

class Main extends Component {
    static navigationOptions = {
        header: null
    }
    render() {     
        return (
            <ImageBackground source={require("./images/Background.jpg")} style={{width: '100%', height: '100%' }}>
            <View style={styles.vHeader}>                
                <View style={styles.vBody}>
                    <View style={styles.profile}>
                        <Image 
                            style={styles.gambar}
                            source={require('./images/profile.png')}
                            />
                    </View>
                    <View style={styles.profile1}>
                        <Text style={styles.txtProfile}>Andre Pratama</Text>
                    </View>
                </View>
                
                <View style={styles.vBody1}>
                
                
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Kategori') }>
                        <Text style={styles.txtBox2}>Buku</Text>
                    </TouchableHighlight>
                
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('ViewListPeminjaman') }>
                        <Text style={styles.txtBox2}>Peminjaman</Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Pengembalian') }>
                        <Text style={styles.txtBox2}>Pengembalian</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('pelanggan') }>
                        <Text style={styles.txtBox2}>Pelanggan</Text>
                    </TouchableHighlight>
                </View>
            </View> 
                </View>
             </ImageBackground>   
        );   
    } 
}   

   const styles = StyleSheet.create({
    contaier: {

    
    },
    profile: {
        flex : 1,
        paddingLeft : 15,        

    },
    profile1: {
        paddingTop : 5,
        flex : 9
    },

    vHeader: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',

    },
    
    vBody: {
        flex: 1,
        marginTop : '3%',
     
        flexDirection : 'row',
    },
    vBodyIcon: {
        flex: 1,
        marginTop : '3%',
        flexDirection : 'row',
    },

    textProfile: {
        color: '#919191',
        alignItems: 'center',
        fontSize: 18,
        marginTop : 10,
    },

    gambar:{
        width : 30,
        height : 30,
    },
    vBody1: {
        flex: 2,
   
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : '22%',

    },
    box: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.2,
        margin: '0.5%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
  
    txtBox2: {
        color: '#919191',
        alignItems: 'center',
        fontSize: 18,

    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center', 
      },
    textBox2:{
        color: '#c9c9c9',
        fontSize: 15,    
      },
    BoxStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding:20,
      margin:10,
      width: '80%',
      height: 50, 
    }
});

export default Main;