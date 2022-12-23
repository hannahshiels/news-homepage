import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: "hsl(5, 85%, 63%)",
        dark: "hsl(240, 100%, 5%)",
      },
      secondary: {
        main: "hsl(35, 77%, 62%)",
      },
      neutral: {
        main: "hsl(233, 8%, 79%)",
        neutral: "hsl(36, 100%, 99%)",
        dark: "hsl(236, 13%, 42%)",
        darker: "hsl(240, 100%, 5%)",
      }
    },
    typography: {
      body1: {
        fontSize: "15px",
        lineHeight:2
      },
        fontFamily: [
          'Inter'
        ].join(',')
      }
  });

  declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
  
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }

    interface SimplePaletteColorOptions {
      darker?: string;
      neutral?: string;

    }
  

    interface PaletteColor {
      darker?: string;
      neutral?: string;
    }
    }


export default theme