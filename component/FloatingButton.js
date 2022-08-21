import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Fab } from 'native-base'

const FloatingButton = ({ actionOnPress }) => (
	<Fab direction='up' style={styles.button} position='bottomRight' onPress={actionOnPress}>
		<Icon name='ios-add' />
	</Fab>
)

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#b30c0c'
	}
})

export default FloatingButton
