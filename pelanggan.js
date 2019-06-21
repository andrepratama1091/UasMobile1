import React from 'react';
import {Modal, StyleSheet, Text, View, Button, ActivityIndicator,Image,ImageBackground,TextInput,TouchableHighlight} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Pilih Gambar',
    takePhotoButtonTitle:'Ambil Dari Kamera Hp',
    chooseFromLibraryButtonTitle:'Ambil Dari Gallery',
}
export default class pelanggan extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props);   
        this.state={
            avatarSource:null,
            uri:'',
            fileName:'',
            loading:false,
        };
    }

pilihGambar=()=>{
    //alert('clicked');
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }else {      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: { uri: response.uri },
            uri:response.uri,
            fileName: response.fileName
          });

          
        }
      });
}

uploadGambar=()=>{
    console.log('mulai upload');
    this.setState({loading:true})
    
    const data = new FormData();
    data.append('fileToUpload', {
        uri: this.state.uri,
        type: 'images/jpeg',
        name: this.state.fileName,
    });
    const url="https://dre1091.000webhostapp.com/Apiuas/upload.php"
    fetch(url, {
        method:'post',
        body:data
    })
    .then((response) => response.json())
    .then((responseJson) =>
    {
        console.log(responseJson);
        this.setState({loading:false})
        
    });
        
}


    render(){
        return (
            <ImageBackground source={require("./images/B2.jpg")} style={{width: '100%', height: '100%' }}>
            <View style={styles.container}>
            {
                (this.state.loading==true)&&
                (
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.loading}
                    onRequestClose={()=>{
                        alert('Modal has been closed.');
                    }}
                >
                    <ActivityIndicator
                        animating={true}
                        style={styles.indicator}
                        size="large"
                    />
                </Modal>
            
                )
            }
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Masukan data Pelanggan</Text>
                </View>

                <View style={styles.gambar}>
                    <Image source={this.state.avatarSource}
                    style={{height:200,width:200,margin:5}}
                    />
                </View>
                

                <View style={styles.vButton}>
                    <View style={styles.button}>
                        <Button onPress={this.pilihGambar} color="#919191" title="Pilih Gambar"/>
                    </View>

                    <View style={styles.button2}>
                        <Button onPress={this.uploadGambar} color="#919191" title="Upload Gambar" />
                    </View>
                  
                </View>
                <View style={styles.box1}>
                  <Text>Nama</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={penulis => this.setState({ penulis })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Alamat</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={penerbit => this.setState({ penerbit })}
                    />
                </View>

                <View style={styles.box1}>
                  <Text>NO HP</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={sampul => this.setState({ sampul })}
                    />
                </View>
                <View style={styles.vFooter}>
          <TouchableHighlight
            style={styles.button}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('AddBuku')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 24, color: 'black' }}>Edit Kategori</Text>
          </TouchableHighlight>
          </View>
            </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
container: {
    flex: 1,

    },

indicator:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:80
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
button:{
    backgroundColor: '#919191'
},
header:{
 
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },

textHeader:{
    backgroundColor: '#919191',
    color:'white',
    fontSize:20
    },  

gambar: {
    justifyContent:'center',
    alignItems:'center'
    }, 

vButton:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    },  

button:{
    flexDirection:'column',
    marginRight:90,
    justifyContent:'center',
    alignItems:'center'
    },

button2:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    },

textButton:{
    color:'white'
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
    vFooter :{
        height : '15%',
      
        alignItems : 'center',
        paddingBottom : '3%',
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
}); 