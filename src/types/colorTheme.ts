import { colorThemeNames } from '../const/colorTheme';

export type ThemeStyle = {
	colors: {
		text: string;
		background: string;
		tabBg: string;
		tabColor: string;
		secondText: string;
		link: string;
		linkHover: string;
		border: string;
		thirdText: string;
		buttonBg: string;
		buttonHover: string;
		buttonActive: string;
		iconButton: string;
		iconButtonHover: string;
		buttonText: string;
		separator: string;
		project: string;
		borderLight: string;
		numberBg: string;
		numberColor: string;
		linkCase: string;
	};
	text: {
		H2: {
			fontWeight: string;
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
		};
		caption: {
			fontWeight: string;
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
		};
		BodyM: {
			fontWeight: string;
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
		};
		BodyS: {
			fontWeight: string;
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
		};
		CAPSLOCK: {
			fontWeight: string;
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
		};
		H1: {
			fontWeight: string;
			fontSize: string;
			lineHeight: string;
			letterSpacing: string;
		};
	};
};

export type ColorThemeName = (typeof colorThemeNames)[number];

/**
 * Type guard for ColorThemeName
 *
 * @param {unknown} val
 * @return {*}  {val is ColorThemeName}
 */
export const isColorThemeName = (val: unknown): val is ColorThemeName =>
	colorThemeNames.includes(val as ColorThemeName);
