import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem,Icon } from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import axios from 'axios';


export default class DetailK extends  React.Component {
  static navigationOptions = {
    header: null
}
  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/upload/kategori/';
    this.state = {
        data: [],
        kategori_id:this.props.navigation.state.params.kategori_id,
        kategori_nama:this.props.navigation.state.params.kategori_nama
    };
  }
  
  componentDidMount() {
    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        axios.get('https://dre1091.000webhostapp.com/Apiuas/getBuku.php?kategori_id='
      + this.state.kategori_id)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      }
    );
    
  }

  _hapus = () => {
    axios.post('https://dre1091.000webhostapp.com/Apiuas/hapusKategori.php',{
      kategori_id : this.state.kategori_id
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
  onPress={ 
    ()=>this.props.navigation.navigate('ViewBuku',{ 
        buku_kode: item.buku_kode,
        kategori_id: item.kategori_id }) 
    }
    title={item.buku_judul}
    leftAvatar={{ source: { uri: prefik_url+item.gambar } }}
    rightIcon={{
      name : 'create'
    }}
  />
)
  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Daftar Buku {this.state.kategori_nama} </Text>
          </View>
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.categories}
               renderItem={this.renderItem}
             />
            <ActionButton buttonColor="black">
              <ActionButton.Item buttonColor='#9b59b6' title="Hapus Kategori" 
                onPress={
                  () => {
                    this._hapus();
                    this.props.navigation.navigate('AddBuku')
                  }
                }>
                <Icon  style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="Edit Kategori" 
                onPress={() => this.props.navigation.navigate('EditKategori',{
                  kategori_id: this.state.kategori_id,})}>
                <Icon  style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title="Tambah Buku" 
                onPress={() => this.props.navigation.navigate('AddBuku',{kategori_id:this.state.kategori_id})}>
                <Icon  style={styles.actionButtonIcon} />
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
    color: '#919191',

    },
    header: {
    height:70,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
    },
});