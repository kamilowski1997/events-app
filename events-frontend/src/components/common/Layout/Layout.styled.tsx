import { Box, styled } from '@mui/material';
import { colors } from '../../../consts/colors';

export const LayoutStyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: colors.background,
});
