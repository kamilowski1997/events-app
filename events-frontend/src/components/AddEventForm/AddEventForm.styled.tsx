import { Button, Stack, styled } from '@mui/material';
import { colors } from '../../consts/colors';

export const StyledMainStack = styled(Stack)({
  backgroundColor: 'rgba(14, 14, 16, 1)',
  backgroundImage: 'linear-gradient(17deg, rgba(14, 14, 16, 1) 54%, rgba(145, 71, 255, 1) 100%)',
  maxWidth: '600px',
  width: '100%',
  border: `3px solid ${colors.primary}`,
  borderRadius: '8px',
  padding: '24px',
});

export const StyledSubmitButton = styled(Button)({
  marginTop: '40px',
});

export const StyledForm = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});
