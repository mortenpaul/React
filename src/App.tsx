import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
