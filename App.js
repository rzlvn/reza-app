import React from 'react'
import { LogBox } from 'react-native'
import RootNavigator from './navigation'

export default function App() {
	return <RootNavigator />
}

LogBox.ignoreLogs(['[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',])


