import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import Button from '../Button';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Button
        onPress={() => navigation.navigate ('Map')}
     />
    </View>
  );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
