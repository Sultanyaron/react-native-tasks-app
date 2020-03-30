import { DefaultTheme } from 'styled-components';

const colors = {
	mainBackgroundColor: '#DDFD43',
	white: '#FFFF',
	gray1: '#8E8E8E',
	darkGray: '#4E4E4E',
	blue: '#3895D3',
};

const defaultTheme: DefaultTheme = {
	colors: {
		...colors,
		button: {
			dark: {
				textColor: colors.white,
				backgroundColor: colors.darkGray,
			},
			light: {
				textColor: colors.darkGray,
				backgroundColor: colors.white,
			},
		},
	},
	fontSizes: {
		s11: 11,
	},
	gradients: {},
};

export default defaultTheme;
