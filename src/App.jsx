import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginPage from "./components/LoginPage";
import OrdersPage from "./components/OrdersPage";
import store from "./redux/store";


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage/>} />
            <Route path="/orders" element={<OrdersPage/>} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
