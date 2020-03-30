import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const isLoggedIn = true;

const Navigation = () => {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				{isLoggedIn ? <MainStack /> : <AuthStack />}
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default Navigation;
