export type ThemeProps = {
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
    grey: string;
    midGrey: string;
    lightGrey: string;
    success: string;
    danger: string;
    warning: string;
  };
};

export const theme: ThemeProps = {
  colors: {
    primary: '#0B7786',
    secondary: '#A60C00',
    black: '#1F1F1F',
    white: '#FFFFFF',
    grey: '#383838',
    midGrey: '#707070',
    lightGrey: '#9F9F9F',
    success: '#1FBA5D',
    danger: '#FF4242',
    warning: '#f0ad4e',
  },
};

export default theme;
