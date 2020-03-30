import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useSafeArea, EdgeInsets } from 'react-native-safe-area-context';
import { Header } from './components';

const Home: FC = () => {
	const insets = useSafeArea();
	return (
		<S.Wrapper bounces={false} insets={insets}>
			<Header />
			<Text>Home Screen</Text>
		</S.Wrapper>
	);
};

export default Home;

const S = {
	Wrapper: styled.ScrollView<{ insets: EdgeInsets }>(
		({ theme, insets }) => `
		flex: 1;
		background-color: ${theme.colors.blue};
		padding-top: ${insets.top}px;
		`
	),
};
