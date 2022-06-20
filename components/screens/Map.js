import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
// import firebase from './firebase';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux';
import {setLat, setLong} from '../reduxConfig.js/action';
import firebase from '../firebase';
const Map = ({navigation}) => {
  const {lat, long} = useSelector (state => state.userReducer);
  const dispatch = useDispatch ();
  // console.log(lat)
  const [mapRegion, setmapRegion] = useState ({
    latitude: lat,
    longitude: long,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [location, setLocation] = useState (null);
  const [errorMsg, setErrorMsg] = useState (null);
const reduxFirebase=()=>{
  (async () => {
    let {status} = await Location.requestForegroundPermissionsAsync ();
    if (status !== 'granted') {
      setErrorMsg ('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync ({});
    setLocation (location);
    try {
      dispatch (setLat (location.coords.latitude));
      dispatch (setLong (location.coords.longitude));
      console.log('lat',location.coords.latitude)
      console.log('long',location.coords.longitude)
      setmapRegion ({
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    } catch (e) {
      console.log (e);
    }
    firebase
      .database ()
      .ref ('coords')
      .set ({
        latitude: lat,
        longitude: long,
      })
      .then (() => console.log ('Data set.'))
      .catch (err => console.log (err));
  }) ();
}
const refresh=()=>{
  reduxFirebase();
}
  useEffect (() => {
    console.log(mapRegion)
  reduxFirebase();
  // refresh();
  }, []);
  const _handleMapRegionChange = mapRegion => {
    setmapRegion(mapRegion);
  };
  return (
    <View style={styles.container}>
<View>
<MapView
        style={{alignSelf: 'stretch', height: '100%'}}
        region={mapRegion}
        onUserLocationChange={event => console.log(event.nativeEvent)}
        onPress={reduxFirebase}
        // onRegionChange={reduxFirebase}
        // showsUserLocation={true}
      >
        <Marker coordinate={mapRegion} title={lat +'  '+ long} />

      </MapView>
</View>
     
    </View>
  );
};
export default Map;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
