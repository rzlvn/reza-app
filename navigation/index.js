import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen'
import AddTaskScreen from '../screens/AddTaskScreen'

const StackNav = createStackNavigator(
	{
		// Home: HomeScreen,
		// AddTask: AddTaskScreen,
		Home: {
			screen: HomeScreen
		},
		AddTask: {
			screen: AddTaskScreen
		}
	},
	{
		defaultNavigationOptions: {
			title: 'My Task List',
		    headerStyle: {
			backgroundColor: '#b30c0c',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
			fontWeight: 'bold',
			},
		},
	},
	{
		initialRouteName: "Home",
	}
	// {
	// 	mode: 'modal'
	// }
)

const RootNavigator = createAppContainer(StackNav)

export default function App(){
	return (
		<RootNavigator>
			<HomeScreen />
	  	</RootNavigator>
	)
}
