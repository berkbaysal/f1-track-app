interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

import { createTheme } from '@mui/material/styles';
import blue from '@mui/material/colors/blue';

export const theme = createTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#e10600',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    }
})