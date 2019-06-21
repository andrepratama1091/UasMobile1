import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet,FlatList, Image, TouchableHighlight} from "react-native"; 
import {ListItem,Icon} from 'react-native-elements'
import ActionButton from 'react-native-action-button';
import axios from 'axios';

export default class ViewListPeminjaman extends React.Component {
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
            axios.get(`http://dre1091.000webhostapp.com/Apiuas/getPinjam.php`)
            .then(res => {
              const categories = res.data;
              console.log(categories);
              this.setState({ categories });
            })
          }
      );
        
      }
      keyExtractor = (item, index) => index.toString()
    
      renderItem = ({ item }) => (
      <ListItem
        onPress={ 
            ()=>this.props.navigation.navigate('ViewPinjam',{ 
                id_pinjam: item.id_pinjam }) 
            }
        title={item.id_pinjam + '-' + item.buku_judul + '-' + item.status }
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
                <Text style={styles.txtHeader}> Daftar Peminjaman </Text>
              </View>
                <FlatList
                   keyExtractor={this.keyExtractor}
                   data={this.state.categories}
                   renderItem={this.renderItem}
                 />
              <ActionButton buttonColor="black">
                <ActionButton.Item buttonColor='#9b59b6' title="Tambah Peminjaman" 
                onPress={() => this.props.navigation.navigate('Peminjaman')}>
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
        color:'#919191',
    
      },
      header: {
        height:70,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
      },
    });
   