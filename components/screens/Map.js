import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
// import firebase from './firebase';
import MapView, {Marker} from 'react-native-maps';
import LocationDataService from '../Location.service';
import * as Location from 'expo-location';
import {useSelector, useDispatch} from 'react-redux';
import {setLat, setLong} from '../reduxConfig.js/action';
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

  useEffect (() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync ();
      if (status !== 'granted') {
        setErrorMsg ('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync ({});
      setLocation (location);

      dispatch (setLat (location.coords.latitude));
      dispatch (setLong (location.coords.longitude));
      setmapRegion ({
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }) ();
  }, []);

  return (
    <View style={styles.container}>

      <MapView
        style={{alignSelf: 'stretch', height: '100%'}}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </View>
  );
};
export default Map;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
