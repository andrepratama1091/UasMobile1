import React from 'react';
import { StyleSheet, Text,View, FlatList,TouchableHighlight} from 'react-native';
import {ListItem ,Icon} from 'react-native-elements'
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


export default class Kategori extends  React.Component {
  static navigationOptions = {
    header: null
}

  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/upload/kategori/';
    this.state = {
        data: []
    };
  }
  
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        axios.get(`http://dre1091.000webhostapp.com/Apiuas/getKategoriBuku.php`)
        .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      }
    );
    
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => {
    return(
  <ListItem
    onPress={ 
        ()=>this.props.navigation.navigate('Detail',{ 
            kategori_id: item.kategori_id,
            kategori_nama: item.kategori_nama }) 

        }
    title={item.kategori_nama}
    leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
    rightIcon={{
      name : 'create'
    }}
    

    

  />
)}
  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Kategori Buku </Text>
          </View>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
             />
            <ActionButton buttonColor="black">
          <ActionButton.Item buttonColor='#9b59b6' title="Tambah Kategori Buku" 
          onPress={() => this.props.navigation.navigate('AddKategori')}>
            <Icon style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
       flex: 1,
       backgroundColor: '#919191',
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
});