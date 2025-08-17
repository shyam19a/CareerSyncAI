import React from "react";
import ResumeMatcher from "./components/ResumeMatcher";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color, you can change this
    },
    background: {
      default: "#f4f7fb", // Soft light background color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResumeMatcher />
    </ThemeProvider>
  );
}

export default App;
