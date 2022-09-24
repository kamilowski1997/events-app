import { Backdrop, BackdropProps, CircularProgress } from '@mui/material';

const BackdropAppLoader = ({ ...props }: BackdropProps) => {
  return (
    <Backdrop {...props}>
      <CircularProgress />
    </Backdrop>
  );
};

export default BackdropAppLoader;
