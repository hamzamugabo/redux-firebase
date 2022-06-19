import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({onPress }) => (
	<TouchableOpacity onPressOut={onPress} style={styles.container}>
		<Text style={{fontSize:19,color:'white'}}>Go To Map</Text>
	</TouchableOpacity>
);

Button.propTypes = {
	iconName: PropTypes.string,
	onPress: PropTypes.func.isRequired
};
const styles = StyleSheet.create ({
	container: {
		height: 45,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
		width: 150,
		borderRadius: 50,
		backgroundColor:'blue',
	},
  });
export default Button;
