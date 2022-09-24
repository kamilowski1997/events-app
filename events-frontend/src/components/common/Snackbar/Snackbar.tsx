import React from 'react';
import {
  Alert,
  AlertColor,
  AlertTitle,
  Snackbar as MuiSnackbar,
  SnackbarProps as MuiSnackbarProps,
} from '@mui/material';

interface SnackbarProps extends MuiSnackbarProps {
  onClose: () => void;
  autoHideDuration?: number;
  type?: AlertColor;
  message?: string;
  title?: string;
}

const Snackbar = ({
  onClose,
  autoHideDuration = 3000,
  type = 'info',
  message,
  title,
  ...props
}: SnackbarProps) => (
  <MuiSnackbar
    autoHideDuration={autoHideDuration}
    onClose={onClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    {...props}
  >
    <Alert onClose={onClose} severity={type} sx={{ width: '100%' }}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  </MuiSnackbar>
);

export { Snackbar };
