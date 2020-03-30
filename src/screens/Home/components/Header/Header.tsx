import React, { FC } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { deviceHeight } from '../../../../utils/dimensions';

const Header: FC = () => {
	return (
		<S.Container>
			<Text>HomeHeader</Text>
		</S.Container>
	);
};

const S = {
	Container: styled.View`
		flex: 1;
		height: ${deviceHeight * 0.15}px;
		background-color: yellow;
	`,
};

export default Header;
