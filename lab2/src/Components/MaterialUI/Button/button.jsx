import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { lime } from '@mui/material/colors';




const ColorButton = styled(Button)(({ theme, color }) => ({
  color: theme.palette.getContrastText(color),
  backgroundColor: color,
  '&:hover': {
    backgroundColor: color,
  },
}));

export default function CustomizedButtons(props) {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton variant="contained" color={props.color}>{props.text}</ColorButton>
      
    </Stack>
  );
}