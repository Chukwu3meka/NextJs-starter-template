import { createTheme } from "@mui/material/styles";

const iPhoneInput = {
  styleOverrides: {
    root: {
      "*": {
        // to prevent mui input not working on iPhone
        WebkitUserSelect: "text !important" /* Chrome, Opera, Safari */,
        MozUserSelect: "text !important" /* Firefox 2+ */,
        MsUserSelect: "text !important" /* IE 10+ */,
        userSelect: "text !important" /* Standard syntax */,
      },
    },
  },
};

const theme = createTheme({});

const muiTheme = createTheme({
  typography: {
    fontFamily: "'Playfair Display', serif",
  },

  components: {
    MuiInput: iPhoneInput,
    MuiTextField: iPhoneInput,
    MuiFilledInput: iPhoneInput,
    MuiOutlinedInput: iPhoneInput,

    MuiPaper: {
      styleOverrides: {
        root: {
          // color,
          padding: 5,
          boxSizing: "border-box",
          // cursor: "pointer",
          // background,
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: 300,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
          // hide last border
          "&:last-child td, &:last-child th": {
            border: 0,
          },
        },
      },
    },
  },
});

export default muiTheme;
