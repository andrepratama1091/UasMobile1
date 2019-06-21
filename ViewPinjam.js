import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TextInput, ScrollView, ImageBackground } from "react-native";
import Header from "./Header";

const axios = require('axios');
class ViewPinjam extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            id_pinjam: this.props.navigation.state.params.id_pinjam,
            tgl_pinjam: '',
            tgl_kembali: '',
            buku_judul: '',
            nama_cus: '',
            nama_pegawai: '',
            status:'',
        }
    }

    _getdata() {
        // alert(this.state.kategori_id);
        axios.get('https://dre1091.000webhostapp.com/Apiuas/getPinjamWith.php?id_pinjam='
            + this.state.id_pinjam)
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({ data }, () => {
                    var mystr = "{\"myval\": " + JSON.stringify(this.state.data) + "}";
                    var Jsonval = JSON.parse(mystr);
                    try {
                        this.setState({ id_pinjam: Jsonval.myval[0].id_pinjam });
                        this.setState({ tgl_pinjam: Jsonval.myval[0].tgl_pinjam });
                        this.setState({ tgl_kembali: Jsonval.myval[0].tgl_kembali });
                        this.setState({ buku_judul: Jsonval.myval[0].buku_judul });
                        this.setState({ nama_cus: Jsonval.myval[0].nama_cus });
                        this.setState({ nama_pegawai: Jsonval.myval[0].nama_pegawai });
                        this.setState({ status: Jsonval.myval[0].status });

                    } catch (error) {
                        // alert(error);
                        // this.setState({ isPeserta: 2 });
                        // errGetPes = 1;
                    }
                });
            })
    }

    _hapus = () => {
        axios.post('https://dre1091.000webhostapp.com/Apiuas/hapusPinjam.php?id_pinjam='
            + this.state.id_pinjam
        )
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
                            <Text style={styles.txtHeader}> Detail Peminjaman {this.state.id_pinjam} </Text>
                        </View>
                    </View>
                    <ScrollView>
                        <View style={styles.vBody}>
                            <View style={styles.box1}>
                                <Text>ID Peminjaman</Text>
                                <Text>{this.state.id_pinjam}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Tanggal Peminjaman</Text>
                                <Text>{this.state.tgl_pinjam}</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text>Tanggal Pengembalian</Text>
                                <Text>{this.state.tgl_kembali}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Nama Customer</Text>
                                <Text>{this.state.nama_cus}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>Judul Buku </Text>
                                <Text>{this.state.buku_judul}</Text>
                            </View>

                            <View style={styles.box1}>
                                <Text>nama_pegawai</Text>
                                <Text>{this.state.nama_pegawai}</Text>
                            </View>
                            <View style={styles.box1}>
                                <Text>Status</Text>
                                <Text>{this.state.status}</Text>
                            </View>

                        </View>
                    </ScrollView>
                    <View style={styles.vFooter}>
                        
                        <View style={styles.box2}>
                            <TouchableHighlight
                                activeOpacity={0.5}
                                style={styles.vButton}
                                onPress={() => {
                                    this._hapus();
                                    this.props.navigation.navigate('ViewListPeminjaman')
                                  }
                                }
                            >
                                <Text style={styles.txtButton}>Hapus</Text>
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
export default ViewPinjam;