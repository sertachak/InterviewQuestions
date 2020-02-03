import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
export const authEndpoint = 'https://accounts.spotify.com/authorize';


export default function App() {

  const clientId = "6462e55abfd5435ba392959529e6c1a7";
  const redirectUri = "http:%2F%2Flocalhost:3000%2Fdata%2F";
  const scopes = [
    "playlist-read-private",
    "playlist-modify-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "user-library-read",
    "user-library-modify",
    "user-top-read",
    "user-read-recently-played"
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  [token, setToken] = useState("");
  const [ startingText, setStartingText ] = useState("Login to use Recommendation System");
  return (
    <View>
      <ImageBackground source={require('./resources/mainBackground.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={ styles.mainView }>
        <Image style={ styles.image } source={{uri:'https://developer.spotify.com/assets/branding-guidelines/logo@2x.png'}}/>
        <Text style={ styles.startingText }>{startingText}</Text>
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => {
              Linking.openURL(`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`)
            }}  >
            <Text style={styles.customBtnText}>Login</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image:{
    opacity:.7,
    width:100,
    height:50
  },
  startingText:{
    marginTop: 10,
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },

  customBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: "#4b0082",
},

/* Here, style the background of your button */
customBtnBG: {  
  marginTop:10,
  backgroundColor: "#007aff",
  paddingHorizontal: 30,
  paddingVertical: 5,
  borderRadius: 30
}
});
