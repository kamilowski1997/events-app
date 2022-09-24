import { createTheme, CSSInterpolation } from '@mui/material';
import { colors } from '../../consts/colors';

const basicButtonStyle: CSSInterpolation = {
  fontFamily: 'Roboto',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  textTransform: 'none',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
};

const appTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.neutral,
    },
    secondary: {
      main: colors.secondary,
      contrastText: colors.neutral,
    },
    text: {
      primary: colors.primaryText,
      secondary: colors.secondaryText,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: basicButtonStyle,
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: ({ theme }) => ({
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '36px',
          color: theme.palette.text.primary,
        }),
        h3: ({ theme }) => ({
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: '30px',
          lineHeight: '36px',
          color: theme.palette.text.primary,
        }),
        h4: ({ theme }) => ({
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '26px',
          color: theme.palette.text.primary,
        }),
        h5: ({ theme }) => ({
          fontFamily: 'Roboto',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          color: theme.palette.text.primary,
        }),

        body1: ({ theme }) => ({
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '21px',
          color: theme.palette.text.secondary,
        }),
        body2: ({ theme }) => ({
          fontFamily: 'DM Sans',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '20px',
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#464649',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.Mui-focused': {
            fontWeight: 700,
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: colors.backdrop,
          color: colors.primary,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          color: '#18181b',
        },
      },
    },
  },
});

export default appTheme;
