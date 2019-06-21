import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet,FlatList, Image, TouchableHighlight} from "react-native"; 
import {ListItem} from 'react-native-elements'
import axios from 'axios';

export default class ViewListPengembalian extends React.Component {
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
        axios.get(`http://dre1091.000webhostapp.com/Apiuas/getKembali.php`)
          .then(res => {
            const categories = res.data;
            console.log(categories);
            this.setState({ categories });
          })
      }
      keyExtractor = (item, index) => index.toString()
    
      renderItem = ({ item }) => (
      <ListItem
        onPress={ 
            ()=>this.props.navigation.navigate('Detail',{ 
                kategori_id: item.kategori_id }) 
            }
        title={item.Buku_judul}
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
                <Text style={styles.txtHeader}> Daftar Pengembalian </Text>
              </View>
                <FlatList
                   keyExtractor={this.keyExtractor}
                   data={this.state.categories}
                   renderItem={this.renderItem}
                   
    
                 />
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
   