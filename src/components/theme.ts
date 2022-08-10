import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import { Select } from '@mui/material';
import { red } from '@mui/material/colors';

export const themeButton = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#e10600',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    },
    components:{
        MuiButton: {
            styleOverrides:{
                root:{
                    fontFamily: "formula1-bold, sans-serif"
                }
            }
        }
    }
})

export const selectTheme = createTheme({
    components:{
        MuiSelect:{
            styleOverrides:{
             standard: {
                fontFamily: "formula1-bold, sans-serif",
               backgroundColor:"white",
               
             }
                
            }
        }
    }
  });