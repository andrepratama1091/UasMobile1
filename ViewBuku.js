import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput, ScrollView, ImageBackground } from "react-native";
import Header from "./Header";

const axios = require('axios');
class ViewBuku extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            buku_kode: this.props.navigation.state.params.buku_kode,
            buku_judul: '',
            penulis: '',
            penerbit: '',
            sinopsis: '',
            sampul: '',
            kategori_id: this.props.navigation.state.params.kategori_id,
            jumlah: 0,
        }
    }

    _getdata() {
        // alert(this.state.kategori_id);
        axios.get('https://dre1091.000webhostapp.com/Apiuas/getBukuWith.php?buku_kode='
            + this.state.buku_kode)
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({ data }, () => {
                    var mystr = "{\"myval\": " + JSON.stringify(this.state.data) + "}";
                    var Jsonval = JSON.parse(mystr);
                    try {
                        this.setState({ buku_judul: Jsonval.myval[0].buku_judul });
                        this.setState({ penulis: Jsonval.myval[0].penulis });
                        this.setState({ penerbit: Jsonval.myval[0].penerbit });
                        this.setState({ sinopsis: Jsonval.myval[0].sinopsis });
                        this.setState({ sampul: Jsonval.myval[0].sampul });
                        this.setState({ jumlah: Jsonval.myval[0].jumlah });

                    } catch (error) {
                        // alert(error);
                        // this.setState({ isPeserta: 2 });
                        // errGetPes = 1;
                    }
                });
            })
    }

    _hapus = () => {
        axios.post('https://dre1091.000webhostapp.com/Apiuas/hapusBuku.php', {
            buku_kode: this.state.buku_kode
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        this.willFocusSubscription = this.props.navigation.addListener(
            'willFocus',
            () => {
                this._getdata();
            }
        );
    }

    render() {
        return (
            <ImageBackground source={require("./images/B2.jpg")} style={{ width: '100%', height: '100%' }}>

                <View style={styles.vMain}>

                    <View style={styles.judul}>
                        <View style={styles.txtHeader}>
                            <Text style={styles.txtHeader}> Detail {this.state.buku_judul} </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.vBody}>
                            <View style={styles.box1}>
                                <Text>Kode Buku</Text>
                                <Text>{this.state.buku_kode}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Judul Buku</Text>
                                <Text>{this.state.buku_judul}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Penulis</Text>
                                <Text>{this.state.penulis}</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text>Penerbit</Text>
                                <Text>{this.state.penerbit}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Sampul</Text>
                                <Text>{this.state.sampul}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Sinopsis</Text>
                                <Text>{this.state.sampul}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Jumlah</Text>
                                <Text>{this.state.jumlah}</Text>
                            </View>




                        </View>
                    </ScrollView>
                    <View style={styles.vFooter}>
                        <View style={styles.box2}>
                            <TouchableHighlight
                                activeOpacity={0.5}
                                style={styles.vButton}
                                onPress={() => {
                                    this.props.navigation.navigate('EditBuku', {
                                        buku_kode: this.state.buku_kode,
                                        buku_judul: this.state.buku_judul,
                                        penulis: this.state.penulis,
                                        penerbit: this.state.penerbit,
                                        sinopsis: this.state.sinopsis,
                                        sampul: this.state.sampul,
                                        kategori_id: this.state.kategori_id,
                                        jumlah: this.state.jumlah,

                                    })
                                }
                                }
                            >
                                <Text style={styles.txtButton}>Edit Buku</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.box2}>
                            <TouchableHighlight
                                activeOpacity={0.5}
                                style={styles.vButton}
                                onPress={() => {
                                    this._hapus();
                                    this.props.navigation.navigate('Detail',{
                                        kategori_id: this.state.kategori_id
                                    })
                                  }
                                }
                            >
                                <Text style={styles.txtButton}>Hapus Buku</Text>
                            </TouchableHighlight>
                        </View>



                    </View>

                </View>

            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    vMain: {
        flex: 1,

    },
    vFooter: {
        height: '15%',

        alignItems: 'center',
        paddingBottom: '3%',
        flexDirection: 'row'
    },
    txtHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#919191',

    },
    judul: {
        height: '9%',
        backgroundColor: '#fff',
    },

    vBody: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',


    },
    txtHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },
    header: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vHeader2: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vHeader: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

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

    textBox1: {
        color: 'white',
        fontSize: 15,
    },
    box2: {
        flex: 0.8,
        margin: 10,
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
        padding: 20,
        margin: 10,
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
        marginBottom: 10,
    }
});
export default ViewBuku;