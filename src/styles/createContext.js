/* eslint-disable flowtype/require-valid-file-annotation */

import { create, SheetsRegistry } from "jss";
import preset from "jss-preset-default";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green } from "@material-ui/core/colors";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export default function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}
