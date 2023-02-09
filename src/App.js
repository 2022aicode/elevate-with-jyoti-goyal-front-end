import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "components/common/header";
import {
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "components/main/home/home";
import theme from "./theme";
import Footer from "components/common/footer";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </Header>
          <Footer/>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
