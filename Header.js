import React from 'react';
import {Text,View,Image} from 'react-native';
const Header = (props) => {
    const { text, vheader } = styles;
    return (
        <View style={vheader}>
          <Image 
                style={styles.gambar}
                source={{uri:"http://rey1024.com/undiksha.png"}}
                /> 
          <Text style={styles.Htext}> {props.header} </Text>
        </View>
    );
};
const styles = {
  vheader: {
    marginTop: '10%',
    paddingLeft: '20%',
    paddingRight: '20%',
    backgroundColor: '$919191',
  },
  Htext: {
    color: 'white',
    textAlign: 'center',
    fontSize:15,
  }
};
export default Header;