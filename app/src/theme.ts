import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(5, 85%, 63%)",
      }
    },
    typography: {
        fontFamily: [
          'Inter'
        ].join(',')
      }
  });

export default theme